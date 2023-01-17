import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { registerApp } from './global'
import './service'
// import gbRequest from './service'

const app = createApp(App)

// 注册element-plus
registerApp(app)
app.use(router)
app.use(store)
app.mount('#app')

// gbRequest.request({
//   url:''
// })
