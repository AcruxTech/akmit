<template>
  <div id='auth'>
    <div id='wrap'>  	
      <input type='checkbox' id='chk' aria-hidden='true'>
      <div class='signup'>
        <form>
          <label for='chk' aria-hidden='true'>Регистрация</label>
          <input type='text' name='txt' placeholder='Придумайте логин' required=''>
          <input type='email' name='email' placeholder='Введите ваш email' required=''>
          <input type='password' name='pswd' placeholder='Придумайте пароль' required=''>
          <button>Зарегистрироваться</button>
        </form>
      </div>
      <div class='login'>
        <form>
          <label for='chk' aria-hidden='true'>Вход</label>
          <input type='email' name='email' placeholder='Ваш логин/email' required=''>
          <input type='password' name='pswd' placeholder='Ваш пароль' required=''>
          <button>Войти</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
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
  height: 60vh;
	background: #eee;
	border-radius: 60% / 10%;
	transform: translateY(-180px);
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
	box-shadow: 0px 4px 8px #444;
}

@media (max-width: 768px) {
	#wrap{
		width: 80vw;
	}
}
</style>