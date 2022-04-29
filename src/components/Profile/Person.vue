<template>
  <div id='person'>
    <span id='name'>{{name}}</span>
    <span id='role'>{{role}}</span>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    role: String
  }
}
</script>

<style scoped>
#person {
  width: 100%;
  height: 50px;
  border-radius: 7px;
	box-shadow: 0px 3px 12px #585858;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 25px;
  background: rgb(132,253,255);
  background: linear-gradient(0deg, rgba(132,253,255,1) 0%, rgba(189,254,255,1) 27%, rgba(255,255,255,1) 100%);
}

#person span {
  font-family: 'OswaldMedium';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 32px;
  text-align: center;
  letter-spacing: 0.02em;
}

#role {
  border-top-right-radius: 7px;
  border-bottom-right-radius: 7px;
  height: 100%;
  padding: 0 20px;
  background-color: rgb(0, 167, 11);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>