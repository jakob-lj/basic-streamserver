docker run -d -p 1935:1935 -p 80:80 --name nginx-rtmp -v $(pwd)/nginx/nginx.conf:/etc/nginx/nginx.conf tiangolo/nginx-rtmp
