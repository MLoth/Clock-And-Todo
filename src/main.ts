import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import i18n from '@/plugins/i18n';

// Tailwind css framework import
import './assets/tailwind.css';

createApp(App).use(i18n).use(store).use(router).mount('#app')
