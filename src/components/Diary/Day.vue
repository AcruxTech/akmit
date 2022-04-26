<template>
  <div id='day'>
    <div id='heading'>Понедельник</div>
    <Lesson></Lesson>
    <Lesson></Lesson>
    <Lesson></Lesson>
    <Lesson></Lesson>
    <Lesson></Lesson>
    <Lesson></Lesson>
    <Lesson></Lesson>
  </div>
</template>

<script>
import Lesson from '@/components/Diary/Lesson.vue'
export default {
  components: {
    Lesson
  }
}
</script>

<style scoped>
#day {
  width: 30%;
  background-color: #fff;
  border-radius: 7px;
	box-shadow: 0px 3px 12px #585858;
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
</style>