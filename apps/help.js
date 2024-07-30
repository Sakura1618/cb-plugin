export class cb_help extends plugin {
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
  }

  async cb_help (e) {
    const image = `plugins/cb-plugin/resources/help/help.png`
    await e.reply([
      segment.image(image)
    ])
    return true
  }
}
