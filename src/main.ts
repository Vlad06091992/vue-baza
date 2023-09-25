import router from "./router";
import { createPinia } from "pinia";

const pinia = createPinia()

/* Set up using Vue 3 */
import { createApp } from "vue";
import App from "./App.vue";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faDeleteLeft, faUserSecret } from "@fortawesome/free-solid-svg-icons";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import { faCircleCheck, faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import MdiSvg from "@yeliulee/vue-mdi-svg/v3";
library.add(faUserSecret);
library.add(faDeleteLeft);
library.add(faCircleCheck);
library.add(faCircleExclamation);
createApp(App).use(pinia).use(router).component("font-awesome-icon", FontAwesomeIcon)
  .use(MdiSvg)
  .use(ElementPlus)
  .mount("#app");
