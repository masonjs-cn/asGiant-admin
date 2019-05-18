# nginx

反向代理的路径下找不到文件，需要单独指定js css文件的访问路径。

```bash
server {
    listen 80;
    server_name video.xxx.cn;
    proxy_set_header Host $host:$server_port;
    proxy_set_header X-Real-Ip $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;

    location / {
        proxy_set_header Host $host:$server_port;
        proxy_set_header X-Real-Ip $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_pass http://127.0.0.1:7001;

    }

    location ~ .*\.(js|css)$ {
        proxy_pass http://127.0.0.1:7001;
    }

}
```
