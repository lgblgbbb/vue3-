import { App } from 'vue'
import 'element-plus/theme-chalk/index.css'
import { ElButton,ElAside } from 'element-plus/lib/index'

const components = [ElButton, ElAside]

export default function (app: App):void{
    for (const component of components) {
      app.component(component.name,component)
  }
}
