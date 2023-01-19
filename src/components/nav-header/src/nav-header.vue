<template>
  <div class="nav-header">
    <el-icon size="30" class="fold-menu" @click="handleFoldClick"
      ><component :is="!isFold ? 'Fold' : 'Expand'"
    /></el-icon>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Fold, Expand } from '@element-plus/icons-vue'

export default defineComponent({
  emits: ['foldChange'],
  components: {
    Fold,
    Expand
  },
  setup(props, { emit }) {
    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }
    return {
      isFold,
      handleFoldClick
    }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  .fold-menu {
    cursor: pointer;
  }
}
</style>
