import vue from "@vitejs/plugin-vue";
import { UserConfig } from "vite";

export default <UserConfig>{
  plugins: [vue()],
  optimizeDeps: {
    include: [
      "element-plus/es/locale/lang/zh-cn",
      "dayjs/locale/zh-cn",
    ],
  },
};
