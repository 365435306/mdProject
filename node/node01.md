### markdown 

# 标题1
## 标题2
``` js
    console.log( 'hello' )
```

> 内容引用

+ 列表一
  + xxx
  - xxxx
+ 列表二
  1. 111
  2. 222

[官网链接](http://www.xxx.com) 

# node

## what
 

## api 接口
[api接口文档]()


### js运行环境
  + 浏览器
    - 基本语法
    - bom
    - dom
    - ajax
    - 系统文件数据库(不能，处于安全性考虑不能)
  + 服务器
    - 基本语法
    - 能操作数据库
    - 能操作本地文件

限制语言能力的不是语言本身，而是语言的运行环境（平台）

### nvm
详见文档

### node运行环境 REPL
直接在命令行写代码

模块化
  + 内置一个模块（一个js文件一个模块）
  + 导出一个模块（module.exports = name)
  + 引用一个模块并且调用

#### 打印当前目录的目录树
```js
// 同步读取
try{
    const fs = readdir('fs')
    let dirs = fs.readdirSync(path)
}catch(err){
    console.log(err)
}

// 异步读取 错误优先err默认为null
fs.readdir(path,(err, data) => {
 if(err){
    console.log(err)
 }else{
    console.log(data)
 }
})

```
### 内置模块 url

### 邮件发送
第三方模块 mail
