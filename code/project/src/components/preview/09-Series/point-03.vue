<template>
  <div>
    default 默认状态，图元的初始状态。<br/>
    hover 指针悬浮状态，图元被鼠标指针悬浮时的状态。<br/>
    hover_reverse 非指针悬浮状态，当有图元进入了 hover 状态时，其他图元的状态。<br/>
    selected 选中状态，图元被选中时的状态。<br/>
    selected_reverse 非选中状态，当有图元进入了 selected 状态时，其他图元的状态。<br/>
    dimension_hover 维度悬浮状态，鼠标指针悬浮在某一段 x 轴区域内时的状态。<br/>
    dimension_hover_reverse 非维度悬浮状态，当有图元进入了 dimension_hover 状态时，其他图元的状态。
  </div>
  <div id="chart"></div>
</template>
<script lang="ts" setup>
import { default as VChart } from "@visactor/vchart";
import { onMounted } from "vue";

const spec = {
  type: "line",
  title: {
    text: "月度销售额趋势",
    subtext: "2024年第一季度",
    textStyle: {
      fontSize: 18,
      fontWeight: "bold",
      fill: "#333",
    },
    subtextStyle: {
      fontSize: 14,
      fill: "#666",
    },
    align: "center",
  },
  data: [
    {
      id: "area",
      values: [
        { type: "A", month: "01", value: 129 },
        { type: "B", month: "01", value: 110 },
        { type: "A", month: "02", value: 130 },
        { type: "B", month: "02", value: 123 },
        { type: "A", month: "03", value: 126 },
        { type: "B", month: "03", value: 133 },
        { type: "A", month: "04", value: 117 },
        { type: "B", month: "04", value: 133 },
        { type: "A", month: "05", value: 114 },
        { type: "B", month: "05", value: 133 },
        { type: "A", month: "06", value: 111 },
        { type: "B", month: "06", value: 133 },
      ],
    },
  ],
  xField: "month",
  yField: "value",
  seriesField: "type",
  point: {
    
    // style: {
    //   fill: 'blue' // 1-数据点默认颜色
    // },
    // 2-函数式配置数据点颜色
    style: {
      fill: datum => {
        if (datum.value >= 120) {
          return 'red';
        }
        return 'blue';
      }
    },

    // 3-自定义状态
    state: {
      custom: { // 自定义状态
        filter: data => {
          return data.value >= 120;
        },
        style: {
          fill: 'red'
        }
      },
      hover: {
        style: {
          fill: 'red' // 数据点悬浮状态颜色
        }
      },
      selected: {
        style: {
          size: 10 // 数据点选中状态大小
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
