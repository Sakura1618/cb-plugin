export class cb_material extends plugin {
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
    const image1 = `plugins/cb-plugin/resources/material/1.png`
    const image2 = `plugins/cb-plugin/resources/material/2.png`
    const image3 = `plugins/cb-plugin/resources/material/3.png`
    let msg = ["武器材料：",segment.image(image1),"神格神经：",segment.image(image2),"信源解析：",segment.image(image3)]
    e.reply(msg)
  }
}