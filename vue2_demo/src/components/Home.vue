<template>
  <div>
    <h1>
      主页组件
    </h1>

    <div style="width: 100%; height: 300px; background: red">
      数据内容
    </div>


    <!--    使用页脚footer组件-->
    <Footer></Footer>

  </div>
</template>

<script>
    import Footer from "./Footer"; // 引入组件
    export default {
        name: "Home",
        data() {
            return {}
        },
        methods: {},
        components: {
            Footer, // 注册组件
        }
    }
</script>

<style scoped>

</style>
