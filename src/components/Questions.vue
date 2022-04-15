<template>
  <div id='questions'>
    <span id='title'>ответы на вопросы</span>
    <div id='list'>
      <Question question='как начать пользоваться нашим сайтом?' v-bind:answer='one'></Question>
      <Question question='бесплатен ли наш сервис?' v-bind:answer='two'></Question>
      <Question question='что необходимо для регистрации?' v-bind:answer='three'></Question>
      <Question question='для чего нужен наш сайт?' v-bind:answer='four'></Question>
    </div>
  </div>
</template>

<script>
import Question from '@/components/Question.vue'

export default {
  components: {
    Question
  },
  data() {
    return {
      one: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse euismod dui eu ligula maximus luctus. Aenean in purus nunc. Vestibulum sed dolor fringilla, rutrum mauris at, fringilla sem. Quisque dapibus accumsan libero pretium condimentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut tincidunt orci.',
      two: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse euismod dui eu ligula maximus luctus. Aenean in purus nunc. Vestibulum sed dolor fringilla, rutrum mauris at, fringilla sem. Quisque dapibus accumsan libero pretium condimentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut tincidunt orci.',
      three: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse euismod dui eu ligula maximus luctus. Aenean in purus nunc. Vestibulum sed dolor fringilla, rutrum mauris at, fringilla sem. Quisque dapibus accumsan libero pretium condimentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut tincidunt orci.',
      four: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse euismod dui eu ligula maximus luctus. Aenean in purus nunc. Vestibulum sed dolor fringilla, rutrum mauris at, fringilla sem. Quisque dapibus accumsan libero pretium condimentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut tincidunt orci.'
    }
  }
}
</script>

<style scoped>
#questions {
  width: 60vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
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
  margin-bottom: 2vh;
}

#list {
  width: 60vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>