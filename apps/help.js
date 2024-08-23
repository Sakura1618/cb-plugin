export class cbHelp extends plugin {
  constructor () {
    super({
      name: 'cbHelp',
      dsc: '尘白帮助',
      event: 'message',
      priority: 250,
      rule: [
        {
          reg: '^#?(尘白帮助|cb帮助)$',
          fnc: 'cbHelp'
        }
      ]
    })
  }

  async cbHelp (e) {
    const image = 'plugins/cb-plugin/resources/help/help.png'
    await e.reply([
      segment.image(image)
    ])
    return true
  }
}
