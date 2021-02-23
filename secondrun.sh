docker run -d -p 1935:1935 -p 80:80 -v $(pwd)/nginx/two.conf:/etc/nginx/nginx.conf -v $(pwd)/index.html:/var/www/jake/index.html nr
