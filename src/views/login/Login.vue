<template>
  <div class="login-box">
    <div class="icon">
      <van-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" size="60"  />
    </div>

    <van-field v-model.trim="userinfo" label="账号" />
    <van-field v-model="password" type="password" label="密码" />
    <van-button type="primary" @click="loginIN">登录</van-button>

  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      userinfo: '',
      password: ''
    }
  },
  methods: {
    loginIN () {
      if (this.userinfo === 'zmw' && this.password === '666') {
        localStorage.setItem('token', '999')
        this.$router.push('/user')
      } else { alert('请输入有效账号') }
    }
  }
}
</script>

<style lang="less" scoped>
.login-box {
  display: flex;
  flex-direction: column;
  text-align: center;

  .icon {

  margin-top: 40%;

  }
}
</style>
