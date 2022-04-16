<template>
  <div id='banner'>
    <span id='text'>начните пользоваться нашим сайтом прямо сейчас!</span>
      <div id='register' @click='register'>
        <span id='button-text'>зарегистрироваться</span>
      </div>
  </div>
</template>

<script>
export default {
  methods: {
    register() {
      this.$router.push('/auth')
    }
  }
}
</script>

<style scoped>
a:active, /* активная/посещенная ссылка */
a:hover,  /* при наведении */
a {
  text-decoration: none;
  color: #666;
}

#banner {
  margin-top: -6vh;
  width: 60vw;
  height: 12vh;
  background: #2C63B5;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 3vw;
}

#text {
  font-family: 'OswaldMedium';
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 41px;
  letter-spacing: 0.02em;
  color: #fff;
}

#register {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  transition: .5s;
  width: 20vh;
  height: 45%;
  background-image: linear-gradient(#eaeaea, #eaeaea);
  background-position: 0% 0%;
  background-repeat: no-repeat;
  background-size: 0% 100%;
  transition: background-size .5s, color .5s;

}

#register:hover {
  background-size: 100% 100%;
  color: #fff;
}

#button-text {
  font-family: 'OswaldMedium';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #000;
}
</style>