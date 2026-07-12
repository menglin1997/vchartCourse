<template>
  <div id="chart"></div>
</template>
<script lang="ts" setup>
import { default as VChart } from "@visactor/vchart";
import { onMounted } from "vue";
const spec = {
  //   四要素 类型-数据-X-Y
  type: "common",
  region: [
    {
      id: "pie-region",
      height: "40%",
    },
    {
      id: "line-region",
    },
  ],
  series: [
    {
      regionId: "pie-region",
      type: "pie",
      data: {
        id: "pie",
        values: [
          { name: "A", value: 100 },
          { name: "B", value: 200 },
          { name: "C", value: 300 },
          { name: "D", value: 400 },
        ],
      },
      valueField: "value",
      categoryField: "name",
    },
    {
      regionId: "line-region",
      type: "line",
      data: {
        id: "line",
        values: [
          {
            x: "周一",
            y: 15,
            type: "早餐",
          },
          {
            x: "周一",
            y: 25,
            type: "午餐",
          },
          {
            x: "周二",
            y: 12,
            type: "早餐",
          },
        ],
      },
      xField: "x",
      yField: "y",
      seriesField: "type",
    },
  ],
  axes: [
    {
      id: "left-axis",
      orient: "left",
      regionId: "line-region",
    },
    {
      id: "bottom-axis",
      orient: "bottom",
      regionId: "line-region",
    },
  ],
  layout: {
    type: "grid",
    col: 2,
    row: 4,
    elements: [
      {
        modelId: "pie-region",
        col: 0,
        colSpan: 2,
        row: 0,
      },
      {
        modelId: "left-axis",
        col: 0,
        row: 2,
      },
      {
        modelId: "line-region",
        col: 0,
        row: 2,
      },
      {
        modelId: "bottom-axis",
        col: 1,
        row: 3,
      },
    ],
  },
  //     data: [
  //   {
  //     id: 'id0',
  //     values: [
  //       { x: '周一', type: '早餐', y: 15 },
  //       { x: '周一', type: '午餐', y: 25 },
  //       { x: '周二', type: '早餐', y: 12 },
  //       { x: '周二', type: '午餐', y: 30 },
  //       { x: '周三', type: '早餐', y: 15 },
  //       { x: '周三', type: '午餐', y: 24 },
  //       { x: '周四', type: '早餐', y: 10 },
  //       { x: '周四', type: '午餐', y: 25 },
  //       { x: '周五', type: '早餐', y: 13 },
  //       { x: '周五', type: '午餐', y: 20 },
  //       { x: '周六', type: '早餐', y: 10 },
  //       { x: '周六', type: '午餐', y: 22 },
  //       { x: '周日', type: '早餐', y: 12 },
  //       { x: '周日', type: '午餐', y: 19 }
  //     ]
  //   },
  //   {
  //     id: 'id1',
  //     values: [
  //       { x: '周一', type: '饮料', y: 22 },
  //       { x: '周二', type: '饮料', y: 43 },
  //       { x: '周三', type: '饮料', y: 33 },
  //       { x: '周四', type: '饮料', y: 22 },
  //       { x: '周五', type: '饮料', y: 10 },
  //       { x: '周六', type: '饮料', y: 30 },
  //       { x: '周日', type: '饮料', y: 50 }
  //     ]
  //   }
  // ],

  //   axes: [{
  //     orient: 'left',
  //     seriesIndex: [0]
  //   },
  //   {
  //      orient: 'bottom',
  //     //  seriesIndex: [1]

  //   },
  //   {
  //     orient: 'right',
  //   }
  // ]
};
onMounted(() => {
  const vchart = new VChart(spec, {
    dom: "chart",
  });
  vchart.renderSync();
});
</script>
<style scoped>
#chart {
  width: 600px;
  height: 400px;
}
</style>
