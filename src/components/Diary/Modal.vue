<template>
  <div id='modal'>
    <div id='modal-body'>
      <div id='heading'>
        <span id='title'>Понедельник</span>
        <span id='today'>28 марта 2022 года - 71 школа, 311 кабинет</span>
      </div>  
      <form method='post'>
        <input type='text' name='lesson' required value='Литература' disabled>
        <input type='text' name='homework' required value='Учить стих' disabled>
        <div id='buttons'>
          <button id='cancel'>Отмена</button>
          <button>Сохранить</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Day from './Day.vue'

export default {
  components: { Day },
}
</script>

<style scoped>
#modal {
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
}

#modal-body {
  position: fixed;
  top: 50%;
  left: 50%;
  margin-left: -15vw;
  margin-top: -15vh;
  width: 30vw;
  height: 30vh;
  background-color: #fff;
  border-radius: 12px;
	box-shadow: 0px 3px 12px #585858;
}

#heading {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  height: 50px;
  border-bottom: solid 4px #c8c8c8;
}

#title {
  font-family: 'OswaldMedium';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 32px;
  text-align: center;
  letter-spacing: 0.02em;
  color: #000;
}

#today {
  font-family: 'OpenSansRegular';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #999999;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: calc(30vh - 50px);
  padding: 20px 0;
}

input{
	width: 70%;
  height: 5vh;
	background: #e0dede;
	justify-content: center;
	display: flex;
	border: none;
	outline: none;
	border-radius: 5px;
}

input:focus {
	transition-timing-function: ease-in;
	transition: .2s;
	box-shadow: 0px 4px 8px #444;
}

#buttons {
  width: 70%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

button{
	width: 30%;
  height: 4.5vh;
	justify-content: center;
	display: block;
	color: #fff;
	background: #2C63B5;
	font-size: 1em;
	font-weight: bold;
	outline: none;
	border: none;
	border-radius: 5px;
	transition: .2s ease-in;
	cursor: pointer;

	background-image: linear-gradient(#316dc7, #316dc7);
  background-position: 0% 0%;
  background-repeat: no-repeat;
  background-size: 0% 100%;
  transition: background-size .5s, color .5s;
}

button:hover{
	background-size: 100% 100%;
}

#cancel {
  background: #c75431;
  background-image: linear-gradient(#5ba9bd, #5b96bd);
}
</style>