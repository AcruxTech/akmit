<template>
  <div id='modal'>
    <div id='modal-body'>
      <div id='heading'>
        <span id='title'>Изменение фотографии профиля</span>
      </div>  
      <form method='post' enctype='multipart/form-data' @change='change'>
        <div id='input-wrapper'>
          <div id='upload-image'></div>
          <span id='text'>{{text}}</span>
          <input type='file' name='file'>
        </div>
        <div id='buttons'>
          <button id='cancel' @click='cancel'>Отмена</button>
          <button @click='save'>Сохранить</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Day from '@/components/Diary/Day.vue'

export default {
  components: { 
    Day 
  },
  data() {
    return {
      text: 'Выберите файл'
    }
  },
  methods: {
    cancel(event) {
      event.preventDefault();
      this.$emit('close');
    },
    save(event) {
      event.preventDefault();
    },
    change(e) {
      this.text = `Файл ${e.target.files[0].name} загружен!`;
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
  margin-top: -20vh;
  width: 30vw;
  height: 40vh;
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
  height: calc(40vh - 50px);
  padding: 20px 0;
}

#input-wrapper {
  position: relative;
  width: 70%;
  height: 60%;
  border: dashed 5px #000;
}

input {
  width: 100%;
  height: 100%;
  outline: none;
  opacity: 0;
}

#upload-image {
  position: absolute;
  left: calc(50% - 40px);
  top: 40px;
  width: 80px;
  height: 80px; 
  background-color: #fff;
  background-image: url('../../assets/icons/upload.svg');
  background-size: cover;
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