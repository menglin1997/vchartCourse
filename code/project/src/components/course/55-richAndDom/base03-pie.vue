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
    height: 400,
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
    legends: {
      orient: "top",
      autoPage: false, // disable auto page
      item: {
        width: 400,
        shape: {
          style: {
            size: 14,
            symbolType:
              "M 4.08 0.62 H 2.55 c -0.23 1.14 -1.23 2 -2.43 2 S -2.09 1.76 -2.32 0.62 H -3.86 c -0.27 0 -0.5 -0.22 -0.5 -0.5 c 0 -0.28 0.22 -0.5 0.5 -0.5 H -2.32 c 0.23 -1.14 1.23 -2 2.43 -2 s 2.2 0.86 2.43 2 H 4.08 c 0.27 0 0.5 0.22 0.5 0.5 c 0 0.28 -0.22 0.5 -0.5 0.5 z M 0.11 -1.38 c -0.82 0 -1.49 0.67 -1.49 1.5 s 0.67 1.5 1.49 1.5 S 1.6 0.95 1.6 0.12 s -0.67 -1.5 -1.49 -1.5 z",
          },
        },
        value: {
          alignRight: true, // value is displayed on the left
          formatMethod: (value, data, index) => {
            const larger =
              Number(info[data.label].percent) >
              Number(info[data.label].Comparison);
            const fill = larger ? "red" : "green";
            return {
              type: "rich",
              text: [
                { text: value },
                { text: `  Pecent   ` },
                { text: `${info[data.label].percent}%`, fill },
                { text: `  Comparison   ` },
                { text: `${info[data.label].Comparison}%`, fill },
              ],
            };
          },
          style: {
            fill: "#333",
          },
          state: {
            unselected: {
              fill: "#d8d8d8",
            },
          },
        },
      },
      // If you need the legend item to display value, you need to use the data attribute to customize the content of the legend item
      data: (items) => {
        return items.map((item, index) => {
          item.value = index === 0 ? "20,000" : "7,000";
          return item;
        });
      },
    },
    label: {
      visible: true,
    },
    tooltip: {
      mark: {
        content: [
          {
            key: (datum) => datum["type"],
            value: (datum) => datum["value"] + "%",
          },
        ],
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
