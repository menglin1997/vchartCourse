<template>
  <div id="richtext-chart"></div>
</template>
<script lang="ts" setup>
import { default as VChart } from "@visactor/vchart";
import { createRichText } from "@visactor/vrender-core";
import { onMounted } from "vue";

onMounted(() => {
  // 获取默认主题
  const defaultTheme = VChart.ThemeManager.getDefaultTheme();

  // 扩展默认主题，创建新主题
  const extendedTheme = {
    ...defaultTheme,
    colorScheme: {
      default: [
        "#FF6B6B",
        "#4ECDC4",
        "#45B7D1",
        "#FFA07A",
        "#98D8C8",
        "#F7DC6F",
        "#BB8FCE",
        "#85C1E2",
      ],
    },
    series: {
      ...defaultTheme.series,
      bar: {
        ...defaultTheme.series?.bar,
        barMaxWidth: 30,
        label: {
          visible: true,
          position: "top",
          style: {
            fill: "#333",
            fontSize: 14,
          },
        },
      },
    },
  };

  // 注册扩展后的主题
  VChart.ThemeManager.registerTheme("extendedLight", extendedTheme);

  // 应用扩展主题
  VChart.ThemeManager.setCurrentTheme("extendedLight");

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
  };

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
