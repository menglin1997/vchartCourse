<template>
	<div id="chart"></div>
</template>
<script lang="ts" setup>
	import { default as VChart } from '@visactor/vchart'
	import { onMounted } from 'vue'
	const spec = {
		type: 'waterfall',
		data: [
			{
				values: [
					{ product: '数码产品', sales: 20 },
					{ product: '日用品', sales: 50 },
					{ product: '食品', sales: 80 }
				]
			}
		],
		xField: 'product',
		yField: 'sales',
		total: {
			type: 'end', // 在末尾自动计算总计
			text: '总计'
		}
	}

	onMounted(() => {
		const vchart = new VChart(spec, {
			dom: 'chart'
		})
		vchart.renderSync()
	})
</script>
