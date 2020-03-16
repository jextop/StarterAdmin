# 后台管理系统
AntDesign Pro
https://ant.design/components/icon/

# 依赖环境
Node, npm

# 开发环境
VS Code

# 启动依赖服务
## 安装Docker
- https://docs.docker.com/install/linux/docker-ce/ubuntu/
- https://docs.docker.com/docker-for-windows/install/

## 拉取镜像
./pull.sh

## 启动服务
./up.sh

## 查看日志
./logs.sh

## 停止服务
./down.sh

| 开发运行环境     | URL:Port                                |  备注              |
| ------------     | --------------------------------------  | :----------------- |
| MySQL数据库      | http://localhost:3306, root/root        | |
| MySQL Admin      | http://localhost:3006                   | |
| Redis缓存        | http://localhost:6379                   | |
| ActiveMQ消息队列 | http://localhost:8161, admin/admin      | |

| 管理工具         | URL:Port                                |  备注              |
| ------------     | --------------------------------------  | :----------------- |
| API服务检查      | http://localhost:8011/chk               | |
| Swagger接口文档  | http://localhost:8011/swagger-ui.html   | |
| 后台管理系统      | http://localhost:8010                   | |

![](https://github.com/jextop/StarterAdmin/blob/master/Admin.png)

# apt -y install npm
npm install
npm start
npm run build

# cnpm: http://npm.taobao.org/
npm install -g cnpm --registry=https://registry.npm.taobao.org
