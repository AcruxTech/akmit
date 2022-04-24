<template>
  <div id='diary'>
    <Sidenav></Sidenav>
    <Header></Header>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Shared/Header.vue'
import Footer from '@/components/Shared/Footer.vue'
import Sidenav from '@/components/Shared/Sidenav.vue'

export default {
  components: {
    Header,
    Footer,
    Sidenav
  }
}
</script>

<style>
#diary {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>