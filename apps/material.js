import { segment } from 'oicq'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export class material extends plugin {
  constructor () {
    super({
      name: 'cb_material',
      dsc: '尘白养成材料',
      event: 'message',
      priority: 250,
      rule: [
        {
          reg: '^#?(尘白|cb)(材料|养成)',
          fnc: 'cb_material'
        }
      ]
    })
  }

  async cb_material (e) {
    const imagePath1 = `${__dirname}/../resources/material/1.png`
    const imagePath2 = `${__dirname}/../resources/material/2.png`

    await e.reply([
      '武器材料：\n',
      segment.image(imagePath1),
      '神格神经：\n',
      segment.image(imagePath2)
    ])
  }
}
