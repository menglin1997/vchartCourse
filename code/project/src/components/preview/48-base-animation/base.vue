<template>
  <div id="chart"></div>
</template>
<script lang="ts" setup>
import { onMounted } from "vue";
import { default as VChart } from "@visactor/vchart";

const minDataLength = 1;
const maxDataLength = 4;

const randomDataValues = () => {
  const dataLength =
    Math.round(Math.random() * (maxDataLength - minDataLength)) + minDataLength;
  const values = [];
  for (let i = 0; i < dataLength; i++) {
    values.push({
      type: `${i}`,
      value: Math.random(),
    });
  }
  return values;
};

const spec = {
  type: "pie",
  data: [
    {
      id: "id0",
      values: [
        { type: "1", value: Math.random() },
        { type: "2", value: Math.random() },
        { type: "3", value: Math.random() },
      ],
    },
  ],
  outerRadius: 0.8,
  valueField: "value",
  categoryField: "type",
  tooltip: false,
  // 1.入场动画配置
  // 2.新增图元动画
  // 3.退出动画
  // 4.更新动画
};
let vchart;
function show() {
  vchart = new VChart(spec, {
    dom: "chart",
    animation: true, // 加在 spec 根对象，一键全关
  });
  vchart.renderSync();
  setInterval(() => {
    vchart.updateData("id0", randomDataValues());
  }, 2000);
}
onMounted(() => {
  show();
});
</script>
<style scoped>
#chart {
  width: 600px;
  height: 400px;
}
</style>
