<template>
  <div id="chart"></div>
</template>
<script lang="ts" setup>
import { default as VChart } from "@visactor/vchart";
import { registerPie3dChart } from '@visactor/vchart-extension';

import { onMounted } from "vue";
registerPie3dChart();

onMounted(() => {
  const spec = {
    //   四要素 类型-数据-X-Y
    type: 'pie3d',
    data:{
      values:  [
        { type: 'Nail polish', value: 4229 },
        { type: 'Nail polish', value: 4376 },
        { type: 'Mascara', value: 10419 },
        { type: 'Mascara', value: 11261 }
      ]
    },
    valueField: 'value',
    categoryField: 'type',




    

   
};
  const vchart = new VChart(spec, {
    dom: "chart",
    options3d:{
       enable: true, // 开启3d视角
      enableView3dTransform: true, // 支持3d的自由变换
    }
   
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
