<template>
  <div id='question'>
    <div id='title-div'>
      <div id='arrow' v-bind:class='{rotate: isClick}'>&#9658;</div>
      <div id='title' @click='isClick=!isClick'>{{question}}</div>
    </div>
    <Answer :show='isClick' :answer='answer'>
    </Answer>
    <!-- <transition name='fade'><div id='answer' v-if='isClick'>{{answer}}</div></transition> -->
  </div>
</template>

<script>
import Answer from '@/components/Answer.vue'

export default {
  props: ['question', 'answer'],
  data() {
    return {
      isClick: false
    }
  },
  components: {
    Answer
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
  /* min-height: 100vh; */
  /* transition: all .2s linear; */
  /* overflow: hidden; */
}

/* #chk{
	display: none;
}

#chk:checked ~ #answer{
  height: 100vh;
} */

/* .fade-enter-active,
.fade-leave-active {
  transition: all .5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
} */

</style>