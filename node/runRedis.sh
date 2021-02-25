#! /bin/bash

docker run -d --network revy --rm -p 6379:6379 redis:latest