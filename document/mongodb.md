# 安装与配置

<a name="rLDZF"></a>
### 1.下载安装包

```bash
wget http://fastdl.mongodb.org/linux/mongodb-linux-i686-1.8.2.tgz
```

> 下载完成后解压缩压缩包


```bash
tar zxf mongodb-linux-i686-1.8.2.tgz
```

<a name="VigMG"></a>
### 2. 安装准备
> 将mongodb移动到/usr/local/server/mongdb文件夹


```bash
mv mongodb-linux-i686-1.8.2 /usr/local/mongodb
```

> 创建数据库文件夹与日志文件
> 

```bash
mkdir /usr/local/mongodb/data
touch /usr/local/mongodb/logs
```

<a name="joad8"></a>
### 3. 设置开机自启动
> 将mongodb启动项目追加入rc.local保证mongodb在服务器开机时启动

```bash
echo "/usr/local/mongodb/bin/mongod --dbpath=/usr/local/mongodb/data –logpath=/usr/local/mongodb/logs –logappend  --auth -–port=27017" >> /etc/rc.local
```

<a name="eunbA"></a>
### 4. 启动mongodb
> cd到mongodb目录下的bin文件夹启动mongodb


> 下面这个是需要权限的登录方式, 用户连接需要用户名和密码


```bash
/usr/local/mongodb/bin/mongod --dbpath=/usr/local/mongodb/data --logpath=/usr/local/mongodb/logs --logappend  --auth  --port=27017 --fork
```

> 这个是不需要密码的(不建议)


```bash
/usr/local/mongodb/bin/mongod --dbpath=/usr/local/mongodb/data --logpath=/usr/local/mongodb/logs --logappend  --port=27017 --fork
```

<a name="2iHZv"></a>
### 5 设置密码
> 输入

```bash
mongo
```

![image.png](https://cdn.nlark.com/yuque/0/2019/png/271124/1558111412784-e0fa0e6f-9090-427f-a0b9-09fe8a3567a9.png#align=left&display=inline&height=59&name=image.png&originHeight=118&originWidth=638&size=22004&status=done&width=319)

> 进入输入模式

切换到 'admin' 数据库 `use admin`<br />![image.png](https://cdn.nlark.com/yuque/0/2019/png/271124/1558111457459-c20fe31a-7ef2-415f-88d0-d8ce269f34b3.png#align=left&display=inline&height=69&name=image.png&originHeight=138&originWidth=588&size=21077&status=done&width=294)

> 给admin设置用户密码:

user: 用户名, pwd: 用户密码,roles: 用来设置用户的权限，比如读，读写 等等

```bash
db.createUser({user: 'root', pwd: '123456', roles: ['root']})
```

验证是否添加成功，`'db.auth(用户名，用户密码)'` 这里用`db.auth('root', '123456')` 如果返回 '1'表示验证成功， 如果是 '0' 表示验证失败...

![image.png](https://cdn.nlark.com/yuque/0/2019/png/271124/1558111505597-09839129-131b-48cb-958a-31991ccc308f.png#align=left&display=inline&height=35&name=image.png&originHeight=70&originWidth=518&size=8397&status=done&width=259)

切换到你要使用的库

> use asGiant


接下来为这个库添加一个用户，并且赋予权限，

```bash
db.createUser({user:'myz',pwd:'adgjmp123',roles: [{role:'readWrite',db:'asGiant'}])})
```

这行代码意思是 创建一个myz用户 给予读写权限 db表示该用户操作的数据库名

mongodb，MongoDB默认是没有开启访问控制，我们通过`--auth`参数重启mongod服务。

> mongod --dbpath 存放数据库文件夹路径 --auth


```bash
mongod --dbpath usr/local/mongodb/bin --auth
```

一旦开启了，用户连接mongod必须指定用户名和密码。

![image.png](https://cdn.nlark.com/yuque/0/2019/png/271124/1558111733895-302e35df-4422-4a99-8e0d-a673888824ce.png#align=left&display=inline&height=378&name=image.png&originHeight=756&originWidth=1422&size=272376&status=done&width=711)

<a name="LoT6G"></a>
### 6 下载robo 3t

![image.png](https://cdn.nlark.com/yuque/0/2019/png/271124/1558111776384-626142fe-a6ae-4c93-8bfc-f09fd60ff3d0.png#align=left&display=inline&height=79&name=image.png&originHeight=158&originWidth=1488&size=22566&status=done&width=744)


![image.png](https://cdn.nlark.com/yuque/0/2019/png/271124/1558111823432-c99dc6e6-270f-49f3-8ef1-b501e39fc33b.png#align=left&display=inline&height=66&name=image.png&originHeight=132&originWidth=1026&size=23704&status=done&width=513)

创建一个连接

![image.png](https://cdn.nlark.com/yuque/0/2019/png/271124/1558111889974-b7860918-3830-4fed-b853-323e6df926fa.png#align=left&display=inline&height=447&name=image.png&originHeight=894&originWidth=1100&size=102242&status=done&width=550)

![image.png](https://cdn.nlark.com/yuque/0/2019/png/271124/1558111935730-d21176ff-a5c1-41c0-8a87-ef3f3cf7b4c4.png#align=left&display=inline&height=451&name=image.png&originHeight=902&originWidth=1090&size=117520&status=done&width=545)

> 点击test

![image.png](https://cdn.nlark.com/yuque/0/2019/png/271124/1558111963540-8040ab62-243e-436c-a37d-48ac84a667c9.png#align=left&display=inline&height=196&name=image.png&originHeight=392&originWidth=736&size=36463&status=done&width=368)

> 安装完成


![image.png](https://cdn.nlark.com/yuque/0/2019/png/271124/1558111987942-c4daba07-9070-4a96-8e1f-31c154415841.png#align=left&display=inline&height=103&name=image.png&originHeight=206&originWidth=538&size=20486&status=done&width=269)

<a name="articleHeader3"></a>
## 连接加密数据库
`xxx.db('mongodb://your name: your pwd@ ip :27017/Article');`<br />`your name`：为用户名<br />`your pwd`:为密码
