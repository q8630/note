<template>
  <div>
    
    <router-view/>
  </div>
</template>

<script>
export default {
  // name: 'App'
}
</script>

//  scoped 作用域 避免组件样式干扰
<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
