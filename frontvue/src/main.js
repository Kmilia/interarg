import { createApp } from 'vue'
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import vuetify from "./plugins/vuetify";

const app = createApp(App)

app.use(vuetify);
app.use(store);
app.use(router)

app.mount('#app')
