<template>
  <div id="chart"></div>
</template>
<script lang="ts" setup>
import { default as VChart } from "@visactor/vchart";
import { onMounted } from "vue";

const spec = {
  type: "line",
  title: {
    text: "月度销售额趋势",
    subtext: "2024年第一季度",
    textStyle: {
      fontSize: 18,
      fontWeight: "bold",
      fill: "#333",
    },
    subtextStyle: {
      fontSize: 14,
      fill: "#666",
    },
    align: "center",
  },
  data: [
    {
      id: "area",
      values: [
        { type: "A", month: "01", value: 129 },
        { type: "B", month: "01", value: 110 },
        { type: "A", month: "02", value: 130 },
        { type: "B", month: "02", value: 123 },
        { type: "A", month: "03", value: 126 },
        { type: "B", month: "03", value: 133 },
        { type: "A", month: "04", value: 117 },
        { type: "B", month: "04", value: 133 },
        { type: "A", month: "05", value: 114 },
        { type: "B", month: "05", value: 133 },
        { type: "A", month: "06", value: 111 },
        { type: "B", month: "06", value: 133 },
      ],
    },
  ],
  xField: "month",
  yField: "value",
  seriesField: "type",
  tooltip: {
    style: {
      panel: {
        /** 背景色 */
        backgroundColor: 'rgba(24,144,255, 0.1)',
        /** tooltip边框 */
        border: {
          color: '#6690F2',
          width: 2,
          /** 圆角 */
          radius: 4
        },
        /** tooltip阴影 */
        shadow: {
          blur: 10,
          spread: 2,
          color: '#6690F2'
        }
      }
    }
  }

};
onMounted(() => {
  const vchart = new VChart(spec, {
    dom: "chart",
  });
  vchart.renderSync();
});
</script>
<style>
  #chart {
    width: 600px;
    height: 400px;
  }
</style>