#docker run -d -p 1935:1935 -p 80:80 --name nginx-rtmp -v $(pwd)/nginx/nginx.conf:/etc/nginx/nginx.conf tiangolo/nginx-rtmp
docker run -d --network revy -p 1935:1935 -p 80:80 --name nginx-rtmp -v $(pwd)/nginx/two.conf:/etc/nginx/nginx.conf -v streamvol:/mnt nr