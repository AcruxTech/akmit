<template>
  <div id="service">
    <span id='text'>{{text}}</span>
  </div>
</template>

<script>
export default {
  props: ['text']
}
</script>

<style>
#service {
  width: 19vw;
  height: 100%;
  background: #F7F7F7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#text {
  font-family: 'OswaldMedium';
  font-style: normal;
  font-weight: 500;
  font-size: 21px;
  line-height: 31px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.02em;
}
</style>