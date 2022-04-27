<template>
  <div class='burger' v-bind:class='{active: show}'>
    <div class='line' id='one'></div>
    <div class='line' id='two'></div>
    <div class='line' id='three'></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false
    }
  },
  props: {
    show: Boolean
  }
}
</script>

<style scoped>
.burger {
  width: 50px;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #3b7cde;
  padding: 8px 0;
  cursor: pointer;
}

.line{
  width: 30px;
  height: 5px;
  background: rgb(255, 255, 255);
  display: block;
  transition: .3s;
  border-radius: 5px;
}

#one {
  transition: top 300ms 300ms, transform 300ms cubic-bezier(0.23, 1, 0.32, 1);
}

#three {
  transition: bottom 300ms 300ms, transform 300ms cubic-bezier(0.23, 1, 0.32, 1);
}

.burger.active #one{
  position: absolute;
  width: 33px;
  transform: rotate(45deg);
  transition: top 300ms, transform 300ms 300ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
.burger.active #three{
  position: absolute;
  width: 33px;
  transform: rotate(-45deg);
  transition: bottom 300ms, transform 300ms 300ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
.burger.active #two{
  display: none;
}

.burger.active {
  /* background-color: #285aa5; */
  justify-content: center;
  transition: .3s;
}
</style>

