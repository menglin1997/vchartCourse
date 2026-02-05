<template>
	<div>Bar条形图</div>
	<div id="chart"></div>
</template>
<script lang="ts" setup>
	import { default as VChart } from '@visactor/vchart'
	import { onMounted } from 'vue'

	const spec = {
		type: 'bar', // 1. 告诉VChart画什么

		xField: 'value', // 3. X轴显示什么(分类)

		yField: 'category', // 4. Y轴显示什么(数值)

		data: [
			// 提供数据源
			{
				id: 'area',
				values: [
					{ category: '手机', value: 1560 },
					{ category: '电脑', value: 2340 },
					{ category: '平板', value: 1890 }
				]
			}
		],
		direction: 'horizontal',  // 关键：改变方向
		bar: {
			style: {
				fill: '#1890ff', // 1. 统一主题色
				// stroke: '#ffffff', // 2. 添加白色边框
				lineWidth: 2,
				cornerRadius: 4 // 3. 圆角设计
			}
		}
	}
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
