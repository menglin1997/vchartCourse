<template>
  <h3>自定义tooltip</h3>
  <div id="chart"></div>
  <div id="tooltip">自定义tooltip</div>
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
    // 配置 dimension 维度项的内容
    dimension: {
      content: {
        key: (datum) => datum.type,
        value: (datum) => datum.value,
      },
    },
  },
};
onMounted(() => {
  const vchart = new VChart(spec, {
    dom: "chart",
  });

  vchart.setTooltipHandler({
    // activeType: 透出本次触发的 tooltip 类型，值为'mark'或'dimension'
    // data: 透出本次触发的 tooltip 原始数据
    // params: 透出本次触发的 tooltip 的鼠标事件
    showTooltip: (activeType, data, params) => {
      console.log(activeType, data, params, "activeType, data, params");
      if (params.changePositionOnly) {
        return;
      }
      if (activeType === "dimension" && data?.length) {
        console.log(data[0].value);
      } else if (activeType === "mark") {
        const { datum, series } = data[0];
        const color = series.getSeriesStyle(datum[0])("fill");
        console.log(color);
      }
      const tooltip = document.getElementById("tooltip");
      console.log(tooltip, "tooltip");

      tooltip.style.left = params.event.x + "px";
      tooltip.style.top = params.event.y + "px";
      tooltip.style.display = "block";
    },
    hideTooltip: () => {
      const tooltip = document.getElementById("tooltip");
      if (!tooltip) {
        return;
      }
      tooltip.style.display = "none";
    },
    release: () => {},
  });

  vchart.renderSync();
});
</script>
<style>
#chart {
  width: 600px;
  height: 400px;
}
#tooltip {
  position: absolute;
  display: none;
}
</style>
