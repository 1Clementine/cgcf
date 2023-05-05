<template>
  <el-card class="box-card" shadow="never">
    <div slot="header">
      <span>🥳 每日一卡组</span>
    </div>
    <div>
      <div class="has-text-left block">
        {{ tip.content }}<!-- //从后台找到每日一卡组 -->
      </div>
      <div class="has-text-right mt-5 block"><!-- 五个像素间距bulma技术 -->
        {{ tip.author }}<!-- //从后台找到每日一卡组 -->
      </div>
    </div>
  </el-card>
</template>

<script>
import {getTodayTip} from '@/api/tip'//调用getTodayTip接口

export default {
  name: 'Tip',
  data() {
    return {
      tip: {}
    }
  },
  created() {//页面创建完成时调用fetchTodayTip接口
    this.fetchTodayTip()
  },
  methods: {
    fetchTodayTip() {
      getTodayTip().then(response => {
        const { data } = response
        this.tip = data
      })
    }
  }
}
</script>

<style scoped>

</style>
