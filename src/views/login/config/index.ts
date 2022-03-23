export const rules = {
  name: [
    {
      required: true,
      message: "账号是必传的哦~",
      trigger: "blur"
    },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: "用户名必须是5~10个字母或者数字~",
      trigger: "blur"
    }
  ],
  password: [
    {
      required: true,
      message: "密码是必传的哦~",
      trigger: "blur"
    },
    {
      pattern: /^[a-z0-9]{5,}$/,
      message: "密码长度不能少于5位哦~",
      trigger: "blur"
    }
  ]
};
