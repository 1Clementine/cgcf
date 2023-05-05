<template>
  <section>
    <!--是否登录-->
    <login-welcome />

    <!--今日卡组-->
    <tip-card />

    <!--语音聊天室-->
    <PromotionCard />

    
  </section>
</template>

<script>//在侧边栏中引入登录、语音聊天室、每日一卡组三个页面
import TipCard from '@/views/card/Tip'
import PromotionCard from '@/views/card/Promotion'
import LoginWelcome from '@/views/card/LoginWelcome'
 //import im from '@/views/Im'

export default {
  name: 'CardBar',
  components: { LoginWelcome, PromotionCard, TipCard}
}
</script>

<style scoped>
</style>
