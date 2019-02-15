# ptadmin

### 说明：

- 基于thinkphp架构的自动生成接口的框架

### 数据接口:

等待更新

### 目录结构:

- admin — 客户端后台管理系统
- sever - 服务端，基于thinkphp的后台开发
- ptadmin.sql - mysql的sql 语句

### 模块分析：
 1. 数据库
    - 数据库管理 (增删改查数据库，针对数据，可以添加字段)
      - 字段管理 (增删改查字段,针对字段,可以直接生成栏目)
         input	输入框
         select	选择框
         radio	单选框
         phone	手机号输入框
         checkbox	多选框
         textarea	文本框
         cascader	级联框
         date	日期框
         time	时间框
         datetime	日期时间框
         daterange	日期范围
         timerange	时间范围
         datetimerange	日期时间范围
         week	周
         month	月
         year	年
         dates	多个日期
         ueditor	富文本编辑器
         password	密码框
         switch	开关框
         tree	树框
 2. 栏目模块
    - 管理信息(升级的版本中，将会实现自动生成计划)  
 4. 用户
    - 用户管理 (增删改查用户列表，针对于用户列表的完善)
    - 角色管理 (针对于角色进行处理)
 5. 模板
    - 采集管理 (cms系统，这套系统,之后也会迭代)
    - 模板管理
6. 邮箱管理 (邮箱的配置)
7. 短信管理 (短信的配置,现在只做关于腾讯云的短信，其他的占时不考虑接入)
8. 文件管理 (针对于图片、文件的管理,提供配置路径保存)

### 代码使用：
-  @/src/page/index/top/top-menu.vue 此处修改了平台的头部
-  @/src/mock/menu.js 此处修改平台的侧边栏
-  @/src/router/views/index.js 此处添加路由，方便跳转
### 源码地址：




