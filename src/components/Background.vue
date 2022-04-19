<template>
  <div id='background'>
    <span id='title'>электронный дневник современного школьника</span>
    <span id='functions'>мгновенный доступ к расписанию уроков и домашнему заданию</span>
  </div>
</template>

<style scoped>
#background {
  width: 100%; /**/
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 30%;
  background: linear-gradient(85deg, #6F6CFF 5%, 
    rgba(159, 114, 255, 0.5) 100%, 
    rgba(5, 0, 255, 0.114583) 100%, 
    #0500FF 100%);
}

#title {
  font-family: 'OswaldMedium';
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  line-height: 71px;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #FFFFFF;
}

#functions {
  font-family: 'OswaldRegular';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  text-transform: uppercase;
  color: #FFFFFF;
}
</style>