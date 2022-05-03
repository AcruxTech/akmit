<template>
  <div id='auth'>
		<div id='back' @click='$router.go(-1)'>
			<span id='text'>&#8617; Назад</span>
		</div>
    <div id='wrap'>  	
      <input type='checkbox' id='chk' aria-hidden='true'>
      <div class='signup'>
        <form>
          <label for='chk' aria-hidden='true'>Регистрация</label>
          <input type='text' name='txt' placeholder='Придумайте логин' required='' v-model='register.login'>
          <input type='email' name='email' placeholder='Введите ваш email' required='' v-model='register.email'>
          <input type='password' name='pswd' placeholder='Придумайте пароль' required='' autocomplete='' v-model='register.pass'>
          <button @click='reg'>Зарегистрироваться</button>
        </form>
      </div>
      <div class='login'>
        <form>
          <label for='chk' aria-hidden='true'>Вход</label>
          <input type='email' name='email' placeholder='Ваш логин/email' required='' v-model='login.identity'>
          <input type='password' name='pswd' placeholder='Ваш пароль' required='' autocomplete='' v-model='login.pass'>
          <button @click='auth'>Войти</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { useToast } from "vue-toastification";

export default {
	setup() {
		const toast = useToast();
		return { toast }
	},
	data() {
		return {
			register: {
				login: '',
				email: '',
				pass: ''
			},
			login: {
				identity: '',
				pass: ''
			}
		}
	},
	methods: {
		reg(event) {
			event.preventDefault();
			if (this.isEmpty(this.register) == false) return;
			axios.post('http://localhost:33684/api/user/register', this.register)
				.then(response => {
					localStorage.token = response.data;
					this.toast.success('Регистрация прошла успешно!');
				})
				.catch(error => this.toast.error(`Произошла ошибка! ${error.message}`));
		},
		auth() {
			event.preventDefault();
			if (this.isEmpty(this.login) == false) return;
			axios.post('http://localhost:33684/api/user/auth', this.login)
				.then(response => {
					localStorage.token = response.data;
					this.toast.success('Авторизация прошла успешно!');
				})
				.catch(error => this.toast.error(`Произошла ошибка! ${error.message}`));
		},
		isEmpty(obj) {
			for(var item in obj) {
				if (obj[item] == '') {
					this.toast.error('Заполните все поля!');
					 return false;
				}
			}
		}
	},
	created() {
		
	}
}
</script>

<style scoped>
#back {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
}

#text {
	font-family: 'OpenSansRegular';
  font-style: normal;
  font-weight: 900;
  font-size: 25px;
  line-height: 36px;
  background: linear-gradient(85deg, #6F6CFF 5%, 
    rgba(159, 114, 255, 0.5) 100%, 
    rgba(5, 0, 255, 0.114583) 100%, 
    #0500FF 100%);
	background-clip: text;
  -webkit-text-fill-color: transparent;
  color: #888;
	padding-left: 50px;
}

#auth{
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
  width: 100vw;
}

#wrap{
  width: 23vw;
	height: 60vh;
	background: #fff;
	overflow: hidden;
	border-radius: 10px;
	box-shadow: 0px 3px 15px #585858;
}

#chk{
	display: none;
}

.signup{
	position: relative;
	width: 100%;
	height: 100%;
}

label{
	color: #000;
	font-size: 2.3em;
	justify-content: center;
	display: flex;
	margin: 10%;
	font-weight: bold;
	cursor: pointer;
	transition: .5s ease-in-out;
}

input{
	width: 70%;
  height: 5vh;
	background: #e0dede;
	justify-content: center;
	display: flex;
  margin: 2vh auto;
  padding: 2vh;
	border: none;
	outline: none;
	border-radius: 5px;
}

button{
	width: 60%;
  height: 4.5vh;
  margin: 2vh auto;
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

.login{
  height: 70vh;
	background: #eee;
	border-radius: 60% / 10%;
	transform: translateY(-170px);
	transition: .8s ease-in-out;
}

.login label{
	color: #2C63B5;
	padding-top: 20px;
	transform: scale(.6);
}

#chk:checked ~ .login{
  transform: translateY(-57vh);
}
#chk:checked ~ .login label{
	transform: scale(1);	
}
#chk:checked ~ .signup label{
	transform: scale(.6);
}

input:focus {
	transition-timing-function: ease-in;
	transition: .2s;
	box-shadow: 0px 4px 8px #888;
}

@media (min-width: 768px) and (max-width: 1025px) {
	#wrap{
		width: 50vw;
	}
}

@media (max-width: 767px) {
	#wrap{
		width: 80vw;
	}

	.login{
		transform: translateY(-130px);
	}
}

@media (max-width: 321px) {
	input {
		font-size: 0.9em;
	}

	button {
		font-size: 0.85em;
	}
}

</style>