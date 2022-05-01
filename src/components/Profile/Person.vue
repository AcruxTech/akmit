<template>
  <div id='person'>
    <div id='main-data'>
      <div id='circle-first'>
        <div id='circle-two'>
          <div id='photo'></div>
        </div>
      </div>
      <span id='name'>{{name}}</span>
    </div>
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
  height: 75px;
  border-radius: 7px;
  box-shadow: 0 5px 7px -1px rgba(51, 51, 51, 0.23);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  margin: 5px 0;
}

#main-data {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

#circle-first {
  position: relative;
  width: 100px;
  height: 100px;
  background-color: #eaeaea;
  border-radius: 50%;
  margin-left: -15px;
}

#circle-two {
  position: absolute;
  top: 12.5px;
  left: 15px;
  width: 75px;
  height: 75px;
  background-color: #dddddd;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

#photo {
  width: 55px;
  height: 55px;
  border: solid 2px #fff;
  border-radius: 50%;
  background-color: aqua;
  background-image: url('../../assets/images/default-avatar.png');
  background-size: cover;
}

#name {
  margin-left: 15px;
  font-family: 'OswaldMedium';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 32px;
  text-align: center;
  letter-spacing: 0.02em;
}

/* #person {
  width: 100%;
  height: 55px;
  border-radius: 7px;
	box-shadow: 0px 3px 12px #585858;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px;
  margin: 1vh 0;
  background: rgb(168,225,255);
  background: linear-gradient(180deg, rgba(168,225,255,1) 0%, rgba(255,255,255,1) 100%);
}

#name {
  font-family: 'OswaldMedium';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 32px;
  text-align: center;
  letter-spacing: 0.02em;
}

#role {
  border-radius: 7px;
  height: 70%;
  padding: 0 20px;
  background-color: #31b046;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: 'OpenSansRegular';
  font-style: normal;
  font-weight: 900;
  font-size: 18px;
  line-height: 29px;
  letter-spacing: 0.03em;
  color: #ffffff;
} */
</style>