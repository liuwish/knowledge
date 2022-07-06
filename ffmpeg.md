# ffmpeg 常用指令
### 去除logo
```
ffplay -i JINUSEAN.mp4 -vf delogo=x=72:y=32:w=168:h=86:show=1
```
```
ffmpeg -i JINUSEAN.mp4 -vf delogo=x=72:y=32:w=168:h=86 output.mp4
```
### 基础指令
拷贝视频轨道

```
-vcodec copy
```

拷贝音轨

```
-acodec copy
```

指定码率
```
-b:v 3000k
```