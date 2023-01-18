import { App } from 'vue'
import 'element-plus/theme-chalk/index.css'
import {
  ElButton,
  ElAside,
  ElTabPane,
  ElTabs,
  ElIcon,
  ElForm,
  ElFormItem,
  ElInput,
  ElCheckbox,
  ElLink,
  ElRadio
} from 'element-plus/lib/index'

const components = [
  ElButton,
  ElAside,
  ElTabPane,
  ElTabs,
  ElIcon,
  ElForm,
  ElFormItem,
  ElInput,
  ElCheckbox,
  ElLink,
  ElRadio
]

export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
