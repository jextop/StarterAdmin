FROM nginx:stable

# web files
COPY ./deploy/web/ /usr/share/nginx/html

# config
COPY ./deploy/conf/ /etc/nginx/

WORKDIR /etc/nginx

EXPOSE 8010
