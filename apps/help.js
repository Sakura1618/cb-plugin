import { segment } from 'oicq'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export class help extends plugin {
  constructor () {
    super({
      name: 'cb_help',
      dsc: '尘白帮助',
      event: 'message',
      priority: 250,
      rule: [
        {
          reg: '^#?(尘白帮助|cb帮助)$',
          fnc: 'cb_help'
        }
      ]
    })
  };

  async cb_help (e) {
    const imagePath = `${__dirname}/../resources/img/help.png`

    await e.reply([
      segment.image(imagePath)
    ])
    return true
  }
}
