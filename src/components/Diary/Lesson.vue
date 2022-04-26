<template>
  <div id='lesson'>
    <div id='title'>
      <div id='number'>1</div>
      <span id='title-text'>title</span>
    </div>
    <div id='homework'>
      <span id='homework-text'>homework</span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
#lesson {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 65px;
  border-bottom: solid 1px #888;
  padding: 0 30px;
}

#title {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

#number {
  padding-right: 10px;
  font-family: 'OswaldMedium';
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 35px;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #000;
}

#homework {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-family: 'OpenSansRegular';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #999999;
}
</style>