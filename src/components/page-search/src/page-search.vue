<template>
  <div class="page-search">
    <hy-form v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h1 class="header">高级检索</h1>
      </template>
      <template #footer>
        <div class="handle-btns">
          <el-button @click="handleResetClick">
            <el-icon style="vertical-align: middle">
              <Refresh />
            </el-icon>
            <span style="vertical-align: middle"> 重置 </span>
          </el-button>
          <el-button type="primary" @click="handleQueryClick">
            <el-icon style="vertical-align: middle">
              <Search />
            </el-icon>
            <span style="vertical-align: middle"> 搜索 </span>
          </el-button>
        </div>
      </template>
    </hy-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import HyForm from '@/base-ui/form'
import { Search, Refresh } from '@element-plus/icons-vue'

export default defineComponent({
  props: {
    searchFormConfig: {
      type: Object,
      required: true
    }
  },
  components: {
    HyForm,
    Search,
    Refresh
  },
  emits: ['resetBtnClick', 'queryBtnClick'],
  setup(props, { emit }) {
    // 双向绑定的属性应该是由配置文件的field决定
    // 1优化一：formData中的属性应该动态来决定
    const formItems = props.searchFormConfig?.formItems ?? []

    const formOriginData: any = {}
    for (const item of formItems) {
      formOriginData[item.filed] = ''
    }
    const formData = ref(formOriginData)

    // 2.优化二: 当用户点击重置
    const handleResetClick = () => {
      formData.value = formOriginData
      emit('resetBtnClick')
    }
    // 3优化用户点击搜索
    const handleQueryClick = () => {
      emit('queryBtnClick', formData.value)
    }
    return {
      formData,
      handleResetClick,
      handleQueryClick
    }
  }
})
</script>

<style scoped lang="less">
.header {
  color: red;
}
.handle-btns {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>
