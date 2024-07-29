import fs from 'fs'
import path from 'path'
import { promisify } from 'util'

const readdir = promisify(fs.readdir)
const imagePath = path.join(process.cwd(), '/plugins/cb-plugin/resources/setu/')

export class cb_setu extends plugin {
  constructor () {
    super({
      name: 'cb_setu',
      dsc: '尘白涩图',
      event: 'message',
      priority: 250,
      rule: [
        {
          reg: '^cb来张涩图$',
          fnc: 'cb_setu'
        }
      ]
    })
  }

  async cb_setu (e) {
    try {
      const files = await readdir(imagePath)
      const imageFiles = files.filter(file => /\.(jpg|jpeg|png|gif)$/.test(file))

      if (imageFiles.length === 0) {
        e.reply('没有图片，快来投喂！')
        return
      }

      const randomImage = imageFiles[Math.floor(Math.random() * imageFiles.length)]
      e.reply(segment.image(path.join(imagePath, randomImage)))
    } catch (err) {
      console.error('读取文件夹失败', err)
      e.reply('读取图片失败')
    }
  }
}
