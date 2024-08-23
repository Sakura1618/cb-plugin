export class cbGold extends plugin {
  constructor () {
    super({
      name: 'cbGold',
      dsc: '尘白数据金',
      event: 'message',
      priority: 250,
      rule: [
        {
          reg: '^#?cb数据金$',
          fnc: 'cbGold'
        }
      ]
    })
  }

  async cbGold (e) {
    const image1 = 'plugins/cb-plugin/resources/gold/1.jpg'
    const image2 = 'plugins/cb-plugin/resources/gold/2.png'
    let msg = [segment.image(image1), segment.image(image2)]
    e.reply(msg)
  }
}
