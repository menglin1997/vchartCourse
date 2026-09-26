<template>
  <div id="richtext-chart"></div>
</template>
<script lang="ts" setup>
import { default as VChart } from "@visactor/vchart";
import { createRichText } from "@visactor/vrender-core";
import { onMounted } from "vue";

onMounted(() => {
  // 定义自定义主题
  const customTheme = {
    name: "customTheme",
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
      bar: {
        barMaxWidth: 20,
        label: {
          visible: true,
          position: "top",
        },
      },
    },
    component: {
      axis: {
        label: {
          style: {
            fill: "#666",
            fontSize: 12,
          },
        },
      },
    },
  };
VChart.ThemeManager.registerTheme("myCustomTheme", customTheme);
// VChart.ThemeManager.setCurrentTheme("myCustomTheme");
 

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
    // theme: customTheme,
  };

  // 创建 VChart 实例并渲染
  const vchart = new VChart(spec, { dom: "richtext-chart" });

  vchart.renderSync();
  vchart.setCurrentTheme('myCustomTheme');

});
</script>
<style scoped>
#richtext-chart {
  width: 600px;
  height: 400px;
}
</style>
