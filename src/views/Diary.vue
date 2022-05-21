<template>
  <div id='diary'>
    <transition name='fade'>
      <LessonEditModal v-if='show' @close='closeModal'></LessonEditModal>
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
import LessonEditModal from '@/components/Diary/LessonEditModal.vue'
import axios from 'axios'
import { useToast } from 'vue-toastification';

export default {
  setup() {
		const toast = useToast();
		return { toast }
	},
  components: {
    Header,
    Footer,
    Sidenav,
    Day,
    LessonEditModal
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
  },
  created() {
    if (!localStorage.token) {
      this.toast.error('Необходима авторизация!');
      this.$router.push('/auth');
    }

    let payload =  {
      body: localStorage.token
    }

    axios
      .post(`http://localhost:33684/api/day/get_all`, payload)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
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