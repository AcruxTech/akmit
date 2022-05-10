<template>
  <div id='not-found'>
    <!-- https://www.figma.com/file/Dvk62icvKTJu43vSpSO6uL/Untitled -->
    <div id='nav'>
      <span class='link'>Главная страница</span>
      <span class='link' id='black'>></span>
      <span class='link'>Страница не найдена</span>
    </div>
    <div id='error'>
      <img src='@/assets/images/not-found.png'>
      <span id='message'>Такая страница не существует</span>
      <span id='error-code'>404</span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#not-found {
  width: 100%;
  height: 100vh;
  background-color: #375FED;
}

#nav {
  margin-left: 10%;
  height: 150px;
  width: 20%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.link {
  font-family: 'OswaldRegular';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 18px;
  letter-spacing: 0.05em;
  color: #fff;
}

#black {
  color: #000;
  font-size: 25px;
  line-height: 18px;
}

#error {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

#message {
  font-family: 'OswaldRegular';
  font-style: normal;
  font-size: 18px;
  line-height: 18px;
  letter-spacing: 0.05em;
  color: #fff;
}

#error-code {
  font-family: 'SyneRegular';
  font-style: normal;
  font-weight: 400;
  font-size: 500px;
  line-height: 400px;
  letter-spacing: 0.1em;
  color: #fff;
}

img {
  position: absolute;
  top: 50%;
  left: calc(50% - 55px);
}
</style>