<template>
  <div id="chart"></div>
</template>
<script lang="ts" setup>
import { default as VChart } from "@visactor/vchart";
import { onMounted } from "vue";

onMounted(() => {
  const spec = {
    // 四要素：类型-数据-分类字段-数值字段
    type: "circlePacking", // 图表类型
    data: [
      {
        id: "data",
        values: [
          {
            name: "技术栈",
            children: [
              {
                name: "前端",
                children: [
                  { name: "Vue", value: 850 },
                  { name: "React", value: 920 },
                  { name: "Angular", value: 430 },
                  { name: "Svelte", value: 280 },
                ],
              },
              {
                name: "后端",
                children: [
                  { name: "Node.js", value: 760 },
                  { name: "Python", value: 980 },
                  { name: "Java", value: 870 },
                  { name: "Go", value: 640 },
                ],
              },
              {
                name: "数据库",
                children: [
                  { name: "MySQL", value: 720 },
                  { name: "MongoDB", value: 530 },
                  { name: "Redis", value: 410 },
                  { name: "PostgreSQL", value: 490 },
                ],
              },
              {
                name: "移动端",
                children: [
                  { name: "iOS", value: 560 },
                  { name: "Android", value: 680 },
                  { name: "Flutter", value: 390 },
                  { name: "RN", value: 320 },
                ],
              },
            ],
          },
        ],
      },
    ],
    categoryField: "name", // 分类字段
    valueField: "value", // 数值字段
    label: {
      visible: true,
    },
    title: {
      visible: true,
      text: "技术栈热度分布 - Circle Packing",
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
