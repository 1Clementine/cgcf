<template>
  <div>
    <div class="box">🔔 {{ billboard.content }}</div>
    <div class="columns"><!-- bulma下的column -->
      
      <div class="column is-three-quarters"><!-- column is-three-quarters此列占四分之三 -->
        <TopicList></TopicList><!-- 帖子列表 -->
        
      </div>
      <div class="column">
        <CardBar></CardBar><!-- CardBar -->
      </div>
    </div>
  </div>
</template>

<script>
import { getBillboard } from "@/api/billboard";//可调用api/billboard.js中的getBillboard方法
import CardBar from "@/views/card/CardBar"//从card目录下导入cardbar侧边栏
import PostList from '@/views/post/Index'//同上
// import im from "@/views/Im"

export default {
  name: "Home",
  components: {CardBar, TopicList: PostList},
  data() {
    return {
      billboard: {//data赋值给billboard
        content: "",
      },
    };
  },
  created() {//创建成功的生命周期时开始调用fetchBillboard
    this.fetchBillboard();
  },
  methods: {
    async fetchBillboard() {
      getBillboard().then((value) => {//得到服务器回应的数据value
        const { data } = value;
        this.billboard = data;
      });
    },
  },
};
</script>
