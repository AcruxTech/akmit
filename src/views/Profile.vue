<template>
  <div id='profile'>
    <transition-group name='fade'>
      <UploadModal v-if='showUpload' @close='showUpload = false' @getInfo='getInfo()'></UploadModal>
      <CreateModal v-if='showCreate' @close='showCreate = false' @getInfo='getInfo()'></CreateModal>
    </transition-group>
    <Header></Header>
    <div id='card'>
      <div id='photo' v-bind:style='{backgroundImage: `url(${url})`}'>
        <div id='change' @click='showUpload = true'>
          <img src='@/assets/icons/pencil.svg' alt='change'>
        </div>
      </div>
      <div id='my-info'>
        <span id='my-name'>{{login}}</span>
        <span id='class-name'>{{email}}<br>{{role}} - {{comment}}</span>
        <hr>
      </div>
      <div id='class-info' v-if='classRtoId != 0'>
        <span class='heading'>Мой класс:</span>
        <Person v-for='classmate in classmates' :key='classmate.login' :login='classmate.login' :url='classmate.url' :role='classmate.role'></Person>
        <div id='buttons'>
          <button type='button' id='cancel' @click='leaveClass'>Выйти из класса</button>
        </div>
      </div>
      <div id='else-div' v-else>
        <span class='heading' id='class-heading'>Вы не состоите в классе. Создайте новый или присоединитесь к уже существуещему прямо сейчас!</span>
         <div id='buttons'>
          <button type='button' @click='showCreate = true' @close='showCreate = false'>Создать</button>
          <button type='button' @click='joinClass'>Присоединиться</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Person from '@/components/Profile/Person.vue';
import Header from '@/components/Shared/Header.vue';
import UploadModal from '@/components/Profile/UploadModal.vue'
import CreateModal from '@/components/Profile/CreateModal.vue'
import axios from 'axios'
import { useToast } from 'vue-toastification';

export default {
  setup() {
		const toast = useToast();
		return { toast }
	},
  components: {
    Person,
    Header,
    UploadModal,
    CreateModal
  },
  data() {
    return {
      classmates: [],
      login: '',
      email: '',
      role: '',
      url: '',
      comment: 'не в классе',
      classRtoId: 0,
      showUpload: false,
      showCreate: false
    }
  },
  methods: {
    getInfo() {
      let content = {
        'Body': localStorage.token
      }

      axios.post('http://localhost:33684/api/user/getByToken', content)
        .then(response => {
          this.login = response.data.login;
          localStorage.login = this.login;
          this.email = response.data.email;
          this.role = response.data.role;
          this.url = response.data.url;
          this.classRtoId = response.data.classRtoId;

          if (this.classRtoId == 0) return; 

          axios.get(`http://localhost:33684/api/user/getByClassId/${this.classRtoId}`)
            .then(response => {
              this.classmates.length = 0;
              for (let i = 0; i < response.data.length; i++) {
                let user = {
                  url: response.data[i].url,
                  login: response.data[i].login,
                  role: response.data[i].role
                }
                this.classmates.push(user);
              }
            })
            .catch(error => this.toast.error(`Произошла ошибка! ${error.message}`));
          })
        .catch(error => this.toast.error(`Произошла ошибка! ${error.message}`));
    }
  },
  created() {
    if (!localStorage.token) {
      this.toast.error('Необходима авторизация!');
      this.$router.push('/auth');
    }
    this.getInfo();
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
  background: url('../assets/images/default-avatar.png');
  background-size: cover;
  position: relative;
}

#change {
  position: relative;
  margin-top: 73%;
  margin-left: 73%;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition-duration: .3s;
}

#change:hover {
  transform: scale(1.2);
}

#my-info {
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

#my-name, .heading {
  font-family: 'OswaldMedium';
  font-style: normal;
  font-weight: 500;
  font-size: 33px;
  line-height: 53px;
  text-align: center;
  letter-spacing: 0.02em;
  color: #000;
}

.heading {
  font-size: 27px;
  line-height: 43px;
}

#class-heading {
  font-size: 20px;
  line-height: 32px;
}

hr {
  width: 100%;
}

#class-name {
  text-align: center;
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

#else-div {
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

#buttons {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
}

button {
	width: 30%;
  margin-top: 1vh;
  height: 4vh;
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

button:hover {
	background-size: 100% 100%;
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


@media (max-width: 1024px) {
  #card {
    width: 60%;
  }
}
</style>