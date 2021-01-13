<template>
  <span class="demonstration">周</span>
  <el-date-picker
    v-model="value"
    type="week"
    format="gggg 第 ww 周"
    placeholder="选择周"
  >
  </el-date-picker>
</template>
<script lang="ts">
import Vue, { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    return {
      value: ref(""),
    };
  },
});
</script>
