<template>
  <div id='contacts'>
    <span id='title'>контакты</span>
    <div id='contacts-div'>
      <div class='contact'>
        <img src='@/assets/icons/vk.svg' alt='vk'>
        <span class='soc-net'>вконтакте:</span>
        <span class='data'>vk.com/akmit</span>
      </div>
      <div class='contact'>
        <img src='@/assets/icons/telegram.svg' alt='telegram'>
        <span class='soc-net'>telegram:</span>
        <span class='data'>t.me/akmit</span>
      </div>
      <div class='contact'>
        <img src='@/assets/icons/email.svg' alt='email'>
        <span class='soc-net'>email:</span>
        <span class='data'>admin@akmit.ru</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
#contacts {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 60%; /**/ 
}

#contacts-div {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%; /* */
}

.contact {
  width: 19vw;
  height: 28vh;
  background-color: #F7F7F7;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  padding-bottom: 2vh;
}

.soc-net {
  font-family: 'OswaldMedium';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  text-align: center;
  text-transform: uppercase;
  color: #999999;
  margin: 1vh 0;
}

.data {
  font-family: 'OswaldMedium';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  text-align: center;
  color: #000000;
  margin: 1vh 0;
}

@media (max-width: 768px) {
  #title {
    font-size: 26px;
    line-height: 42px;
  }

  #contacts {
    padding-top: 7vh;
    width: 80%; 
  }

  #contacts-div {
    flex-direction: column;
  }

  .contact {
    width: 100%;
    height: 100%;
    flex-direction: row;
    justify-content: flex-start;
    margin: 10px 0;
    padding: 10px;
  }

  img {
    width: 35px;
    margin: 0 15px;
  }

  img[alt='email'] {
    width: 30px;
  }

  .soc-net {
    display: none;
  }
}
</style>