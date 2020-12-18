<template>
  <div>
    <h1>
      用户组件
    </h1>

    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    
    <Footer></Footer>
  </div>
</template>

<script>
    import Footer from "./Footer";
    export default {
        name: "User",
        components: {
            Footer
        }
    }
</script>

<style scoped>

</style>
