<template>
  <div id="chart"></div>
</template>
<script lang="ts" setup>
import { default as VChart } from "@visactor/vchart";
import { onMounted } from "vue";
const data = [
  { type: '智能手机', value: '34.8', formula: 'Phone', texture: 'circle' },        // 类似 oxygen
  { type: '笔记本电脑', value: '28.3', formula: 'Laptop', texture: 'horizontal-line' }, // 类似 silicon
  { type: '平板电脑', value: '15.2', formula: 'Pad', texture: 'vertical-line' },    // 类似 aluminum
  { type: '智能穿戴', value: '9.5', formula: 'Watch', texture: 'rect' },            // 类似 iron
  { type: '配件', value: '7.2', formula: 'Accessory', texture: 'grid' },            // 类似 calcium
  { type: '音频设备', value: '5.0', formula: 'Audio', texture: 'bias-rl' }           // 类似 sodium (钾改为音频)
];
const spec = {
  type: "pie",
  data: [
    {
      values: data,
    },
  ],
  categoryField: "type",
  valueField: "value",
  label: { visible: true }, // 显示标签
  legends: { visible: true }, // 显示图例
  innerRadius: 0.6, // 环图必需
  outerRadius: 1,
  indicator: {
    visible: true,
    title: {
      visible: true,
      style: {
        text: "销售占比",
      },
    },
    content: [
      {
        visible: true,
        style: {
          fontSize: 18,
          fill: "orange",
          fontFamily: "Times New Roman",
          text: (datum) => {
            if (datum) {
              const value = datum['value'];
              return value ? `${value}%` : null;
            }
            return ""
          },
        },
      },
    ],
  },
  pie: {
    style: {
      cornerRadius: 5,
      texture: (datum) => datum["texture"],
    },
    state: {
      hover: {
        outerRadius: 0.85,
        stroke: "#000",
        lineWidth: 1,
      },
      selected: {
        outerRadius: 0.85,
        stroke: "#000",
        lineWidth: 1,
      },
    },
  },
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
