<template>
  <div id='diary'>
    <transition name='fade'>
      <Modal v-if='show' @close='closeModal'></Modal>
    </transition>
    <div id='background'></div>
    <div id='days'>
      <div class='row'>
        <Day @click='show = !show'></Day>
        <Day></Day>
        <Day></Day>
      </div>
      <div class='row'>
        <Day></Day>
        <Day></Day>
        <Day></Day>
      </div>
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

#background {
  height: 100px;
  width: 100%;
  /* background-color: #ececec; */
}

#diary {
  /* margin-top: 100px; */
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.row {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

#days {
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

@media(max-width: 768px) {
  .row {
    flex-direction: column;
  }

  #days {
    width: 80%;
  }
}
</style>