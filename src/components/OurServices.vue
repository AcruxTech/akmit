<template>
  <div id='services'>
    <span id='title'>что мы предлагаем?</span>
    <div class='row'>
      <Service text='бесплатная регистрация'></Service>
      <Service text='быстрая работа сайта'></Service>
      <Service text='приятный интерфейс'></Service>
    </div>
    <div class='row'>
      <Service text='просмотр и редактировнание домашнего задания'></Service>
      <Service text='сохранение расписания'></Service>
      <Service text='akmit akmit akmit'></Service>
    </div>
  </div>
</template>

<script>
import Service from '@/components/Service.vue'

export default {
  components: {
    Service
  }
}
</script>

<style scoped>
#services {
  width: 60vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10vh;
}

#title {
  font-family: 'OswaldMedium';
  font-style: normal;
  font-weight: 500;
  font-size: 33px;
  line-height: 53px;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #000;
  padding-bottom: 2vh;
}

.row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 40%;
  width: 60vw;
  margin-bottom: 1.5vw;
}
</style>