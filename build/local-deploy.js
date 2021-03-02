/**
 * @desc copy the build package to server
 * @author shengshunyan
 * @date 2021-03-02
 */

const path = require('path')
const childProcess = require('child_process')

const option = {
    host: '129.204.110.90',
    username: 'root',
    remoteDir: '/opt/application/todo'
}

const cmd = `ssh ${option.username}@${option.host} 'rm -rf ${option.remoteDir}; mkdir ${option.remoteDir}';
    scp -r ${path.join(__dirname.replace(/build$/, 'dist'), '*')} ${option.username}@${option.host}:${option.remoteDir}`

console.log('开始上传前端包...')

childProcess.exec(cmd, (error, stdout) => {
    if (!error){
        console.log('上传完成', stdout)
    } else {
        console.log('err=', error)
    }
})
