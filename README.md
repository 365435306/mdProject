# mac电脑开发环境

### 安装node
  + 在官方下载网站下载 pkg 安装包，直接点击安装即可
  + 使用 brew 命令来安装：
  ```js
    brew install node
  ```

### 安装vue
  
  + 1: Mac安装Vue-cli时 提示bash: vue: command not found问题
    ![image](https://img2018.cnblogs.com/blog/1520459/201810/1520459-20181025115415802-491707072.png)

  + 2: 复制的路径地址为添加环境变量的地址

  + 3:添加环境变量   export PATH="$PATH:(复制的地址)"
      ![image](https://img2018.cnblogs.com/blog/1520459/201810/1520459-20181025115426168-1432150194.png)

  + 4:输入 vue  查看即可

  ### 安装mongodb

  1. 在mongDB官网下载mongoDB

    wget https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-3.6.5.tgz 

  2. 解归档，解压缩

    gunzip mongodb-linux-x86_64-3.6.5.tgz
    tar -xvf mongodb-linux-x86_64-3.6.5.tar

  3. 将mongodb文件移动到/usr/local/文件夹下
    mv mongodb-linux-x86_64-3.6.5  /usr/local/mongodb

  4. 进入用户主目录，在根目录下创建data文件夹

    cd /
    mkdir data
    cd data
    mkdir db

  5. 给db文件授权
    
     sudo chown -R $USER /data/db 
  
  6. 配置全局环境变量，在任意地方可以使用mongod命令
    
    [root@itroot mongodb]# vim /etc/profile
    在最后添加以下配置
    export MONGODB_HOME=/usr/local/mongodb
    export PATH=$PATH:$MONGODB_HOME/bin

    使配置生效 [root@itroot mongodb]# source /etc/profile

  7. 配置mongodb的数据库
    
    创建这3个文件
    [root@itroot mongodb]# mkdir -p /usr/local/mongodb/db
    [root@itroot mongodb]# mkdir -p /usr/local/mongodb/logs
    [root@itroot mongodb]# touch /usr/local/mongodb/logs/mongodb.log

  8. 添加mongodb的配置文件

    [root@itroot mongodb]# vim mongodb.conf,添加以下配置

    ···
# idae - MongoDB config start

# 设置数据文件的存放目录（根据实际的db文件夹的路径填写）

 dbpath = /usr/local/mongodb/db

# 设置日志文件的存放目录及其日志文件名（根据实际的logs文件夹的路径填写）

 logpath = /usr/local/mongodb/logs/mongodb.log

# 设置端口号（默认的端口号是 27017）

 port = 27017

# 设置为以守护进程的方式运行，即在后台运行
 fork = true

# 是否开启权限，访问需要用户名和密码

 auth = true

# 任意ip都能访问

bin_ip = 0.0.0.0

logappend = true

# idae - MongoDB config end
    ···

  9. 启动mongodb

    [root@itroot mongodb]# mongod --config /usr/local/mongodb/mongodb.conf

  10. 添加用户名密码

    连接mongodb，打开bin目录下的mongo课执行文件
    [root@itroot mongodb]# bin/mongo

    连接admin库：
    >use admin
    添加用户密码：
    >db.createUser({user:“admin”,pwd:“123456”,roles:[“userAdminAnyDatabase”]})
    登录验证：
    >db.auth(‘admin’,‘123456’)

  11. 重启mongodb，使用Robo3T远程连接

    先使用ip+端口访问，看看能不能访问到，注意关闭防火墙

  12. 如果是云服务器，需要在服务器管理的安全组中，开放端口

     