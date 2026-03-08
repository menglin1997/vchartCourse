<template>
    <div id="chart"></div>
</template>
<script lang="ts" setup>
    import { default as VChart } from '@visactor/vchart'
    import { onMounted } from 'vue'

const spec = {
  type: 'pie',
  data: [{ 
    values: [
      { product: '数码', sales: 20 },
      { product: '日用品', sales: 50 },
      { product: '食品', sales: 80 }
    ]
  }],
  categoryField: 'product',
  valueField: 'sales',
  label: { visible: true,
    position: 'outside',      // 标签位置：outside/inside
    style: {
      fontSize: 12,
      fill: 'red'
    },
    line: {                   // 引导线配置
      visible: true,
      lineWidth: 1
    }

   },     // 显示标签
 legends: {
    visible: true,
    orient: 'right',          // 位置：top/bottom/left/right
    title: {
      visible: true,
      text: '产品类别'
    },
    item: {
      style: {
        fontSize: 12
      }
    }
  },

  innerRadius: 0.2,    // 设置内半径，饼图变环图
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
