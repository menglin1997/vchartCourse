<template>
  <div class="flattened-data">
    <div class="flattened-data-header">
      <h2>Transform</h2>
    </div>
    <div id="chart"></div>
  </div>
</template>
<script lang="ts" setup>
import { default as VChart } from "@visactor/vchart";
import { onMounted } from "vue";
const spec = {
  type: 'bar',
 data: [
    {
      id: "dataSource",
      values: [
        { date: "Monday", "class No.1": 20, "class No.2": 30 },
        { date: "Tuesday", "class No.1": 25, "class No.2": 28 },
        { date: "周三", "class No.1": null, "class No.2": undefined },
      ],
      transforms: [
        {
          type: "fold",
          options: {
            key: "class", // 转化后，原始数据的 key 放入这个配置对应的字段中作为值
            value: "score", // 转化后，原始数据的 value 放入这个配置对应的字段中作为值
            fields: ["class No.1", "class No.2"], // 需要转化的维度
          },
        },
      ],
    },
    {
      id: "dataNoEmpty",
      fromDataId: "dataSource",
      transforms: [
        {
          type: "filter",
          options: {
            callBack: (datum) => {
              console.log(datum,'datum')
              return datum.score !== null && datum.score !== undefined
            },
          },
        },
      ],
    },
  ],
  dataIndex: 1, // 使用第二个数据源
  seriesField: 'class',
  xField: ['date','class'],
  yField: 'score'
};

// // 上方配置后，最终2个数据的实际内容为
// // dataSource
// [
//     { date: "Monday", class: "class No.1", score: 20 },
//     { date: "Monday", class: "class No.2", score: 30 },
//     { date: "Tuesday", class: "class No.1", score: 25 },
//     { date: "Tuesday", class: "class No.2", score: 28 },
//     { date: "周三", class: "class No.1", score: null },
//     { date: "周三", class: "class No.2", score: undefined },
// ]
// // dataNoEmpty
// [
//     { date: "Monday", class: "class No.1", score: 20 },
//     { date: "Monday", class: "class No.2", score: 30 },
//     { date: "Tuesday", class: "class No.1", score: 25 },
//     { date: "Tuesday", class: "class No.2", score: 28 },
// ]
onMounted(() => {
  const vchart = new VChart(spec, {
    dom: "chart",
  });
  vchart.renderSync();
});
</script>
<style>
#chart {
  width: 900px;
  height: 600px;
}
</style>