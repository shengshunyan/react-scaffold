const express = require('express')

const app = express()

// 静态文件
app.use('/file', express.static(`${__dirname}/file`))

// JSON数据
app.use('/', (req, res) => {
    const options = {
        root: `${__dirname}/data/`
    }
    const url = req.baseUrl + (req.path || '')
    const urlPrefix = '/api/'
    const fileName = `${url.split(urlPrefix)[1]}.json`
    res.sendFile(fileName, options)
})

app.listen(8000, () => {
    console.log('Mock Server is running in http://localhost:8000')
})
