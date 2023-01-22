<template>
  <div class="page-search">
    <hy-form v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h1 class="header">高级检索</h1>
      </template>
      <template #footer>
        <div class="handle-btns">
          <el-button>
            <el-icon style="vertical-align: middle">
              <Refresh />
            </el-icon>
            <span style="vertical-align: middle"> 重置 </span>
          </el-button>
          <el-button type="primary">
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
  setup() {
    const formData = ref({
      id: '',
      name: '',
      password: '',
      sport: '',
      createTime: ''
    })

    return {
      formData
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
