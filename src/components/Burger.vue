<template>
   <div id='burger'>
    <div class='line'></div>
    <div class='line'></div>
    <div class='line'></div>
  </div>
</template>

<style scoped>
#burger {
  width: 50px;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #2C63B5;
}

.line {
  width: 25px;
  height: 4px;
  border-radius: 2px;
  margin: 2px 0;
  background-color: #fff;
}
</style>