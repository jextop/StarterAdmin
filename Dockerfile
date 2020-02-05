FROM registry.cn-shanghai.aliyuncs.com/jext/starter_admin_base:latest

# copy code
COPY ./ /code
WORKDIR /code

# package and copy web files
RUN cnpm install; \
    npm run build; \
    \
    mv ./dist/* /usr/share/nginx/html; \
    mv ./public/favicon.png /usr/share/nginx/html

# config
COPY ./deploy/conf/ /etc/nginx/

WORKDIR /etc/nginx

# delete code
RUN rm -rf /code

EXPOSE 8010
