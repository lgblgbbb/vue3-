import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { registerApp } from './global'
import './service'
import 'normalize.css'
import './assets/css/index.less'
import { setupStore } from './store'
// import gbRequest from './service'

const app = createApp(App)

// 注册element-plus
registerApp(app)
// 刷新不丢失数据
setupStore()
app.use(router)
app.use(store)
app.mount('#app')

// gbRequest.request({
//   url:''
// })
