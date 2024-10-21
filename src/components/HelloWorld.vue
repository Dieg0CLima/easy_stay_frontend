<template>
  <div class="hotel-reservation-container">
    <div class="header">
      <h1 class="title nes-text is-primary">Easy Stay</h1>
    </div>
    
    <div class="content">
      <p class="nes-balloon">Hello World! Bem-vindo ao sistema de reservas do Easy Stay.<br> Ainda estamos trabalhando nisso!  <i class="nes-icon trophy is-medium"></i></p>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.hotel-reservation-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: 'Press Start 2P', cursive;
  background-color: #f3f3f3;
  height: 100vh;
  background: url('/src/assets/helloWorld.gif') no-repeat center center fixed;
  background-size: cover;
}

.header {
  margin-bottom: 30px;
}

.title {
  font-size: 2rem;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.nes-balloon {
  margin-bottom: 20px;
  text-align: center;
}

</style>
