FROM tiangolo/nginx-rtmp

RUN apt-get update
RUN apt-get install ffmpeg -y