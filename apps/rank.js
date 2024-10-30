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
    const image2 = 'plugins/cb-plugin/resources/rank/2.png'
    let msg = ['精神拟境强度榜：', segment.image(image1), '长线关卡强度榜：', segment.image(image2)]
    e.reply(msg)
  }
}
