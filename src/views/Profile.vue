<template>
  <div id='profile'>
    <div id='card'>
      <div id='photo'></div>
      <div id='my-info'>
        <span id='my-name'>Овчинников Владимир</span>
        <span id='class-name'>МБОУ ЦО №7, 9А</span>
        <hr>
      </div>
      <div id='class-info'>
        <span id='heading'>Мой класс:</span>
        <Person name='Овчинников Владимир' role='Админ'></Person>
      </div>
    </div>
  </div>
</template>

<script>
import Person from '@/components/Profile/Person.vue';

export default {
  components: {
    Person
  }
}
</script>

<style scoped>
#profile {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

#card {
  width: 45%;
  border-radius: 15px;
	box-shadow: 0px 3px 12px #585858;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 50px 0;
}

#photo {
  width: 175px;
  height: 175px;
  border-radius: 87.5px;
  background-color: #585858;
}

#my-info {
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

#my-name, #heading {
  font-family: 'OswaldMedium';
  font-style: normal;
  font-weight: 500;
  font-size: 33px;
  line-height: 53px;
  text-align: center;
  letter-spacing: 0.02em;
  color: #000;
}

#heading {
  font-size: 27px;
  line-height: 43px;
}

hr {
  width: 100%;
}

#class-name {
  font-family: 'OpenSansRegular';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #999999;
}

#class-info {
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
</style>