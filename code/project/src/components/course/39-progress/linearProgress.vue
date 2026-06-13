<template>
  <div id="chart"></div>
</template>
<script lang="ts" setup>
import { default as VChart } from "@visactor/vchart";
import { onMounted } from "vue";

onMounted(() => {
  const spec = {
    type: "linearProgress", // 图表类型
    data: [
      {
        id: "id0",
        values: [
          {
            type: "A",
            value: 0.7,
          },
        ],
      },
    ],
    direction: "horizontal",
    xField: "value",
    yField: "type",

    cornerRadius: 20,
    bandWidth: 40,
    progress: {
      // topPadding: 20,
      // bottomPadding: 20,
      // leftPadding: 20, // 垂直方向生效
      // rightPadding: 20, // 垂直方向生效
      style:{
        fill: (percent) => {
          console.log(percent);
          if (percent.value < 0.6) {
            return '#D04D5B';
          } else if (percent.value < 0.8) {
            return '#ED9747';
          } else {
            return '#579E78';
          }
        }
        // fill: {
        //   gradient: 'linear',
        //   x0: 0.5,
        //   y0: 0,
        //   x1: 0.5,
        //   y1: 1,
        //   stops: [
        //     {
        //       offset: 0,
        //       color: '#86DF6C'
        //     },
        //     {
        //       offset: 1,
        //       color: '#468DFF'
        //     }
        //   ]
        // },
      }
    },
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
