<template>
  <div class="nav-header">
    <el-icon size="30" class="fold-menu" @click="handleFoldClick"
      ><component :is="!isFold ? 'Fold' : 'Expand'"
    /></el-icon>
    <div class="content">
      <div>面包屑</div>
      <user-info />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Fold, Expand } from '@element-plus/icons-vue'
import UserInfo from './user-info.vue'

export default defineComponent({
  emits: ['foldChange'],
  components: {
    Fold,
    Expand,
    UserInfo
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
  width: 100%;
  display: flex;
  .fold-menu {
    cursor: pointer;
  }
  .content {
    padding: 0 10px;
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
