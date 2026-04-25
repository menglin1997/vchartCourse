<template>
  <div id="chart"></div>
</template>
<script lang="ts" setup>
import { default as VChart } from "@visactor/vchart";
import { onMounted } from "vue";
onMounted(async() => {
  
  // 基础数据
const response = await fetch('https://lf9-dp-fe-cms-tos.byteorg.com/obj/bit-cloud/data-wordcloud.json');
const dataWordCloud = await response.json();
console.log(dataWordCloud,'dataWordCloud');
  // maskShape: `https://lf9-dp-fe-cms-tos.byteorg.com/obj/bit-cloud/log.jpeg`,

// const dataWordCloud = [{
//   challenge_name: '螺蛳粉',
//   sum_count: 957
// },
// {
//   challenge_name: '钵钵鸡',
//   sum_count: 942
// },
// {
//   challenge_name: '板栗',
//   sum_count: 842
// },
// {
//   challenge_name: '胡辣汤',
//   sum_count: 828
// },
// {
//   challenge_name: '关东煮',
//   sum_count: 665
// },
// {
//   challenge_name: '羊肉汤',
//   sum_count: 627
// },
// {
//   challenge_name: '热干面',
//   sum_count: 574
// }]
const spec = {
  //   四要素 类型-数据-X-Y
  type: "wordCloud",
  data:{
    name:"baseData",
    values: dataWordCloud
  },
  nameField: 'challenge_name',
  valueField: 'sum_count',
  seriesField:"challenge_name",
  wordCloudShapeConfig:{
   
  }, // 形状图云配置
  wordCloudConfig:{
    // drawOutOfBound: "clip", // clip 绘制超长文本 hidden:不绘制超长文本
    zoomToFit: {
      shrink: true,
      fontSizeLimitMin: 30
      // enlarge: true,
      // fontSizeLimitMax: 20
    },
    // layoutMode: 'default', // default:默认布局 fast:快速布局 grid:网格布局
  },
  maskShape: `https://lf9-dp-fe-cms-tos.byteorg.com/obj/bit-cloud/log.jpeg`,
  colorList: ['red','green','blue','yellow','orange','purple','pink'],
  // rotateAngles: [10, 90], // 角度调整
  // word:{
  //   formatMethod: datum => {
  //     return "xxx" + 'sdfsdf';
  //   }
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
