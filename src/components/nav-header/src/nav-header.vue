<template>
  <div class="nav-header">
    <el-icon size="30" class="fold-menu" @click="handleFoldClick"
      ><component :is="!isFold ? 'Fold' : 'Expand'"
    /></el-icon>
    <div class="content">
      <hy-breadcrumb :breadcrumbes="breadcrumbes" />
      <user-info />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { Fold, Expand } from '@element-plus/icons-vue'
import UserInfo from './user-info.vue'
import HyBreadcrumb from '@/base-ui/breadcrumb/index'
import { useRoute } from 'vue-router'
import { useStore } from '@/store'
import { pathMapBreadcrumbs } from '@/utils/map-menus'

export default defineComponent({
  emits: ['foldChange'],
  components: {
    Fold,
    Expand,
    UserInfo,
    HyBreadcrumb
  },
  setup(props, { emit }) {
    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }

    // 面包屑的数据
    const store = useStore()
    const breadcrumbes = computed(() => {
      const userMenus = store.state.login.userMenus
      const route = useRoute()
      const currentPath = route.path
      return pathMapBreadcrumbs(userMenus, currentPath)
    })
    return {
      isFold,
      handleFoldClick,
      breadcrumbes
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
