<template>
  <div id='profile'>
    <transition name='fade'>
      <UploadModal v-if='showUpload' @close='closeModal()'></UploadModal>
    </transition>
    <Header></Header>
    <div id='card'>
      <div id='photo' v-bind:style='{backgroundImage: `url(${url})`}'>
        <div id='change' @click='showModal'>
          <img src='@/assets/icons/pencil.svg' alt='change'>
        </div>
      </div>
      <div id='my-info'>
        <span id='my-name'>{{login}}</span>
        <span id='class-name'>{{email}}<br>{{role}}</span>
        <hr>
      </div>
      <div id='class-info'>
        <span id='heading'>Мой класс:</span>
        <Person v-for='id in ids' :key='id' :id='id'></Person>
      </div>
    </div>
  </div>
</template>

<script>
import Person from '@/components/Profile/Person.vue';
import Header from '@/components/Shared/Header.vue';
import UploadModal from '@/components/Profile/UploadModal.vue'
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
    UploadModal
  },
  data() {
    return {
      ids: [
        'xdew',
        'edx'
      ],
      persons: [
        {
          name: 'Овчинников Владимир',
          role: 'Админ'
        }
      ],
      login: '',
      email: '',
      role: '',
      url: '',
      classRtoId: 0,
      showUpload: false
    }
  },
  methods: {
    showModal() {
      this.showUpload = true;
    },
    closeModal() {
      this.showUpload = false;
    },
    getInfo() {
      var content = {
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
        })
        .catch(error => this.toast.error(`Произошла ошибка! ${error.message}`));

      if (this.classRtoId == 0) return; 

      axios.get(`http://localhost:33684/api/user/getById/1`)
        .then(response => {
          console.log(response.data);
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

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

@media (max-width: 1024px) {
  #card {
    width: 60%;
  }
}
</style>