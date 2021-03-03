/**
 * @desc add git log to dist folder
 * @author shengshunyan
 * @date 2021-03-03
 */

const childProcess = require('child_process')
const path = require('path')
const fs = require('fs')

childProcess.exec('git log --stat -10', function (error, stdout) {
    if (!error) {
        const DIST_PATH = path.resolve(__dirname, '../dist')
        fs.appendFileSync(`${DIST_PATH}/web-commit.log`, '', 'utf-8')
        fs.writeFileSync(`${DIST_PATH}/web-commit.log`, stdout, 'utf-8')
    } else {
        console.log('err=', error)
    }
})