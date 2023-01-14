<template>
  <div class="item-container">
    <h3>{{ title }}</h3>
    <div class="img">
      <img :src="item" alt="" v-for="(item,index) in cover" :key="index">
    </div>
    <div class="bot-box">
      <span>作者 {{ autName }}</span>
      <span>{{ count }} 评论</span>
      <span>发布日期 {{ pubdate }}</span>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Items',
  props: ['title', 'cover', 'autName', 'count', 'pubdate']

}
</script>

<style lang="less" scoped>
.item-container{
  padding: 5px;
  .img{
    display: flex;
    justify-content: space-between;
    img{
      width: 32%;
      height: 100px;
    }

  }
  .bot-box{
span{
  margin-right: 10px;
}
  }
}

</style>
