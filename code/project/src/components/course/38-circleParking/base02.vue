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
                name: "全球生态",
                children: [
                {
                    name: "亚洲",
                    children: [
                    {
                        name: "东亚",
                        children: [
                        { name: "中国", value: 14000 },
                        { name: "日本", value: 1260 },
                        { name: "韩国", value: 520 },
                        ],
                    },
                    {
                        name: "东南亚",
                        children: [
                        { name: "印尼", value: 2760 },
                        { name: "越南", value: 980 },
                        { name: "泰国", value: 720 },
                        ],
                    },
                    { name: "印度", value: 14000 },
                    ],
                },
                {
                    name: "美洲",
                    children: [
                    { name: "美国", value: 3310 },
                    { name: "巴西", value: 2150 },
                    { name: "加拿大", value: 380 },
                    { name: "墨西哥", value: 1270 },
                    ],
                },
                {
                    name: "欧洲",
                    children: [
                    { name: "德国", value: 830 },
                    { name: "英国", value: 680 },
                    { name: "法国", value: 680 },
                    { name: "俄罗斯", value: 1450 },
                    ],
                },
                ],
            },
            ],
        },
    ],
    layoutPadding: [120, 20, 20, 120], // 图表内边距
    drill: true,
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
