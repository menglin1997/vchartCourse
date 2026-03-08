<template>
    <div id="chart"></div>
</template>
<script lang="ts" setup>
    import { default as VChart } from '@visactor/vchart'
    import { onMounted } from 'vue'

const spec = {
 type: 'pie',
  data: [
    {
      values: [
        { department: '研发部', budget: 150 },
        { department: '市场部', budget: 80 },
        { department: '销售部', budget: 120 },
        { department: '行政部', budget: 30 },
        { department: '财务部', budget: 20 }
      ]
    }
  ],
  categoryField: 'department',  // 分类字段：部门
  valueField: 'budget',         // 数值字段：预算
  
  // 标签配置 - 内部标签
  label: {
    visible: true,
    position: 'inside',         // 标签位于扇区内部
    style: {
      fontSize: 12,
      fill: '#ffffff',          // 白色文字（深色背景时更清晰）
      fontWeight: 'bold'
    },
    formatMethod: (text, datum) => {
      return `${datum.department}: ${datum.budget}万`;
    }
  },
  
  // 图例配置
  legends: {
    visible: true,
    orient: 'bottom',            // 图例位于底部
    title: {
      visible: true,
      text: '部门预算'
    }
  },
  
};
    onMounted(() => {
        const vchart = new VChart(spec, {
            dom: 'chart'
        })
        vchart.renderSync()
    })
</script>
<style scoped>
    #chart {
        width: 600px;
        height: 400px;
    }
</style>
