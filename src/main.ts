import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import VueScrollTo from 'vue-scrollto'
import i18n from '@/i18n'

const app = createApp(App)

app.use(createPinia())
app.use(i18n)
app.use(router)
app.use(VueScrollTo)

app.mount('#app')
