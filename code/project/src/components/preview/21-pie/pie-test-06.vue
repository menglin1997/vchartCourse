<template>
    <div id="chart"></div>
</template>
<script lang="ts" setup>
    import { default as VChart } from '@visactor/vchart'
    import { onMounted } from 'vue'

const spec = {
   type: 'pie',                  // 类型仍是pie
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
  categoryField: 'department',
  valueField: 'budget',
  
  // 环图核心配置：设置内半径
  innerRadius: 0.6,             // 内半径0.6，形成环状
  outerRadius: 1,               // 外半径1（全径）
  
  // 标签配置 - 外部标签+引导线
  label: {
    visible: true,
    position: 'outside',        // 标签位于扇区外部
    offset: 10,                 // 标签距离扇区的偏移量
    
    // 引导线配置
    line: {
      visible: true,
      lineWidth: 1,
      lineType: 'solid',
      color: '#999999'
    },
    
    style: {
      fontSize: 12,
      fill: '#333333'
    },
    
    formatMethod: (text, datum) => {
      return `${datum.department}: ${datum.budget}万`;
    }
  },
  
  // 图例配置
  legends: {
    visible: true,
    orient: 'right',             // 图例位于右侧
    item: {
      style: {
        fontSize: 12
      }
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
