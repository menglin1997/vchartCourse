<template>
  <div id="richtext-chart"></div>
</template>
<script lang="ts" setup>
import { default as VChart } from "@visactor/vchart";
import { createRichText } from "@visactor/vrender-core";
import { onMounted } from "vue";

onMounted(() => {
  const info = {
    oxygen: { percent: "73.00", Comparison: "32.17" },
    silicon: { percent: "73.00", Comparison: "70.17" },
    aluminum: { percent: "73.00", Comparison: "75.17" },
  };

  const spec = {
    type: "pie",
    data: [
      {
        id: "id0",
        values: [
          { type: "oxygen", value: "46.60" },
          { type: "silicon", value: "27.72" },
          { type: "aluminum", value: "8.13" },
        ],
      },
    ],
    outerRadius: 0.8,
    valueField: "value",
    categoryField: "type",
    label: {
      visible: true,
    },
    tooltip: {
      enterable: true,
      renderMode: "canvas",
      mark: {
        title: {
          value: {
            type: "rich",
            text: [
              {
                text: "TOOLTIP ",
                fontWeight: "bold",
                fill: "#3f51b5",
              },
              {
                text: "Title",
                fontStyle: "italic",
                textDecoration: "underline",
                fill: "#3f51b5",
              },
            ],
          },
        },
      },
    },
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
