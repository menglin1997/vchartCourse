<template>
  <div id="chart"></div>
</template>
<script lang="ts" setup>
import { default as VChart,registerMosaicChart } from "@visactor/vchart";
import { onMounted } from "vue";
registerMosaicChart()
const spec = {
    //   四要素 类型-数据-X-Y
    type: 'mosaic', // 图表类型
    data: [
        {
            name: 'A',
            values: [{
                product: '数码产品',
                type: 'A',
                sales: 20
            },
            // {
            //     product: '数码产品',
            //     type: 'B',
            //     sales: 20
            // },
            // {
            //     product: '日用品',
            //     type: 'B',
            //     sales: 20
            // },
            {
                product: '日用品',
                type: 'A',
                sales: 20
            }]
        }
    ],
    xField: 'product',
    yField: 'sales',
    // seriesField: 'type',
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
