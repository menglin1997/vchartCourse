<template>
  <div class="flattened-data">
    <div class="flattened-data-header">
      <h2>tree data</h2>
    </div>
    <div id="chart"></div>
  </div>
</template>
<script lang="ts" setup>
import { default as VChart } from "@visactor/vchart";
import { onMounted } from "vue";

const data = [
  {
    name: 'Grandpa',
    children: [
      {
        name: 'Uncle Leo',
        value: 15,
        children: [
          {
            name: 'Cousin Jack',
            value: 2
          },
          {
            name: 'Cousin Mary',
            value: 5,
            children: [
              {
                name: 'Jackson',
                value: 2
              }
            ]
          },
          {
            name: 'Cousin Ben',
            value: 4
          }
        ]
      },
      {
        name: 'Father',
        value: 10,
        children: [
          {
            name: 'Me',
            value: 5
          },
          {
            name: 'Brother Peter',
            value: 1
          }
        ]
      }
    ]
  },
  {
    name: 'Nancy',
    children: [
      {
        name: 'Uncle Nike',
        children: [
          {
            name: 'Cousin Betty',
            value: 1
          },
          {
            name: 'Cousin Jenny',
            value: 2
          }
        ]
      }
    ]
  }
];

const spec = {
  type: 'sunburst',
  offsetX: 0,
  offsetY: 20,
  categoryField: 'name',
  valueField: 'value',
  outerRadius: 0.75,
  innerRadius: 0,
  gap: 0,
  labelLayout: {
    align: 'start',
    rotate: 'radial',
    offset: 60
  },
  drill: true,
  sunburst: {
    visible: true,
    style: {
      fillOpacity: datum => {
        return datum.isLeaf ? 0.4 : 0.8;
      }
    }
  },
  label: {
    visible: true,
    style: {
      fillOpacity: datum => {
        return datum.isLeaf ? 0.4 : 0.8;
      }
    }
  },
  tooltip: {
    mark: {
      title: {
        value: val => {
          return val?.datum?.map(data => data.name).join(' / ');
        }
      }
    }
  },
  data: [
    {
      id: 'data',
      values: data
    }
  ]
};
onMounted(() => {
  const vchart = new VChart(spec, {
    dom: "chart",
  });
  vchart.renderSync();
});
</script>
<style>
#chart {
  width: 900px;
  height: 600px;
}
</style>