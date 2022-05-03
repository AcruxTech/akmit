<template>
  <div id='diary'>
    <transition name='fade'>
      <Modal v-if='show' @close='closeModal'></Modal>
    </transition>
    <div id='background'></div>
    <div id='days'>
      <Day @click='show = !show'></Day>
      <Day></Day>
      <Day></Day>
      <Day></Day>
      <Day></Day>
      <Day></Day>
    </div>
    <Header></Header>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Shared/Header.vue'
import Footer from '@/components/Shared/Footer.vue'
import Sidenav from '@/components/Shared/Sidenav.vue'
import Day from '@/components/Diary/Day.vue'
import Modal from '@/components/Diary/Modal.vue'

export default {
  components: {
    Header,
    Footer,
    Sidenav,
    Day,
    Modal
  },
  data() {
    return {
      show: false
    }
  },
  methods: {
    closeModal() {
      this.show = false;
    }
  }
}
</script>

<style scoped>
#background {
  height: 100px;
  width: 100%;
}

#diary {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#days {
  width: 60%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media(max-width: 768px) {
  #days {
    width: 80%;
  }
}
</style>