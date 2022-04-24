<template>
  <div id='answer' :style="style">
    <p>{{answer}}</p>
  </div>
</template>

<script>
export default {
  props: ['show', 'answer'],
  computed: {
    style() {
      return `height: ${this.show ? this.$el.scrollHeight : 0}px`; 
    }
  }
}
</script>

<style scoped>
#answer {
  overflow: hidden;
  transition: height .4s ease-in-out;
}
</style>