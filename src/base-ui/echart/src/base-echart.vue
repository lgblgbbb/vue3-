<template>
  <div class="echart">
    <div ref="echartDivRef" :style="{ width: width, height: height }"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, onMounted, withDefaults, watchEffect } from 'vue'
import useEchart from '../hooks/useEchart'
import * as echarts from 'echarts'

// 定义props
const props = withDefaults(
  defineProps<{
    width?: string
    height?: string
    options: echarts.EChartsOption
  }>(),
  {
    width: '100%', //默认数据
    height: '360px' //默认数据
  }
)

const echartDivRef = ref<HTMLElement>()

onMounted(() => {
  const { setOptions } = useEchart(echartDivRef.value!)
  // 监视options数据的最新数据与渲染
  watchEffect(() => {
    setOptions(props.options)
  })
})
</script>

<style scoped></style>
