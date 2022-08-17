# docker 指令
## 登录
docker login --username=liuweishi hub.test.com

## tag
docker tag : 标记本地镜像，将其归入某一仓库
```
root@runoob:~# docker tag ubuntu:15.10 runoob/ubuntu:v3
root@runoob:~# docker images   runoob/ubuntu:v3
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
runoob/ubuntu       v3                  4e3b13c8a266        3 months ago        136.3 MB
```
# k8s
https://www.cnblogs.com/caodan01/p/15133112.html