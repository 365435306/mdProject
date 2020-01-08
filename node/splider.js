// 请求网站数据
// 将数据保存本地文件
const fs = require('fs')
const http = require('http')
let url = 'http://www.baidu.com'
// https引用https模块
// const http = require('https')
// let url = 'https://www.bilibili.com'

http.get(url,(res) => {
    let rawData = ''
    // 数据分段，只要接收数据就会触发data事件，chunk 每次接收的数据片段
    res.on('data', (chunk)=>{
        console.log('----')
        rawData += chunk.toString('utf8')
        console.log(chunk.toString('utf8'))
    })
    // 数据流传输完毕
    res.on('end', ()=>{
        // 数据保存本地
        fs.writeFileSync('./bilibili.html',rawData)
        console.log('传输完毕')
    })
}).on('error',(err) => {
    console.log(err)
})