<template>
  <div id='header'>
    <img src='@/assets/logo.svg' alt='logo'/>
    <Burger></Burger>
  </div>
</template>

<style scoped>
#header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100px;
  overflow: hidden;
  -webkit-backdrop-filter: blur(7px);
  backdrop-filter: blur(7px);
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20vw;
}

img {
  width: 70px;
}
</style>

<script>
import Burger from '@/components/Burger.vue'

export default {
  components: { Burger },
  
}
</script>>