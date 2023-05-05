<template>
  <el-card class="box-card" shadow="never">
    <div slot="header">
      <span>🥂 语音聊天室</span>
    </div>
    <div>
      
      <p v-for="(item, index) in list" :key="index" class="block">
        <router-link :to="{path:'/im'}">
            进入聊天室
          </router-link>
        <!-- <a :href="item.link" target="_blank">{{ item.title }}</a> -->
      </p>
    </div>
  </el-card>
</template>

<script>
import { getList } from '@/api/promote'
// import im from '@/views/Im'

export default {
  name: 'Promotion',
  // components: {im},
  data() {
    return {
      list: []//定义一个空的列表
    }
  },
  created() {
    this.fetchList()
  },
  methods: {
    fetchList() {
      getList().then((response) => {
        const { data } = response
        this.list = data
      })
    }
  }
}
</script>

<style scoped>
</style>
