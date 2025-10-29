<template>
	<body>
		<!-- 为 vchart 准备一个具备大小（宽高）的 DOM，当然你也可以在 spec 配置中指定 -->
		<div ref="chartRef" style="width: 600px; height: 400px"></div>
	</body>
</template>
<script setup lang="ts">
	import { onMounted, onUnmounted, ref } from 'vue'
	import VChart  from '@visactor/vchart'
	console.log(VChart, 'VChart')
	const chartRef = ref<HTMLDivElement>()
	const spec = {
		type: 'line',
		data: {
			values: [
				{
					time: '2:00',
					value: 8
				},
				{
					time: '4:00',
					value: 9
				},
				{
					time: '6:00',
					value: 11
				},
				{
					time: '8:00',
					value: 14
				},
				{
					time: '10:00',
					value: 16
				},
				{
					time: '12:00',
					value: 17
				},
				{
					time: '14:00',
					value: 17
				},
				{
					time: '16:00',
					value: 16
				},
				{
					time: '18:00',
					value: 15
				}
			]
		},
		xField: 'time',
		yField: 'value'
	}
  let vchart: VChart
	onMounted(() => {
		// 基于准备好的图表 dom 容器，创建 VChart 实例
		vchart = new VChart(spec, {
			dom: chartRef.value
		})

		// 调用渲染方法绘制图表
		vchart.renderSync()
	})

	onUnmounted(() => {
		// 图表实例销毁
	})
</script>
