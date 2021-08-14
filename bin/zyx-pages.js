#!/usr/bin/env node

// cli 入口文件，需要修改文件权限为755

process.argv.push('--cwd')
process.argv.push(process.cwd())
process.argv.push('--gulpfile')
// resolve 找到模块所在的路径（相对路径）， ".." 是zyx-pages 所在路径，自动去package.json 找main字段对应文件
process.argv.push(require.resolve('..'))

require('gulp/bin/gulp')
