import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vuetify/styles'
import ymapPlugin from 'vue-yandex-maps'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'



const vuetify = createVuetify({
    components,
    directives,
    
})

const settings = {
    apiKey: '5bdca90c-833b-441b-8ffc-a1316bb6b874',
    lang: 'ru_RU',
    coordorder: 'latlong',
    enterprise: false,
    version: '2.1'
}

createApp(App).use(store).use(vuetify,{iconfont:'mdi'}).use(router).use(ymapPlugin,settings).mount('#app')

