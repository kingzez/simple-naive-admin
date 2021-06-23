import { createApp } from 'vue'
import App from './App.vue'
import { router } from '@/router'
import { store } from '@/store'

// 等宽字体
import 'vfonts/FiraCode.css'
import '@/styles/index.scss' // global css

createApp(App).use(router).use(store).mount('#app')
