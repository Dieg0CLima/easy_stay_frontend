<template>
    <div class="background-container"> 
      <div class="nes-container is-rounded is-dark login-container">
        <h2 class="title">Login</h2>
        <form @submit.prevent="handleLogin">
          <div class="nes-field">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="email" class="nes-input" required />
          </div>
          <div class="nes-field">
            <label for="password">Senha</label>
            <input type="password" id="password" v-model="password" class="nes-input" required />
          </div>
          <button type="submit" class="nes-btn is-primary">Entrar</button>
        </form>
  
        <transition name="fade">
          <div
            v-if="successMessage"
            class="nes-balloon from-right nes-text is-success balloon-right animate__animated"
            :class="animationClass"
          >
            {{ successMessage }}
          </div>
        </transition>
        <transition name="fade">
          <div
            v-if="errorMessage"
            class="nes-balloon from-right nes-text is-error balloon-right animate__animated"
            :class="animationClass"
          >
            {{ errorMessage }}
          </div>
        </transition>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import axios from 'axios';
  import { useAuthStore } from '@/stores/auth';
  import { useRouter } from 'vue-router';  // Importa o Vue Router
  import 'animate.css';
  
  const email = ref('');
  const password = ref('');
  const errorMessage = ref('');
  const successMessage = ref('');
  const animationClass = ref('animate__backInRight');
  const authStore = useAuthStore();
  const router = useRouter();  // Use o router para redirecionamento
  
  const hideMessageAfterTimeout = (timeout = 3000) => {
    setTimeout(() => {
      animationClass.value = 'animate__backOutRight';
      successMessage.value = '';
      errorMessage.value = '';
    }, timeout);
  };
  
  const handleLogin = async () => {
    try {
      animationClass.value = 'animate__backInRight';
  
      const response = await axios.post('http://localhost:3000/api/v1/login', {
        email: email.value,
        password: password.value,
      });
  
      const token = response.data.token;
      authStore.setToken(token);
  
      successMessage.value = 'Login realizado com sucesso!';
      errorMessage.value = ''; 
  
      hideMessageAfterTimeout();
  
      setTimeout(() => {
        router.push({ name: 'HelloWorld' });
      }, 1000); 
    } catch (error) {
      animationClass.value = 'animate__backInRight';
  
      successMessage.value = '';
      if (error.response && error.response.data.error) {
        errorMessage.value = error.response.data.error;
      } else {
        errorMessage.value = 'Erro ao tentar realizar login';
      }
  
      hideMessageAfterTimeout(); 
    }
  };
  </script>
  
  <style scoped>
  /* Definindo o GIF de fundo no container maior */
  .background-container {
    width: 100vw;
    height: 100vh;
    background: url('/src/assets/background.gif') no-repeat center center fixed;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .login-container {
    max-width: 400px;
    padding: 20px;
    background-color: rgba(33, 37, 41, 0.85); /* Fundo semi-transparente */
    border-radius: 10px;
    text-align: center;
  }
  
  .title {
    font-family: 'Press Start 2P', cursive;
    color: #fff;
    margin-bottom: 20px;
  }
  
  .nes-field {
    margin-bottom: 20px;
  }
  
  button {
    width: 100%;
  }
  
  .balloon-right {
    position: fixed;
    top: 20px;
    right: 20px;
    max-width: 300px;
  }
  </style>
  