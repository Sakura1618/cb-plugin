export class cbRank extends plugin {
  constructor () {
    super({
      name: 'cbRank',
      dsc: '尘白强度榜',
      event: 'message',
      priority: 250,
      rule: [
        {
          reg: '^#?(尘白|cb)强度榜$',
          fnc: 'cbRank'
        }
      ]
    })
  }

  async cbRank (e) {
    const image1 = 'plugins/cb-plugin/resources/rank/1.png'
    let msg = ['2.4强度榜：', segment.image(image1)]
    e.reply(msg)
  }
}
