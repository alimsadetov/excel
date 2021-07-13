export class Excel {
  constructor(selector, options) {
    this.$el = document.querySelector(selector)
    this.components = options.components || []
  }
  //функция которая создаёт див и в нём контент который берётся с каждой компоненты
  //дом переменные обозначаются с знака доллара
  getRoot() {
    const $root = document.createElement('div')

    this.components.forEach(Component => {
      const component = new Component()
      $root.insertAdjacentHTML('beforeend', component.toHTML())
    })

    return $root
  }
  //функция которая в апп добавляет полученное в гетрут
  render() {
    this.$el.append(this.getRoot())
  }
}
