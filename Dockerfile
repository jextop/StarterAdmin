FROM node:8

# copy files
COPY ./deploy/ /root/admin/
WORKDIR /root/admin/

# install
RUN npm install http-server -g --registry=https://registry.npm.taobao.org

# do sth
CMD ["./launch.sh"]

EXPOSE 8010