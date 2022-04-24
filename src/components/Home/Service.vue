<template>
  <div id="service">
    <img :src="require(`../../assets/icons/${img}`)" alt="alt">
    <span id='text'>{{text}}</span>
  </div>
</template>

<script>
export default {
  props: ['text', 'img']
}
</script>

<style scoped>
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
  padding-top: 20px;
}

@media(max-width: 786px) {
  #service {
    flex-direction: row;
    justify-content: flex-start;
    width: 100%;
    margin: 1vh 0;
  }

  #text {
    font-size: 18px;
    line-height: 27px;
    padding: 20px 0;
  }

  img {
    width: 35px;
    margin: 0 15px;
  }
}
</style>