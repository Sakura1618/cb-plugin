import fs from 'node:fs';

logger.info('----------(*ˉ︶ˉ*)----------')
logger.info('尘白禁区插件 cb-plugin 初始化')
logger.info('----------(*ˉ︶ˉ*)----------')

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