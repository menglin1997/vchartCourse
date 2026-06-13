<template>
  <div id="chart"></div>
</template>
<script lang="ts" setup>
import { default as VChart } from "@visactor/vchart";
import { onMounted } from "vue";

onMounted(() => {
  const spec = {
    type: "circularProgress",
    data: [
      {
        id: "id0",
        values: [
          {
            type: "A",
            value: 0.8,
          },
          // {
          //   type: "B",
          //   value: 0.5,
          // },
          // {
          //   type: "C",
          //   value: 0.7,
          // },
        ],
      },
    ],
    seriesField: 'type', //指定分类字段
    valueField: "value",
    categoryField: "type",
    outerRadius: 0.6,
    innerRadius: 0.5,
    cornerRadius: 20,
    progress:{
      style:{
        innerPadding: 10, // 内边距
        outerPadding: 10, // 外边距
      }
    }
  };

  const vchart = new VChart(spec, {
    dom: "chart",
  });
  vchart.renderSync();
});
</script>
<style scoped>
#chart {
  width: 600px;
  height: 500px;
}
</style>
