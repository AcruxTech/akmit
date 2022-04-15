<template>
  <div id="home">
    <Header></Header>
    <Background></Background>
    <Banner></Banner>
    <OurServices></OurServices>
    <Questions></Questions>
    <Contacts></Contacts>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Background from '@/components/Background.vue'
import Banner from '@/components/Banner.vue'
import OurServices from '@/components/OurServices.vue'
import Questions from '@/components/Questions.vue'
import Contacts from '@/components/Contacts.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Background,
    Banner,
    OurServices,
    Questions,
    Contacts,
    Footer
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