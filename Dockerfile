FROM registry.cn-shanghai.aliyuncs.com/jext/starter_admin_base:latest

# web files
COPY ./ /code
WORKDIR /code

# package
RUN cnpm install; \
    npm run build

# web files
RUN mv ./dist/* /usr/share/nginx/html; \
    mv ./public/favicon.png /usr/share/nginx/html

# config
COPY ./deploy/conf/ /etc/nginx/

WORKDIR /etc/nginx

# delete code
RUN rm -rf /code

EXPOSE 8010
