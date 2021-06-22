import type { App } from 'vue'
import { createPinia } from 'pinia'

/**
 * pinia has vuex v5 same api, programming for the future. \(^o^)/
 * https://github.com/kiaking/rfcs/blob/vuex-5/active-rfcs/0000-vuex-5.md
 */

const store = createPinia()
export { store }