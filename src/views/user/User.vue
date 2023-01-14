<template>
  <div class="user-box">
    <!-- 顶部图标区域 -->
    <div class="top-box">
      <div class="icon">
        <img src="@/assets/logo.png" alt="">
      </div>
      <div class="right">
        <span>用户名</span>
        <i>申请认证</i>
      </div>
    </div>
    <!-- 动态-关注-粉丝 -->
    <div class="mid-box">
      <div class="mid-box-item">
        <div>0</div>
        <div>动态</div>
      </div>
      <div class="mid-box-item">
        <div>0</div>
        <div>关注</div>
      </div>
      <div class="mid-box-item">
        <div>0</div>
        <div>粉丝</div>
      </div>
    </div>
    <!-- 底部区域 -->
    <div class="bot-box">
      <van-cell title="编辑资料" icon="edit" is-link />
      <van-cell title="小四同学" icon="chat-o" is-link />
      <van-cell title="退出登录" icon="warning-o" is-link @click="loginOut" />
    </div>

  </div>
</template>

<script>
export default {
  name: 'User',
  methods: {
    loginOut () {
      localStorage.removeItem('token')
      this.$router.push('/login')
    }
  }

}
</script>

<style lang="less" scoped>
.user-box{
  .top-box{
    height: 100px;
    background-color: #007bff;
    display: flex;
    align-items: center;
   .icon{
    height: 60px;
      width: 60px;
      background-color: white;
      border-radius: 50%;
      margin: 10px;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;

    img{
      padding-top: 8px;
      height: 80%;
      width: 80%;

    }
   }
   .right{
    display: flex;
    flex-direction: column;
    span{
      font-size: 16px;
      color: white;
      margin-bottom: 5px;
    }
    i{
      background-color: white;
      padding: 3px;
      color: #007bff;
    }

   }
  }
  .mid-box{
    height: 100px;
    background-color: #007bff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    div{
      color: white;
    }
  }
  .bot-box{}
}

</style>
