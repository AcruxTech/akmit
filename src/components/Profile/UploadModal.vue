<template>
  <div id='modal'>
    <div id='modal-body'>
      <div id='heading'>
        <span id='title'>Изменение профиля</span>
      </div>  
      <form id='form' method='put' enctype='multipart/formdata'>
        <input class='inputs' type='login' name='login' placeholder='Новый логин (необязательно)' v-model='update.newLogin'>
        <input class='inputs' type='email' name='email' placeholder='Новая почта (необязательно)' v-model='update.newEmail'>
        <div id='input-wrapper'>
          <div id='upload-image'></div>
          <span id='text'>{{text}}</span>
          <input type='file' name='file' accept='.jpg,.png' @change='change'>
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
import axios from 'axios'
import { useToast } from 'vue-toastification';

export default {
  setup() {
		const toast = useToast();
		return { toast }
	},
  data() {
    return {
      text: 'Выберите файл',
      isChangedPic: false,
      update: {
        newLogin: '',
        newEmail: '',
        newUrl: '',
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

      //if ((!localStorage.tokenS3 && !localStorage.tokenS3_Expire) || new Date().getTime() > localStorage.tokenS3_Expire) {
      if (this.isChangedPic) {
        this.isChangedPic = false;
        axios
          .get(`http://localhost:33684/api/user/getTokenS3`)
          .then((res) => {
            localStorage.tokenS3 = res.data[2].Value;
            localStorage.tokenS3_Expire = new Date().getTime() + 1000 * 60 * 60 * 24;
            this.changePic();
          })
          .catch((err) => {
            console.log(err);
          });
      }
      else {
        this.changeData();
      }
    },
    change(event) {
      this.text = `Файл ${event.target.files[0].name} загружен!`;
      this.isChangedPic = true;
    },
    changePic() {
      const form = document.querySelector('form');
      const formData = new FormData(form);
      const name = formData.get('file').name;             // with extension
      const extension = name.substring(name.length - 3);

      axios
        .put(`https://api.selcdn.ru/v1/SEL_209703/akmit/${localStorage.login + '.' + extension}`, formData.get('file'), {
          headers: {
            'Content-Type': `image/${extension}`,
            'X-Auth-Token': localStorage.tokenS3,
          },
        })
        .then((res) => {
          this.update.newUrl = `https://api.selcdn.ru/v1/SEL_209703/akmit/${localStorage.login}.${extension}`;
          console.log(this.update);
          axios
            .put('http://localhost:33684/api/user/change', this.update)
            .then((res) => {
              this.toast.success('Обновление прошло успешно!');
              this.$emit('getInfo');
              this.$emit('close');
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => {
          console.log(err);
        });
    },
    changeData() {
      axios
        .put('http://localhost:33684/api/user/change', this.update)
        .then((res) => {
          this.toast.success('Обновление прошло успешно!');
          this.$emit('getInfo');
          this.$emit('close');
        })
        .catch((err) => console.log(err));
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

.inputs {
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

.inputs:focus {
	transition-timing-function: ease-in;
	transition: .2s;
	box-shadow: 0px 4px 8px #888;
}

input[type='file'] {
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