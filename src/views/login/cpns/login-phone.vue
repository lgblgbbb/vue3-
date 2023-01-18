<template>
  <div>
    <el-form :model="phone" label-width="70px" :rules="rules" ref="formRef">
      <el-form-item label="手机号" prop="number">
        <el-input v-model="phone.number" />
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <div class="get-code">
          <el-input v-model="phone.code" />
          <el-button type="primary" class="btn" size="small"
            >获取验证码</el-button
          >
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { ElForm } from 'element-plus/lib/components'
import { defineComponent, reactive, ref } from 'vue'
import { rules } from '../config/phone-config'
import { useStore } from 'vuex'
export default defineComponent({
  setup() {
    const store = useStore()

    const phone = reactive({
      number: '',
      code: ''
    })
    const formRef = ref<InstanceType<typeof ElForm>>()

    const loginAction = () => {
      formRef.value?.validate((valid) => {
        if (valid) {
          // 1、开始进行登录验证
          store.dispatch('/login/phoneLoginAction', { ...phone })
        }
      })
    }
    return {
      phone,
      rules,
      loginAction,
      formRef
    }
  }
})
</script>

<style scoped lang="less">
.get-code {
  display: flex;
  .btn {
    margin: 4px 0 0 8px;
  }
}
</style>
