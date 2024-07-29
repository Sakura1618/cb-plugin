//导入node:fs模块
import fs from 'node:fs';

//输出提示
logger.info('----------(*ˉ︶ˉ*)----------')
logger.info('欢迎使用cb-plugin')
logger.info('----------(*ˉ︶ˉ*)----------')

//加载插件
const files = fs.readdirSync('./plugins/cb-plugin/apps').filter(file => file.endsWith('.js'))

let ret = []

files.forEach((file) => {
  ret.push(import(`./apps/${file}`))
})


ret = await Promise.allSettled(ret)

let apps = {}
for (let i in files) {
  let name = files[i].replace('.js', '')

  if (ret[i].status != 'fulfilled') {
      logger.error(`载入插件错误：${logger.red(name)}`)
      logger.error(ret[i].reason)
      continue
  }
  apps[name] = ret[i].value[Object.keys(ret[i].value)[0]]
}


export { apps }
