<template>
  <div id='modal'>
    <div id='modal-body'>
      <div id='heading'>
        <span id='title'>Создание класса</span>
      </div>  
      <form id='form' method='post' enctype='multipart/formdata'>
        <input type='text' name='title' placeholder='Название класса' v-model='create.title'>
        <div id='buttons'>
          <button id='cancel' @click='cancel'>Отмена</button>
          <button @click='save'>Сохранить</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { useToast } from 'vue-toastification';

export default {
  setup() {
		const toast = useToast();
		return { toast }
	},
  data() {
    return {
      create: {
        title: '',
        token: localStorage.token,
      }
    }
  },
  methods: {
    cancel(event) {
      event.preventDefault();
      this.$emit('close');
    },
    save(e) {
      e.preventDefault();      
      axios
        .post('http://localhost:33684/api/class/create', this.create)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        }); 
    }
  }
}
</script>

<style scoped>
#modal {
  position: fixed;
  z-index: 100;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
}

#modal-body {
  position: fixed;
  top: 50%;
  left: 50%;
  margin-left: -15vw;
  margin-top: -25vh;
  width: 30vw;
  height: 50vh;
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

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: calc(50vh - 50px);
  padding: 20px 0;
}

#input-wrapper {
  position: relative;
  width: 70%;
  height: 45%;
  border: dashed 5px #000;
}

input {
	width: 70%;
  height: 5vh;
	background: #e0dede;
	justify-content: center;
	display: flex;
  padding: 2vh;
	border: none;
	outline: none;
	border-radius: 5px;
}

input:focus {
	transition-timing-function: ease-in;
	transition: .2s;
	box-shadow: 0px 4px 8px #888;
}

#text {
  position: absolute;
  bottom: 3px;
  width: 100%;
  text-align: center;
  font-family: 'OpenSansRegular';
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 30px;
  color: #999999;
}

#buttons {
  width: 70%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

button {
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

button:hover, #cancel:hover {
	background-size: 100% 100%;
}

#cancel {
  background: #c75431;
  background-position: 0% 0%;
  background-repeat: no-repeat;
  background-size: 0% 100%;
  transition: background-size .5s, color .5s;
  background-image: linear-gradient(#dc5e38, #dc5e38);
}
</style>