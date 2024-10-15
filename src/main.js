import { createApp } from 'vue';
import App from './App.vue';
import './style.css';
import store from './store';
import router from './router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(far);
library.add(fas);

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(store);
app.use(router);
app.mount('#app');