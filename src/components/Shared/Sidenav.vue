<template>
    <div id="sidenav" v-bind:class='{active: show}'>
      <router-link to='/'>Главная</router-link>
      <template v-if='isLogin'>
        <router-link to='/auth'>Вход</router-link>
        <router-link to='/auth'>Регистрация</router-link>
        <a href='#' v-scroll-to="'#questions'">Ответы на вопросы</a>
        <a href='#' v-scroll-to="'#contacts'">Контакты</a>
      </template>
      <template v-else>
        <router-link to='/profile'>Профиль</router-link>
        <router-link to='/diary'>Дневник</router-link>
        <a href='#'>Выйти из системы</a>
      </template>
    </div>
</template>

<script>
export default {
  props: {
    show: Boolean
  },
  data() {
    return {
      isLogin: localStorage.login ? false : true,
    }
  }
}
</script>

<style scoped>
#sidenav {
  height: 100vh;
  width: 250px;
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  padding-top: 60px;
  transition: 0.5s;
  margin-left: -250px;
}

#sidenav.active {
  margin-left: 0px;
}

#sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

#sidenav a:hover {
  color: #f1f1f1;
}
</style>