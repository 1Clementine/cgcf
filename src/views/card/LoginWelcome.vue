<template>
  <el-card class="box-card" shadow="never">
    <div slot="header">
      <span>💐 个人管理</span>
    </div>
    <div v-if="token != null && token !== ''" class="has-text-centered"><!-- 通过token判断是否登陆成功，若成功则显示可以发帖 -->
      <b-button type="is-danger" tag="router-link" :to="{path:'/post/create'}" outlined>✍ 发帖</b-button>
    </div>

    <div v-else class="has-text-centered">
      <b-button type="is-primary" tag="router-link" :to="{path:'/register'}" outlined>社区入驻</b-button>
      <b-button type="is-danger" tag="router-link" :to="{path:'/login'}" outlined class="ml-2"> 社区登录</b-button>
    </div>
  </el-card>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'LoginWelcome',
  computed: {
    ...mapGetters([//可在任意页面读取getters.js取得的数据
      'token'
    ])
  }
}
</script>

<style scoped>

</style>