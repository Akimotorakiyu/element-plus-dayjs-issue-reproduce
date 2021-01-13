import { createApp } from "vue";
import App from "./App.vue";
import locale from "element-plus/es/locale/lang/zh-cn";
import "element-plus/lib/theme-chalk/index.css";
import "dayjs/locale/zh-cn";
import Element from "element-plus";
const app = createApp(App);
app.use(Element, { locale });
app.mount("#app");
