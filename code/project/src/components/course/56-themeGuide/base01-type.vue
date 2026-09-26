<template>
  <div id="richtext-chart"></div>
</template>
<script lang="ts" setup>
import { default as VChart } from "@visactor/vchart";
import { createRichText } from "@visactor/vrender-core";
import { onMounted } from "vue";

onMounted(() => {
  const spec = {
    type: "bar",
    data: [
      {
        id: "barData",
        values: [
          { type: "A", value: 120 },
          { type: "B", value: 200 },
          { type: "C", value: 150 },
          { type: "D", value: 80 },
        ],
      },
    ],
    xField: "type",
    yField: "value",
    theme: "dark",
  };

  // 全局应用默认主题
  // VChart.ThemeManager.setCurrentTheme("dark");

  // 创建 VChart 实例并渲染
  const vchart = new VChart(spec, { dom: "richtext-chart" });
  vchart.renderSync();
});
</script>
<style scoped>
#richtext-chart {
  width: 600px;
  height: 400px;
}
</style>
