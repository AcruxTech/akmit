<template>
  <div id='day'>
    <div id='heading'>Понедельник</div>
    <Lesson v-for='(lesson, index) in lessons' :key='lesson.title' :last='amount==index+1 ? true : false'
      :number='index+1' :title='lesson.title' :homework='lesson.homework'></Lesson>
  </div>
</template>

<script>
import Lesson from '@/components/Diary/Lesson.vue'

export default {
  components: {
    Lesson
  },
  data() {
    return {
      lessons: [
        { title: '-', homework: '-' },
        { title: 'Русский язык', homework: 'Учить правила' },
        { title: 'Русский язык', homework: 'Учить правила' },
        { title: 'Алгебра', homework: '№547, 549' },
        { title: 'Физ-ра', homework: 'офп' },
        { title: 'Физ-ра', homework: 'офп' },
        { title: 'География', homework: 'Готовиться к к/р'}
      ],
      amount: 0
    }
  },
  created() {
    this.amount = this.lessons.length;
  }
}
</script>

<style scoped>
#day {
  min-width: 250px;
  width: 28%;
  margin: 0 1vw;
  background-color: #fff;
  border-radius: 7px;
	box-shadow: 0px 3px 12px #585858;
  margin-top: 5vh;
}

#heading {
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

@media(max-width: 768px) {
  #day {
    width: 100%;
  }
}
</style>