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
  label: { visible: true },     // 显示标签
  legends: { visible: true },    // 显示图例
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
