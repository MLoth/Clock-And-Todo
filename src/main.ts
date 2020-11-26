import { createApp } from 'vue'

import i18n from '@/plugins/i18n';

import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'


// Tailwind css framework import
import './assets/tailwind.css';

createApp(App).use(i18n).use(store).use(router).mount('#app')
