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
      <span class='message'>Такая страница не существует</span>
      <span id='error-code'>404</span>
    </div>
    <div id='this-pages'>
      <span class='message'>Проверьте следующие страницы</span>
    </div>
    <div id='bottom-nav'>
      <div class='column'>
        <span class='heading'>Раз</span>
        <span class='page'>Раз</span>
        <span class='page'>Два</span>
        <span class='page'>Три</span>
        <span class='page'>Четыре</span>
      </div>
      <div class='column'>
        <span class='heading'>Два</span>
        <span class='page'>Раз</span>
        <span class='page'>Два</span>
        <span class='page'>Три</span>
        <span class='page'>Четыре</span>
      </div>
      <div class='column'>
        <span class='heading'>Три</span>
        <span class='page'>Раз</span>
        <span class='page'>Два</span>
        <span class='page'>Три</span>
        <span class='page'>Четыре</span>
      </div>
      <div class='column'>
        <span class='heading'>Четыре</span>
        <span class='page'>Раз</span>
        <span class='page'>Два</span>
        <span class='page'>Три</span>
        <span class='page'>Четыре</span>
      </div>
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

.message {
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
  margin: auto;
  bottom: 0;
  top: 85px;
  left: 0;
  right: 45px;
}

#this-pages {
  margin-top: 75px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

#bottom-nav {
  margin-top: 100px;
  padding: 0 35%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.column {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
}

.heading {
  font-family: 'OswaldRegular';
  font-style: normal;
  text-transform: uppercase;
  font-size: 18px;
  line-height: 18px;
  letter-spacing: 0.1em;
  color: #ffffff9c;
  margin-bottom: 25px;
}

.page {
  margin: 3px 0;
  font-family: 'OpenSansRegular';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 18px;
  letter-spacing: 0.1em;
  color: #ffffff;
}
</style>