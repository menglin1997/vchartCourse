<template>
  <div id="chart"></div>
</template>
<script lang="ts" setup>
import { default as VChart } from "@visactor/vchart";
import { onMounted } from "vue";

onMounted(async () => {
  const spec = {
    type: "radar",
    data: [
      {
        id: "白金",
        values: [
          {
            key: "力量",
            value: 5,
          },
          {
            key: "速度",
            value: 5,
          },
          {
            key: "射程",
            value: 3,
          },
          {
            key: "持续",
            value: 5,
          },
          {
            key: "精密",
            value: 5,
          },
          {
            key: "成长",
            value: 5,
          },
        ],
      },
    ],
    categoryField: "key",
    valueField: "value",
    // area: {
    //   visible: true, // 展示面积
    // },
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
  height: 400px;
}
</style>
