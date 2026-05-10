<template>
  <div id="chart"></div>
</template>
<script lang="ts" setup>
import { default as VChart } from "@visactor/vchart";
import { onMounted } from "vue";

const spec = {
    //   四要素 类型-数据-X-Y
    type: "gauge",
    data: [{
      id:"id0",
      values: [{
        type:"targetA",
        value: 0.6
      }]
    }],
    categoryField:"type", // 分类字 字段 映射不同的扇区
    valueField:"value", // 值 字段 映射指针角度
    outerRadius:0.8, // 外半径 占比 0-1
    innerRadius:0.4, // 内半径
    startAngle: -180, // 开始角度 角度 0-360
    endAngle: 0, // 结束角度 角度 0-360
    pointer:{
      width: 0.5,
      height:0.5,
      style:{
        fill:"yellow"
      }
    },
    pin:{
      style:{
        fill:"red"
      }
    }

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
