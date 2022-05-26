<template>
  <div id='lesson'>
    <transition name='fade'>
      <EditLessonModal v-if='showEditLesson' @close='showEditLesson = false' @getDays='getDays' :lesson='lesson' :pavilion='pavilion' :dayTitle='dayTitle'></EditLessonModal>
    </transition>
    <div id='number'>{{number}}</div>
    <div id='data' @click='showEditLesson = true'>
      <span id='title'>{{title}}<span id='cabinet'>{{cabinet}}каб.</span></span>
      <span id='homework'>{{homework}}</span>
    </div>
  </div>
</template>

<script>
import EditLessonModal from '@/components/Diary/EditLessonModal.vue'

export default {
  props: {
    number: Number,
    title: String,
    homework: String,
    cabinet: Number,
    pavilion: String,
    dayTitle: String
  },
  components: {
    EditLessonModal
  },
  data() {
    return {
      showEditLesson: false,
      lesson: {
        number: this.number,
        title: this.title,
        homework: this.homework,
        cabinet: this.cabinet
      }
    }
  },
  methods: {
    getDays() {
      this.$emit('getDays');
    }
  }
}
</script>

<style scoped>
#lesson {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 65px;
  border-bottom: solid 1px #888;
}

#number {
  width: 45px;
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'OswaldMedium';
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 35px;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #000;
  border-right: solid 1px #888;
}

#data {
  width: calc(100% - 45px);
  height: 65px;
  padding-left: 15px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
}

#title {
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'OswaldMedium';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 32px;
  text-align: center;
  letter-spacing: 0.02em;
  color: #000;
}

#homework, #cabinet {
  font-family: 'OpenSansRegular';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #999999;
}
</style>