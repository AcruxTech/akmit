<template>
  <div id='day'>
    <transition-group name='fade'>
      <EditDayModal v-if='showEditDay' @close='showEditDay = false' :dayTitle='day.title' @getDays='getDays'></EditDayModal>
      <AddLessonModal v-if='showAddLesson' @close='showAddLesson = false' :dayTitle='day.title'></AddLessonModal>
    </transition-group>
    <div id='heading'>
      <p @click='showEditDay = true'>{{day.title}}</p>
      <button @click='showAddLesson = true' id='addLesson'>+</button>
    </div>
    <p class='message'>{{message}}</p>
    <Lesson v-for='(lesson, index) in lessons' :key='lesson.lesson' :last='amount==index+1 ? true : false'
      :number='index+1' :title='lesson.lesson' :homework='lesson.homework' :cabinet='lesson.cabinet'></Lesson>
  </div>
</template>

<script>
import Lesson from '@/components/Diary/Lesson.vue'
import AddLessonModal from '@/components/Diary/AddLessonModal.vue'
import EditDayModal from '@/components/Diary/EditDayModal.vue'
import axios from 'axios'

export default {
  props: {
    day: Object
  },
  components: {
    Lesson,
    AddLessonModal,
    EditDayModal
  },
  data() {
    return {
      lessons: [],
      message: '',
      showAddLesson: false,
      showEditDay: false,
      amount: 0
    }
  },
  methods: {
    getDays() {
      this.$emit('getDays');
    }
  },
  created() {
    this.amount = this.lessons.length;
    
    axios
      .get(`http://localhost:33684/api/lesson/${localStorage.classRtoId}/${this.day.title}`)
      .then((res) => {
        if (res.status == 204) { 
          this.message = 'В этот день уроков нет';
          return;
        }
        for (let i = 0; i < res.data.length; i++) {
          this.lessons.push(res.data[i]);
        }
      })
      .catch((err) => console.log(err));
  }
}
</script>

<style scoped>
#day {
  overflow: hidden;
  min-width: 250px;
  width: 28%;
  margin: 0 1vw;
  background-color: #fff;
  border-radius: 7px;
	box-shadow: 0px 3px 12px #585858;
  margin-top: 5vh;
}

#heading {
  position: relative;
  background: linear-gradient(85deg, #6F6CFF 5%, 
    rgba(159, 114, 255, 0.5) 100%, 
    rgba(5, 0, 255, 0.114583) 100%, 
    #0500FF 100%);
  height: 60px;
  border-radius: 7px 7px 0px 0px;
  background-color: #b4b4b4;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'OswaldMedium';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 38px;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #fff;
}

button {
  position: absolute;
  top: 0;
  right: 0;
	width: 45px;
  height: 45px;
	color: #fff;
	background: #2C63B5;
  padding-left: 15px;
  padding-bottom: 15px;
	font-size: 40px;
	font-weight: bold;
	outline: none;
	border: none;
  border-bottom-left-radius: 100%;
	transition: .2s ease-in;
	cursor: pointer;

	background-color: #316dc7;
}

.message {
  margin: 10px 0;
  text-align: center;
  font-family: 'OpenSansRegular';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #999999;
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
  #day {
    width: 100%;
  }
}
</style>