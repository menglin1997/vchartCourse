<template>
  <h1>样式配置</h1>
  <div id="chart"></div>
</template>
<script lang="ts" setup>
import { default as VChart } from "@visactor/vchart";
import { onMounted } from "vue";
const data = [
  { value: 10, category: "One" },
  { value: 9, category: "Two" },
  { value: 6, category: "Three" },
  { value: 5, category: "Four" },
  { value: 4, category: "Five" },
  { value: 3, category: "Six" },
  { value: 1, category: "Seven" },
];
let totalValue = 0;
data.forEach((obj) => (totalValue += obj.value));
const map = {};
data.forEach((obj) => {
  map[obj.category] = `${((obj.value / totalValue) * 100).toFixed(2)}%`;
});

const spec = {
  type: "pie",
  data: [
    {
      id: "pie",
      values: data,
    },
  ],
  categoryField: "category",
  valueField: "value",
  legends: {
    visible: true,
    orient: "right",
    data: (items) => {
      return items.map((item) => {
        item.value = map[item.label];
        return item;
      });
    },
    item: {
      width: "25%",
      value: {
        alignRight: true,
        style: {
          fill: "#333",
          fillOpacity: 0.8,
          fontSize: 10,
        },
        state: {
          unselected: {
            fill: "#d8d8d8",
          },
        },
      },
    },
  },
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
