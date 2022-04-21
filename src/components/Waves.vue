<template>
  <div id='waves'>
    <div class="wave"></div>
    <div class="wave"></div>
    <div class="wave"></div>
  </div>
</template>


<style>
#waves {
  margin-top: -120px;
  height: 120px; 
  width: 100%;
  position: relative;
  bottom: 0;
  left: 0;
  right: 0;
  overflow-x: hidden;
}

.wave {
  background: url('../assets/images/waves/wave.svg');
  position: absolute;
  width: 200%;
  height: 100%;
  animation: wave 5s -3s linear infinite;
  opacity: 0.8;
}

.wave:nth-of-type(2) {
  bottom: 0;
  animation: wave 7s -2s linear infinite;
  opacity: 0.5;
}

.wave:nth-of-type(3) {
  bottom: 0;
  animation: wave 10s -1s linear infinite;
  opacity: 0.5;
}

@keyframes wave {
  0% {transform: translateX(0);}
  50% {transform: translateX(-25%);}
  100% {transform: translateX(-50%);}
}

</style>