<template>
  <div id='question'>
    <div id='title-div' @click='isClick=!isClick'>
      <div id='arrow' v-bind:class='{rotate: isClick}'>&#9658;</div>
      <span id='title'>{{question}}</span>
    </div>
    <span id='answer' v-if='isClick'>{{answer}}</span>
  </div>
</template>

<script>
export default {
  props: ['question', 'answer'],
  data() {
    return {
      isClick: false
    }
  }
}
</script>

<style scoped>
#question {
  display: flex;
  flex-direction: column;
  margin-bottom: 4vh;
}

#title {
  font-family: 'OswaldMedium';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  text-transform: uppercase;
  color: #2C63B5;
}

#title-div {
  display: flex;
  flex-direction: row;
  align-items: center;
}

#arrow {
  font-size: 24px;
  color: #2C63B5;
  margin-right: 10px;
  transition: transform .3s ease-in-out;
}

.rotate {
  transform: rotate(90deg);
}

#answer {
  font-family: 'OpenSansRegular';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #999999;
}
</style>