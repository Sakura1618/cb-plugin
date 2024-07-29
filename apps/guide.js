import { segment } from 'oicq'
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'

// 获取当前文件的绝对路径和目录
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const imageDir = path.join(__dirname, '../resources/guide')

// 根据名称获取图片路径
function getImagesByName (name) {
  const image1 = path.join(imageDir, `${name}1.jpg`)
  const image2 = path.join(imageDir, `${name}2.jpg`)

  const images = []
  if (fs.existsSync(image1)) images.push(image1)
  if (fs.existsSync(image2)) images.push(image2)

  return images
}

// 尘白角色攻略插件类
export class cb_guide extends plugin {
  constructor () {
    super({
      name: 'cb_guide',
      dsc: '尘白角色攻略',
      event: 'message',
      priority: 250,
      rule: [
        {
          reg: '^#?(尘白|cb)(\\S+)攻略$',
          fnc: 'cb_guide'
        },
        {
          reg: '^#?(尘白|cb)角色列表$',
          fnc: 'guide_list'
        }
      ]
    })
  }

  // 处理尘白角色攻略指令
  // 处理用户发送的尘白攻略指令的异步函数
  // 参数e包含消息事件的相关信息
  async cb_guide (e) {
    // 使用正则表达式匹配消息内容，判断是否符合指令格式
    const match = e.msg.match(/^#?(尘白|cb)(\S+)攻略$/)
    if (!match) {
      // 如果匹配失败，回复用户指令格式错误
      await e.reply('指令格式错误，请使用(#)尘白/cb[角色名]攻略。')
      return
    }

    // 提取角色名
    const name = match[2]
    // 根据角色名获取相关攻略图片
    const images = getImagesByName(name)

    if (images.length > 0) {
      // 如果有攻略图片，回复图片
      await e.reply(images.map(img => segment.image(img)))
    } else {
      // 如果没有找到攻略图片，回复提示信息
      await e.reply('没有找到对应角色装甲攻略，请确认查询的是装甲名而不是角色名')
    }
  }

  // 处理角色列表指令
  async guide_list (e) {
    e.reply('里芙：无限之视/狂猎/星期三\n芬妮：辉耀/咎冠/黄金狮子\n瑟瑞斯： 瞬刻/小金鱼\n琴诺：悖谬/双面\n凯西娅：蓝闪\n恩雅：羽蜕/姐姐大人\n伊切尔：豹豹\n苔丝：魔术师\n晴：藏锋/旧日王辉\n猫汐尔：溯影/猫猫\n安卡希雅：辉夜/不可显示\n辰星：云篆/观测者\n肴：冬至/养生专家\n茉莉安：雨燕/绷带小姐\n芙缇雅：缄默/小太阳\n妮塔：四手')
  }
}
