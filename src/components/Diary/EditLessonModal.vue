<template>
  <div id='modal'>
    <div id='modal-body'>
      <div id='heading'>
        <span id='title'>{{lesson.title}}</span>
        <span id='today'>{{(new Date()).toISOString().slice(0,10)}} - {{pavilion}}, {{lesson.cabinet}}каб.</span>
        <img src='@/assets/icons/trash.svg' alt='delete' @click='deleteLesson' id='delete' />
      </div>  
      <form method='post'>
        <div class='wrapper'>
          <input type='number' name='number' v-model='lessonData.number' id='number'>
          <input type='text' name='lesson' placeholder='Урок' :disabled='inputs.lessonInput' v-model='lessonData.title' id='lesson'>
          <img src='@/assets/icons/pencil.svg' alt='change' @click='iconClick("lessonInput")'>
        </div>
        <div class='wrapper'>
          <input type='text' name='homework' :disabled='inputs.homeworkInput' v-model='lessonData.homework'>
          <img src='@/assets/icons/pencil.svg' alt='change' @click='iconClick("homeworkInput")'>
        </div>
        <div class='wrapper'>
          <input type='number' name='cabinet' :disabled='inputs.cabinetInput' v-model='lessonData.cabinet'>
          <img src='@/assets/icons/pencil.svg' alt='change' @click='iconClick("cabinetInput")'>
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
  props: {
    lesson: Object,
    dayTitle: String,
    pavilion: String
  },
  setup() {
		const toast = useToast();
		return { toast }
	},
  data() {
    return {
      inputs: {
        lessonInput: 'disabled',
        homeworkInput: 'disabled',
        cabinetInput: 'disabled',
      },
      lessonData: this.lesson
    }
  },
  methods: {
    cancel(event) {
      event.preventDefault();
      this.$emit('close');
    },
    save(event) {
      event.preventDefault();

      const payload = {
        classRtoId: parseInt(localStorage.classRtoId),
        dayTitle: this.dayTitle,
        number: this.lesson.number,
        newNumber: this.lessonData.number,
        newLesson: this.lessonData.title,
        newHomework: this.lessonData.homework,
        newCabinet: this.lessonData.cabinet
      };

      axios
        .put('http://localhost:33684/api/lesson', payload)
        .then((res) => {
          this.toast.success('Обновлено!');
          this.$emit('getDays');
          this.$emit('close');
        })
        .catch((err) => console.log(err));
    },
    deleteLesson() {
      const payload = {
        ClassRtoId: parseInt(localStorage.classRtoId),
        dayTitle: this.dayTitle,
        number: this.lesson.number
      };
      axios
        .post('http://localhost:33684/api/lesson/delete', payload)
        .then((res) => {
          this.toast.info('Удалено!');
          this.$emit('getDays');
          this.$emit('close');
        })
        .catch((err) => console.log(err));
    },
    iconClick(input) {
      if(this.inputs[input]) this.inputs[input] = null;
      else this.inputs[input] = 'disabled';
    }
  }
}
</script>

<style scoped>
#modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

#modal-body {
  width: 30vw;
  height: 35vh;
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
  height: calc(35vh - 50px);
  padding: 20px 0;
}

.wrapper {
  width: 70%;
  position: relative;
}

img {
  position: absolute;
  top: calc(50% - 10px);
  right: 10px;
  width: 20px;
}

#delete {
  top: calc(50% - 12.5px);
  right: 12.5px;
  width: 25px;
}

input{
	width: 100%;
  height: 5vh;
  padding-left: 20px;
	background: #cccccc;
	justify-content: center;
	border: none;
	outline: none;
	border-radius: 5px;
}

input:enabled {
  background: #e7e7e7;
}

input:focus {
	transition-timing-function: ease-in;
	transition: .2s;
	box-shadow: 0px 4px 8px #888;
}

#number {
  position: absolute;
  padding-left: 10px;
  top: 0;
  left: 0;
  width: 10%;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

#lesson {
  margin-left: 10%;
  width: 90%;
  border-left: 3px solid #888;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
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