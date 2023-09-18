
import router from './router';
import store from './store';


/* Set up using Vue 3 */
import { createApp } from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faDeleteLeft, faUserSecret } from "@fortawesome/free-solid-svg-icons";

import { faCircleCheck,faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import {  } from '@fortawesome/free-solid-svg-icons'
import MdiSvg from "@yeliulee/vue-mdi-svg/v3"
/* add icons to the library */
// <font-awesome-icon icon="fa-solid fa-circle-check" style="color: #32c843;" />
//   <font-awesome-icon icon="fa-solid fa-circle-exclamation" style="color: #f50000;" />
library.add(faUserSecret)
library.add(faDeleteLeft)
library.add(faCircleCheck)
library.add(faCircleExclamation)
createApp(App).use(store).use(router).component('font-awesome-icon', FontAwesomeIcon)
  .use(MdiSvg)
  .mount('#app');
