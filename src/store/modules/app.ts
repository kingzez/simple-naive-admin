import { defineStore } from 'pinia'

interface AppState {
  darkMode?: 'light' | 'dark'
}

export const useAppStore = defineStore({
  id: 'app',
  state: (): AppState => ({
    darkMode: undefined
  }),
  getters: {
    getDarkMode(): 'light' | 'dark' | string {
      return this.darkMode || localStorage.getItem('APP_DARK_MODE_KEY') || 'light'
    }
  },
  actions: {
    setDarkMode(mode: 'light' | 'dark') {
      this.darkMode = mode
      localStorage.setItem('APP_DARK_MODE_KEY', mode)
    }
  }
})
