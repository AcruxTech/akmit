<template>
  <div id='services'>
    <span id='title'>что мы предлагаем?</span>
    <div class='row'>
      <Service text='бесплатная регистрация' img='vk.svg'></Service>
      <Service text='мгновенный доступ' img='vk.svg'></Service>
      <Service text='приятный интерфейс' img='vk.svg'></Service>
    </div>
    <div class='row'>
      <Service text='просмотр и редактировнание домашнего задания' img='vk.svg'></Service>
      <Service text='сохранение расписания' img='vk.svg'></Service>
      <Service text='полный контроль учебы' img='vk.svg'></Service>
    </div>
  </div>
</template>

<script>
import Service from '@/components/Home/Service.vue'

export default {
  components: {
    Service
  }
}
</script>

<style scoped>
#services {
  width: 60%; /* */
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

@media(max-width: 768px) {
  #services {
    width: 80%;
    height: 100%;
    justify-content: center;
    padding-top: 7vh;
  }

  #title {
    font-size: 26px;
    line-height: 42px;
  }

  .row {
    width: 100%;
    height: 100%;
    flex-direction: column;
    margin-bottom: 1vw;
  }
}
</style>