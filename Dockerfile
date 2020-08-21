FROM registry.cn-shanghai.aliyuncs.com/jext/starter_admin_base:latest

LABEL maintainer="Jext Community, https://github.com/jextop"

# copy code
COPY ./ /code
WORKDIR /code

# package and copy web files
RUN cnpm install; \
    npm run build; \
    ls ./dist; \
    \
    mv ./dist/* /usr/share/nginx/html; \
    mv ./public/favicon.png /usr/share/nginx/html; \
    \
    cd ..; \
    rm -rf /code; \
    ls -al

# config
COPY ./deploy/conf/ /etc/nginx/

WORKDIR /etc/nginx

EXPOSE 8010
