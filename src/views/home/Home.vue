<template>
  <div class="home-container">
    <van-nav-bar title="黑马头条" fixed />
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <Items v-for="item in list" :key="item.art_id" :title="item.title" :cover="images" :autName="item.aut_name" :count="item.comm_count" :pubdate="item.pubdate"></Items>
    </van-list>
  </van-pull-refresh>
  </div>
</template>

<script>
import Items from '@/components/Items/index.vue'
export default {
  name: 'Home',
  components: { Items },
  data () {
    return {
      loading: true,
      finished: false,
      refreshing: false,
      page: 1,
      limit: 10,
      list: [],
      images: ['https://t7.baidu.com/it/u=4162611394,4275913936&fm=193&f=GIF', 'https://t7.baidu.com/it/u=1951548898,3927145&fm=193&f=GIF', 'https://t7.baidu.com/it/u=1831997705,836992814&fm=193&f=GIF']
    }
  },
  created () {
    this.getLIst()
  },
  methods: {
    async getLIst () {
      const { data: res } = await this.$Api.homeApi.getListApi(this.page, this.limit)
      this.loading = false
      this.refreshing = false
      if (res.length === 0) { this.finished = true }
      this.list = [...this.list, ...res]
    },
    onLoad () {
      this.page++
      this.getLIst()
    },
    onRefresh () {
      this.finished = false
      this.list = []
      this.page = 1
      this.getLIst()
    }
  }

}
</script>

<style lang="less" scoped>
.home-container {
  padding: 50px 0;
  // .van-nav-bar {
  //   background-color: #007bff;
  //   /deep/ .van-nav-bar__title {
  //     color: white;
  //   }
  // }
}
</style>
