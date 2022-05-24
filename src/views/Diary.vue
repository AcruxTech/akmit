<template>
  <div id='diary'>
    <transition-group name='fade'>
      <!-- <LessonEditModal v-if='showEditLesson' @close='showEditLesson = false'></LessonEditModal> -->
      <AddDayModal v-if='showAddDay' @close='showAddDay = false' @getDays='getDays'></AddDayModal>
    </transition-group>
    <div id='background'></div>
    <button @click='showAddDay = true' id='addDay'>+</button>
    <div id='days'>
      <Day @click='showEditLesson = true' v-for='day in days' :key='day.title' :day='day' @getDays='getDays'></Day>
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
import AddDayModal from '@/components/Diary/AddDayModal.vue'
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
    LessonEditModal,
    AddDayModal
  },
  data() {
    return {
      showEditLesson: false,
      showAddDay: false,
      days: []
    }
  },
  methods: {
    getDays() {
      this.days.length = 0;
      axios
        .get(`http://localhost:33684/api/day/get_all/${localStorage.classRtoId}`)
        .then((res) => {
          if (res.status == 204) { 
            this.toast.info('Дни не добавлены');
            return;
          }
          for (let i = 0; i < res.data.length; i++) {
            this.days.push(res.data[i]);
          }
        })
        .catch((err) => console.log(err));
    }
  },
  created() {
    if (!localStorage.token) {
      this.toast.error('Необходима авторизация!');
      this.$router.push('/auth');
    }
    else {
      this.getDays();
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
  min-height: calc(100vh - 100px);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

button {
  position: fixed;
  right: 75px;
  bottom: 75px;
	width: 50px;
  height: 50px;
	color: #fff;
	background: #2C63B5;
  display: flex;
  align-items: center;
  justify-content: center;
	font-size: 40px;
	font-weight: bold;
	outline: none;
	border: none;
	border-radius: 50%;
	transition: .2s ease-in;
	cursor: pointer;

	background-color: #316dc7;
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