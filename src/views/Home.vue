<template>
  <div id="home">
    <Header></Header>
    <Background></Background>
    <Waves></Waves>
    <!-- <Banner></Banner> -->
    <OurServices></OurServices>
    <Questions></Questions>
    <Contacts></Contacts>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Shared/Header.vue'
import Footer from '@/components/Shared/Footer.vue'
import Sidenav from '@/components/Shared/Sidenav.vue'

import Background from '@/components/Home/Background.vue'
import Waves from '@/components/Home/Waves.vue'
import Banner from '@/components/Home/Banner.vue'
import OurServices from '@/components/Home/OurServices.vue'
import Questions from '@/components/Home/Questions.vue'
import Contacts from '@/components/Home/Contacts.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Background,
    Waves,
    Banner,
    OurServices,
    Questions,
    Contacts,
    Footer,
    Sidenav
  }
}
</script>

<style scoped>
#home {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>