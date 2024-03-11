# network
## linux 网络监控
- iftop
```
yum install flex byacc  libpcap ncurses ncurses-devel libpcap-devel
yum install epel-release //no package found依赖此命令解决
yum install iftop
```

## disk 磁盘相关

磁盘速度测试
- hdparm -Tt dir
```
yun install hdparm
```

## 沙箱
https://juejin.cn/post/6927151461625233416

### 按照时间删除文件
find ./test -name '*.txt' -amin -10 | xargs rm -rf