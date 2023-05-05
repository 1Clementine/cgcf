import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 设置反向代理，前端请求默认发送到 http://localhost:8443/api
import store from './store'
// Buefy
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
// ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/app.css'//导入全局样式配置文件
import './assets/plugins/font-awesome-4.7.0/css/font-awesome.min.css'
import format from 'date-fns/format'
import '@/permission'
import relativeTime from 'dayjs/plugin/relativeTime';

import websocket from 'vue-native-websocket';
Vue.use(websocket, 'ws://localhost:9090', {// 需要连接的服务器地址，端打包后可以填地址（localhost:...）,调试阶段需填写对应开发本地地址(同个局域网，能ping通的地址)或部署的在线服务地址
  reconnection: true, // (Boolean)是否自动重连，默认false
  reconnectionAttempts: 5, // 重连次数
  reconnectionDelay: 3000, // 再次重连等待时常(1000)
});

// 国际化
import 'dayjs/locale/zh-cn'
const dayjs = require('dayjs');

// 相对时间插件
dayjs.extend(relativeTime)

dayjs.locale('zh-cn') // use locale globally
dayjs().locale('zh-cn').format() // use locale in a specific instance

Vue.prototype.dayjs = dayjs;//可以全局使用dayjs

Vue.filter('date', (date) => {
  return format(new Date(date), 'yyyy-MM-dd')
})

Vue.use(Buefy)
 Vue.use(ElementUI);//引入elementui

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
