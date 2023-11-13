// import 순서에 따라 덮어쓰기 되더라
import "bootstrap";
import "./assets/template/bacchusCss.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/template/templatemo.css";
import "./assets/template/fontawesome.min.css";
import "./assets/template/dongil.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router/index.js";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");