FROM nginx:stable

# web files
COPY ./deploy/web/ /usr/share/nginx/html

# config
COPY ./deploy/conf/nginx.conf /etc/nginx/nginx.conf
COPY ./deploy/conf/conf.d /etc/nginx/conf.d

WORKDIR /etc/nginx

EXPOSE 8010
