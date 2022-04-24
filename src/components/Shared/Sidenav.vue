<template>
    <div id="sidenav">
      <a class="closebtn" onclick="document.getElementById('sidenav').style.width = '0'">
          &times;
      </a>
      <p>Главная</p>
      <p>Вход</p>
      <p>Регистрация</p>
    </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
p {
  margin: 0;
}

#sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  padding-top: 60px;
  transition: 0.5s;
}

#sidenav a, p {
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

#sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

#sidenav a.router-link-exact-active {
  color: #3f51b5;
}

.inner-links {
  color: #818181 !important;
}
</style>