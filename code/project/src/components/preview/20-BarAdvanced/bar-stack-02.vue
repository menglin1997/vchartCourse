<template>
	<div>Bar 分组</div>
	<div id="chart"></div>
</template>
<script lang="ts" setup>
	import { default as VChart } from '@visactor/vchart'
	import { onMounted } from 'vue'

const spec = {
  type: 'bar',
  data: [
    {
      id: 'barData',
      values: [
        { product: '手机', year: '2022', sales: 1500 },
        { product: '手机', year: '2023', sales: 1800 },
        { product: '电脑', year: '2022', sales: 1200 },
        { product: '电脑', year: '2023', sales: 2000 }
      ]
    }
  ],
  xField: 'year',  // 数组形式！
  yField: 'sales',
  seriesField: 'product'    ,
  legends: {
    visible: true,
    orient: 'top',
    position: 'start',
    padding: {
      bottom: 10
    }
  },
    stack: true  // 关键配置！

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
