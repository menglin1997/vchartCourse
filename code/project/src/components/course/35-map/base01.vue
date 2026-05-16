<template>
  <div id="chart"></div>
</template>
<script lang="ts" setup>
import { default as VChart } from "@visactor/vchart";
import { min } from "@visactor/vchart/esm/util";
import { onMounted } from "vue";

onMounted(async() => {
  const topojsonUrl = 'https://geojson.cn/api/china/1.6.3/china.topo.json';

const res = await fetch(topojsonUrl);
const data = await res.json();
console.log(data,'data');
const spec = {
  //   四要素 类型-数据-X-Y
  // 1.图表类型
  type: 'map',
  map:'south-america',
  data:[
    {
      id: 'map',
      values: [
        {
          name: '青海',
          value: 1253000
        },
        {
          name: '宁夏',
          value: 1153000
        },
        {
          name: '西藏',
          value: 1053000
        }
      ]
    }
],
nameField:'name',
valueField:'value',
area:{
  style:{
    fill:{
      scale:"color",
      field:"value",
      changeDomain:'replace'
    }
  }
},
color:{
  type: 'linear',
  range:['red','yellow','pink']
},
region:[
  // {
  //   projection:{
  //     type:"equirectangular"
  //   }
  // },
  {
    roam: true, // 开启交互
    zoomLimit:{
      min:1,
      max:2
    }
  }
]
};
  const vchart = new VChart(spec, {
    dom: "chart",
  });
VChart.registerMap("south-america", data, {
  type: 'topojson',
  object:"default",
  rewind: true
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
