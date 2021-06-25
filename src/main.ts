import { createApp } from 'vue'
import App from './App.vue'
import { router } from '@/router'
import { store } from '@/store'

import 'modern-normalize/modern-normalize.css' // normalize browsers' default style
import 'vfonts/FiraCode.css' // 等宽字体
import '@/styles/index.scss' // global css

createApp(App).use(router).use(store).mount('#app')
