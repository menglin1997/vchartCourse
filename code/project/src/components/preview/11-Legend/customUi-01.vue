<template>
  <h1>自定义UI</h1>
  <h3 @click="hideRoleA">隐藏Role A</h3>
  <h3 @click="showRoleA">显示Role A</h3>
  <div id="chart"></div>
</template>
<script lang="ts" setup>
import { default as VChart } from "@visactor/vchart";
import { onMounted, ref } from "vue";

const spec = {
  type: "bar",
  data: [
    {
      id: "line",
      values: [
        { x: "Round 1", y: 21, c: "Role A" },
        { x: "Round 1", y: 38, c: "Role B" },
        { x: "Round 2", y: 28, c: "Role A" },
        { x: "Round 2", y: 45, c: "Role B" },
        { x: "Round 3", y: 22, c: "Role A" },
        { x: "Round 3", y: 56, c: "Role B" },
        { x: "Round 4", y: 34, c: "Role A" },
        { x: "Round 4", y: 48, c: "Role B" },
        { x: "Round 5", y: 34, c: "Role A" },
        { x: "Round 5", y: 64, c: "Role B" },
        { x: "Round 6", y: 44, c: "Role A" },
        { x: "Round 6", y: 72, c: "Role B" },
        { x: "Round 7", y: 38, c: "Role A" },
        { x: "Round 7", y: 65, c: "Role B" },
        { x: "Round 8", y: 24, c: "Role A" },
        { x: "Round 8", y: 70, c: "Role B" },
        { x: "Round 9", y: 28, c: "Role A" },
        { x: "Round 9", y: 62, c: "Role B" },
      ],
    },
  ],
  xField: "x",
  yField: "y",
  seriesField: "c",
  axes: [{ orient: "left" }, { orient: "bottom" }],
  legends: {
    visible: false,
  },
};
let vchart;

let legendSelected = [];

onMounted(() => {
  vchart = new VChart(spec, {
    dom: "chart",
  });
  vchart.renderSync();
  legendSelected = vchart.getLegendSelectedDataByIndex();
  console.log(legendSelected,'legendSelected')
});
const hideRoleA = () => {
  if (!vchart) return;
  vchart.setLegendSelectedDataByIndex(0, legendSelected.filter((val) => val !== "Role A"));
};

const showRoleA = () => {
  if (!vchart) return;
  vchart.setLegendSelectedDataByIndex(0, legendSelected);
};
</script>
<style>
#chart {
  width: 600px;
  height: 400px;
}
</style>
