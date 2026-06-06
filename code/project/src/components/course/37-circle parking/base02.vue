<template>
  <div id="chart"></div>
</template>
<script lang="ts" setup>
import { default as VChart } from "@visactor/vchart";
import { onMounted } from "vue";

onMounted(() => {
  const spec = {
    type: "circlePacking",
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
    categoryField: "name",
    valueField: "value",

    // 标签配置：按层级控制显示
    label: {
      visible: true,
      style: {
        // 通过回调函数按层级控制字体大小
        fontSize: (datum) => {
          const depth = datum.depth || 0;
          if (depth === 0) return 0;   // 根节点不显示
          if (depth === 1) return 14;  // 第一层
          if (depth === 2) return 12;  // 第二层
          return 10;                   // 叶子节点
        },
        visible: (datum) => {
          // 叶子节点圆较小时隐藏标签
          return datum.depth <= 2;
        },
      },
    },

    // 圆形样式：按层级设置不同颜色和透明度
    circlePacking: {
      style: {
        fillOpacity: (datum) => {
          const depth = datum.depth || 0;
          if (depth === 0) return 0.1;
          if (depth === 1) return 0.3;
          if (depth === 2) return 0.5;
          return 0.8;
        },
        lineWidth: 1,
        stroke: "#fff",
      },
    },

    // 层级间距配置：数组分别控制各层间距
    layoutPadding: [20, 10, 5],

    // 开启下钻功能：点击父节点进入子级视图
    drill: true,

    title: {
      visible: true,
      text: "全球人口分布 - Circle Packing 进阶",
      subtext: "点击父节点可下钻查看子级数据",
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
