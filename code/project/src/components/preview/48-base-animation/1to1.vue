<template>
  <div id="chart"></div>
</template>
<script lang="ts" setup>
import { onMounted } from "vue";
import { default as VChart } from "@visactor/vchart";

const pieSpec = {
  type: "pie",
  data: [
    {
      values: [
        { type: "1", value: Math.random() },
        { type: "2", value: Math.random() },
        { type: "3", value: Math.random() },
      ],
    },
  ],
  outerRadius: 0.8,
  innerRadius: 0.6,
  valueField: "value",
  categoryField: "type",
  tooltip: false,
};

const barSpec = Object.assign({}, pieSpec, {
  type: "bar",
  xField: "type",
  yField: "value",
  seriesField: "type",
});

const specs = [pieSpec, barSpec];
let vchart;
function show() {
  vchart = new VChart(specs[0], {
    dom: "chart",
    animation: true, // 加在 spec 根对象，一键全关
  });
  vchart.renderSync();
  let count = 1;
  setInterval(() => {
    vchart.updateSpec(specs[count % 2]);
    count++;
  }, 2000);
}
onMounted(() => {
  show();
});
let dataTimer;
const handleAppear = () => {
  console.log(vchart);
  // 3. 核心：调用 dismiss() → 播放 animationDisappear → 自动 release

  vchart = null;
};
const handleDisappear = () => {
  vchart.release(); // 手动释放实例
  // vchart.runDisappearAnimation()
};
</script>
<style scoped>
#chart {
  width: 600px;
  height: 400px;
}
</style>
