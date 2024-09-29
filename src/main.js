// Import de Vue
import { createApp } from 'vue';
import App from './App.vue';
import './style.css';

// Import de FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { far } from '@fortawesome/free-regular-svg-icons'; // Pour importer tous les icônes solides
import { fas } from '@fortawesome/free-solid-svg-icons';
// Ajout des icônes à la librairie
library.add(far);
library.add(fas);

const app = createApp(App);

// Déclaration du composant global FontAwesomeIcon
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');
