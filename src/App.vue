<script setup lang="ts">
import Profil from './components/Profil.vue';


</script>

<template>
  <Profil />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');

* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style: none;
  box-sizing: border-box;
  user-select: none;
  scroll-behavior: smooth;
  outline: none;
  font-family: 'Poppins', sans-serif;
}

:root {
  --txt-xs-size: 0.75rem;
  --txt-sm-size: 0.875rem;
  --txt-base-size: 1rem;
  --txt-lg-size: 1.2rem;
  --txt-xl-size: 1.5rem;
  --txt-2xl-size: 2rem;
  --txt-xs-weight: 200;
  --txt-sm-weight: 300;
  --txt-base-weight: 400;
  --txt-lg-weight: 500;
  --txt-xl-weight: 600;
  --txt-2xl-weight: 700;
}

body {
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #fff;
  z-index: 0;
}
</style>
