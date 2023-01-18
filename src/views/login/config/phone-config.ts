// 编写规则
export const rules = {
  number: [
    {
      required: true,
      message: '手机号必填',
      trigger: 'blur'
    },
    {
      pattern: /^[0-9]{11}$/,
      message: '手机号必须是13个数字',
      trigger: 'blur'
    }
  ],
  code: [
    {
      required: true,
      message: '验证码必填',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{6,}$/,
      message: '验证码必须是6位以上字母或者数字',
      trigger: 'blur'
    }
  ]
}
