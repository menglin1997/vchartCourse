<template>
  <div id="chart"></div>
</template>
<script lang="ts" setup>
import { onMounted } from "vue";
import { default as VChart } from "@visactor/vchart";

function calculateAverage(data, dim) {
  let total = 0;
  for (let i = 0; i < data.length; i++) {
    total += data[i][dim];
  }
  return (total /= data.length);
}

function generateData(type) {
  const data = [];
  for (let i = 0; i < 10; i++) {
    data.push({ x: i, y: Math.random(), type });
  }
  return data;
}
const DataA = generateData('A');

const DataB = generateData('B');

const barSpec = {
  type: 'common',
  series: [
    {
      type: 'bar',
      data: { values: [{ value: calculateAverage(DataA, 'y'), type: 'A' }] },
      xField: 'type',
      yField: 'value',
      morph: {
        morphKey: 'A'
      }
    },
    {
      type: 'bar',
      data: { values: [{ value: calculateAverage(DataB, 'y'), type: 'B' }] },
      xField: 'type',
      yField: 'value',
      morph: {
        morphKey: 'B'
      }
    }
  ],
  axes: [
    { orient: 'left', type: 'linear', max: 1 },
    { orient: 'bottom', type: 'band' }
  ]
};

const scatterSpec = {
  type: 'common',
  series: [
    {
      type: 'scatter',
      data: { values: DataA },
      xField: 'x',
      yField: 'y',
      seriesField: 'type',
      morph: {
        morphKey: 'A',
        morphElementKey: 'type'
      }
    },
    {
      type: 'scatter',
      data: { values: DataB },
      xField: 'x',
      yField: 'y',
      seriesField: 'type',
      morph: {
        morphKey: 'B',
        morphElementKey: 'type'
      }
    }
  ],
  axes: [
    { orient: 'left', type: 'linear', zero: false, max: 1 },
    { orient: 'bottom', type: 'band' }
  ]
};

const specs = [barSpec, scatterSpec];
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
