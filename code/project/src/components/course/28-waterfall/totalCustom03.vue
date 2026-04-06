<template>
  <div id="chart"></div>
</template>
<script lang="ts" setup>
import { default as VChart } from "@visactor/vchart";
import { onMounted } from "vue";
const spec = {
    //   四要素 类型-数据-X-Y
    type:'waterfall',
    data: {
    id: 'id0',
    values: [
      { x: '小计', total: true },

      { x: '0', y: 20, type: 'A' },
      { x: '1', y: 20, type: 'A' },
      { x: '2', y: 20, type: 'A' },
      { x: '3', y: 20, type: 'A' },
      { x: '4', y: 20, type: 'A' },
      { x: '5', y: 20, type: 'A' },

      { x: '0', y: 11, type: 'B' },
      { x: '1', y: 20, type: 'B' },
      { x: '2', y: 20, type: 'B' },
      { x: '3', y: 20, type: 'B' },
      { x: '4', y: 20, type: 'B' },
      { x: '5', y: 20, type: 'B' },

      { x: '总计', total: true }
    ]
  },
    xField: 'x',
    yField: 'y',
    seriesField:"type",
    total: {
      type: 'custom',
      text:'总销售额',
      tagField: 'total',
      product: (datum, current) =>{
        console.log(datum, current);
        if(datum.x === '小计') {
          return {
                start: 0,
                end: 100
              };
        } else {
          return {
            start: 0,
            end: current.end
          }
        }
       
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
