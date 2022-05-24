<template>
  <div id='modal'>
    <div id='modal-body'>
      <div id='heading'>
        <span id='title'>Изменить день</span>
        <img src='@/assets/icons/trash.svg' alt='delete' @click='deleteDay' />
      </div>  
      <form method='post'>
        <input type='text' name='newTitle' placeholder='Новое название' v-model='payload.newTitle'>
        <input type='text' name='newPavilion' placeholder='Новый корпус' v-model='payload.newPavilion'>
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
  props: {
    dayTitle: String
  },
  setup() {
		const toast = useToast();
		return { toast }
	},
  data() {
    return {
      payload: {
        classRtoId: parseInt(localStorage.classRtoId),
        dayTitle: this.dayTitle,
        newTitle: '',
        newPavilion: ''
      }
    }
  },
  methods: {
    cancel(event) {
      event.preventDefault();
      this.$emit('close');
    },
    save(event) {
      event.preventDefault();
      axios
        .put(`http://localhost:33684/api/day/${localStorage.classRtoId}/${this.dayTitle}`, this.payload)
        .then((res) => {
          this.toast.success('Обновление прошло успешно!');
          this.$emit('getDays');
          this.$emit('close');
        })
        .catch((err) => console.log(err));
    },
    deleteDay() {
      const payload = {
        classRtoId: parseInt(localStorage.classRtoId),
        title: this.dayTitle
      }

      axios
        .post('http://localhost:33684/api/day/delete', payload)
        .then((res) => {
          this.toast.success('Удаление прошло успешно!');
          this.$emit('getDays');
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
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

#modal-body {
  width: 30vw;
  height: 30vh;
  background-color: #fff;
  border-radius: 12px;
	box-shadow: 0px 3px 12px #585858;
}

#heading {
  position: relative;
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
  height: calc(30vh - 50px);
  padding: 20px 0;
}

img {
  position: absolute;
  top: calc(50% - 12.5px);
  right: 12.5px;
  width: 25px;
}

input{
	width: 70%;
  height: 5vh;
  padding-left: 20px;
	background: #e7e7e7;
	justify-content: center;
	border: none;
	outline: none;
	border-radius: 5px;
}

input:focus {
	transition-timing-function: ease-in;
	transition: .2s;
	box-shadow: 0px 4px 8px #888;
}

#buttons {
  width: 70%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

button {
	width: 35%;
  height: 4.5vh;
	justify-content: center;
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

@media (max-width: 768px) {
  #modal-body {
    width: 80%;
  }

  #heading {
    height: 65px;
    flex-direction: column;
  }

  form {
    height: calc(30vh - 65px);
  }

  button {
    width: 45%;
  }

  #today {
    font-size: 15px;
    line-height: 20px;
  }
}
</style>