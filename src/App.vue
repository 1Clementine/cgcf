<template>
  <div>
    <div class="mb-5">
      <!-- //向APP页面添加组件步骤3：放页面里5 -->
      <Header></Header>
    </div>

    <div class="container context">
        <router-view :key="this.$route.fullPath"></router-view>
    </div>

    <div>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Layout/Header";//向APP页面添加组件步骤1：引入
import Footer from "@/components/Layout/Footer";

export default {
  name: "App",
  components: { Header, Footer },//向APP页面添加组件步骤2：声明
};
</script>

<style scoped>
.container {
  min-height: 500px;
}
</style>
