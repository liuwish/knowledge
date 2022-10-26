# istio 相关
### istio 优势
解耦了spring cloud、dubbo微服务架构的流量、灰度、限流、熔断等微服务中间件，下沉这些偏运维能力到网格层，微服务更多的关注应用之间的业务逻辑和协议
### istio 功能
#### 流量管理
控制服务间的流量和api的调用方向
#### 可观察性
服务之间的依赖关系，调用流向；可以对等于apm
#### 策略执行
+ 路由、熔断等策略应用于服务之间的互动，确保策略可以执行，资源在消费者间良好分配，策略修改的是网格配置，而不是修改应用程序代码；
+ sentinel等类似中间件也可以完成对等功能，需要集成到服务，做流量拦截；
#### 服务身份和安全
为网格中的服务提供身份验证，提供服务流量保护的能力；通用框架都有这个能力吧

### 参考文献
+ https://blog.csdn.net/weixin_33859844/article/details/85958946

## k8s、istio关系
https://jimmysong.io/blog/why-do-you-need-istio-when-you-already-have-kubernetes/

#### istio是k8s的好帮手
k8s提供的功能：应用负载的部署、升级、扩容等运行管理能力
k8s中的service机制可以实现服务注册、发现和负载均衡，并通过服务名访问服务实例
k8s中的pod部署微服务也很合适，解决了微服务的互访互通的问题。

k8s的不足（为什么引入istio）：
无法管理服务间的访问，如服务的熔断 限流 动态路由 调用链追踪等

istio实现的简单说明
k8s的service基于节点的kube-proxy从kube-apiserver上获取service和endpoint信息，将对service的请求经过负载均衡后转发到对应的endpoint上。但无法基于应用层的信息进行负载均衡、无法进行流量管理、无法进行指标和调用链的跟踪。

istio复用了k8s service的定义，istio的服务发现就是中kube-apiserver中获取service和endpoint，然后将其转换成istio服务模型的service和serviceInstance，但是其数据面组件不再是kupe-proxy，而是每个pod里面部署的sidecar，可以看做是每个服务实例的proxy。所以proxy的粒度更细，通过拦截Pod的流量，并在sidecar上解析各种应用层协议，提供真正的应用层治理、监控和安全等能力。
————————————————
版权声明：本文为CSDN博主「深山猿」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/h2604396739/article/details/115869669


Kubernetes 的本质是应用生命周期管理，具体来说就是部署和管理（伸缩、自动恢复、发布）。
Kubernetes 为微服务提供了一个可扩展、高弹性的部署和管理平台。
服务网格是基于透明代理，通过 sidecar 代理拦截服务之间的流量，然后通过控制平面配置管理它们的行为。
图片: https://uploader.shimo.im/f/yxsqkBuvAn8KSnbp.png!thumbnail?accessToken=eyJhbGciOiJIUzI1NiIsImtpZCI6ImRlZmF1bHQiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJhY2Nlc3NfcmVzb3VyY2UiLCJleHAiOjE2NTY0MTY3ODksImZpbGVHVUlEIjoidFI4SjZnVzZoeXhqUDlEeCIsImlhdCI6MTY1NjQxNjQ4OSwidXNlcklkIjo3MDE0NDIyM30.X3ykAjqgWJhuyoJHMj9ff2xPJLonyr7U6-gwI1woNi8

图片: https://uploader.shimo.im/f/yFpNGsbkHAXBVBot.png!thumbnail?accessToken=eyJhbGciOiJIUzI1NiIsImtpZCI6ImRlZmF1bHQiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJhY2Nlc3NfcmVzb3VyY2UiLCJleHAiOjE2NTY0MTY3ODksImZpbGVHVUlEIjoidFI4SjZnVzZoeXhqUDlEeCIsImlhdCI6MTY1NjQxNjQ4OSwidXNlcklkIjo3MDE0NDIyM30.X3ykAjqgWJhuyoJHMj9ff2xPJLonyr7U6-gwI1woNi8
Istio的架构

图片: https://uploader.shimo.im/f/WiSsYXq3OduOBjht.png!thumbnail?accessToken=eyJhbGciOiJIUzI1NiIsImtpZCI6ImRlZmF1bHQiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJhY2Nlc3NfcmVzb3VyY2UiLCJleHAiOjE2NTY0MTY3ODksImZpbGVHVUlEIjoidFI4SjZnVzZoeXhqUDlEeCIsImlhdCI6MTY1NjQxNjQ4OSwidXNlcklkIjo3MDE0NDIyM30.X3ykAjqgWJhuyoJHMj9ff2xPJLonyr7U6-gwI1woNi8
istio部署指令
配置namespace自动加注istio
kubectl label namespace default istio-injection=enabled
其实istio默认每个命名空间都会设置该参数
该参数的含义在于将会设置namespace下的所有pod都会自动注入sidecar
​

应用安装
kubectl apply -f bookinfo.yml

安装完成后可以找一个pod看下,会发现每一个pod里都多部署了一个容器,那就是网络代理
kubectl describe pod [pod名]

外部网关
kubectl apply -f bookinfo-gateway.yml
gateway其实就是k8s的ingress,底层是一个nginx,提供了k8s对外访问的能力

# 获取gateway的对外暴露ip和端口 -n指定命名空间
kubectl get svc istio-ingressgateway -n instio-system

本地k8s istio 安装
https://www.qikqiak.com/istio-book/install/1.Docker%20for%20Mac%E5%AE%89%E8%A3%85istio.html

https://blog.csdn.net/qq_34885405/article/details/93191583


http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/#/namespace/istio-system?namespace=default