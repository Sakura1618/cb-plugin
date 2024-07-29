import { segment } from 'oicq';
import plugin from '../../../lib/plugins/plugin.js';

export class rank extends plugin {
  constructor () {
    super({
      name: 'cb_rank',
      dsc: '尘白强度榜',
      event: 'message',
      priority: 250,
      rule: [
        {
          reg: '^#?(尘白强度榜|cb强度榜)$',
          fnc: 'cb_rank'
        }
      ]
    })
  }

  async cb_rank (e) {
    const image1 = 'plugins/cb-plugin/resources/rank/1.png'
    const image2 = 'plugins/cb-plugin/resources/rank/2.png'

    let msg = ["114\n",segment.image(image1),"514",segment.image(image2)]
    await e.reply(msg)
  }
}