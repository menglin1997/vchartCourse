<template>
  <div>
     </div>
  <div id="chart"></div>
</template>
<script lang="ts" setup>
import { default as VChart } from "@visactor/vchart";
import { onMounted } from "vue";

const spec = {
  type: 'common',
  data: [
    {
      id: 'data1',
      values: [
        { x: 'Q1', y: 0, type: 'typeA' },
        { x: 'Q1', y: 50, type: 'typeB' },
        { x: 'Q2', y: 100, type: 'typeA' },
        { x: 'Q2', y: 200, type: 'typeB' }
      ]
    },
    {
      id: 'data2',
      values: [
        { x: 'Q1', y: 80, group: 'typeC' },
        { x: 'Q1', y: -50, group: 'typeD' },
        { x: 'Q2', y: 150, group: 'typeC' },
        { x: 'Q2', y: 180, group: 'typeD' }
      ]
    }
  ],
  series: [
    {
      type: 'scatter',
      xField: 'x',
      yField: 'y',
      dataId: 'data1',
      seriesField: 'type',
      point: {
        // style: {
        //   size: {
        //     field: 'y',
        //     scale: 'sizeScale' // 大小映射到 sizeScale 比例尺
        //   },
        //   shape: {
        //     field: 'type',
        //     scale: 'shapeScale' // 形状映射到 shapeScale 比例尺
        //   }
        // }
      }
    },
    {
      type: 'line',
      xField: 'x',
      yField: 'y',
      dataId: 'data2',
      seriesField: 'group',
      point: {
        // style: {
        //   size: {
        //     field: 'y',
        //     scale: 'sizeScale' // 大小映射到 sizeScale 比例尺
        //   },
        //   shape: {
        //     field: 'group',
        //     scale: 'shapeScale' // 形状映射到 shapeScale 比例尺
        //   }
        // }
      }
    }
  ],
  scales: [
    {
      id: 'shapeScale',
      type: 'ordinal',
      domain: [
        {
          dataId: 'data1',
          fields: ['type']
        },
        {
          dataId: 'data2',
          fields: ['group']
        }
      ],
      range: ['circle', 'rect', 'triangle', 'diamond']
    },
    {
      id: 'sizeScale',
      type: 'linear',
      domain: [
        {
          dataId: 'data1',
          fields: ['y']
        },
        {
          dataId: 'data2',
          fields: ['y']
        }
      ],
      range: [10, 20]
    }
  ],
  axes: [{ orient: 'left' }, { orient: 'bottom' }]
};
onMounted(() => {
  const vchart = new VChart(spec, {
    dom: "chart",
  });
  vchart.renderSync();
});
</script>
