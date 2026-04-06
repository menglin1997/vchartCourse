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
      id: 'id0',
      values: [
        { x: 'First quarter-primary industry', y: 10954, type: 'primary industry' },
        { x: 'First Quarter-Secondary Industry', y: 106187, type: 'Secondary Industry' },
        { x: 'First quarter-tertiary industry', y: 153037, type: 'tertiary industry' },
        { x: 'First quarter', total: true, collect: 3 },
        { x: 'Second Quarter-Primary Industry', y: 18183, type: 'Primary Industry' },
        { x: 'Second Quarter-Second Industry', y: 122450, type: 'Second Industry' },
        { x: 'Second Quarter-Tertiary Industry', y: 151831, type: 'Tertiary Industry' },
        { x: 'Second quarter', total: true, collect: 3 },
        { x: 'Third Quarter-Primary Industry', y: 25642, type: 'Primary Industry' },
        { x: 'Third Quarter-Second Industry', y: 121553, type: 'Second Industry' },
        { x: 'Third quarter-tertiary industry', y: 160432, type: 'tertiary industry' },
        { x: 'Third Quarter', total: true, collect: 3 },
        { x: 'Fourth Quarter-Primary Industry', y: 33497, type: 'Primary Industry' },
        { x: 'Fourth Quarter-Secondary Industry', y: 132601, type: 'Secondary Industry' },
        { x: 'Fourth quarter-tertiary industry', y: 169411, type: 'tertiary industry' },
        { x: 'four quarters', total: true, collect: 3 },
        { x: 'full year', total: true }
      ]
    }
  ],
  xField: 'x',
  yField: 'y',
  seriesField: 'type',
  total: {
    type: 'field',
    tagField: 'total',
    startField: 'start',
    valueField: 'value',
    collectCountField: 'collect'
  },
};


	onMounted(() => {
		const vchart = new VChart(spec, {
			dom: 'chart'
		})
		vchart.renderSync()
	})
</script>
