<script setup lang="ts">
import Profile from './components/Profile.vue';
import DiscordBox from './components/DiscordBox.vue';
import ServerBox from './components/ServerBox.vue';
import SocialIcon from './components/SocialIcon.vue';

const isEnter = ref<boolean>(false);
const video = ref<HTMLVideoElement | null>(null);

const quotes = [
  'I\'ll leave the rest to you ...',
  'A man dies when his memory is forgotten',
  'Can we make another promise ?'
];

function enterClick(): void {
  isEnter.value = true;
  if (video.value) {
    video.value.play().catch(err => console.error('Erreur de lecture vidéo:', err));
  }
}

const view = await $fetch<{ view: number}>("https://api.r4iden.online/view").then(res => res.view);
</script>

<template>
	<button @click="enterClick" v-if="!isEnter" id="enterClick">🥥 • Click to enter . . .</button>
	<video src="/video/background.mp4" id="background" loop playsinline ref="video"></video>
	<div class="content" v-show="isEnter">
		<Profile :quotes="quotes" v-if="isEnter" />
		<DiscordBox />
		<ServerBox />
		<div class="view">
			<div>
				<IconsView />
				<p>{{ view }}</p>
			</div>
		</div>
	</div>
	<SocialIcon  v-if="isEnter" />
</template>

<style scoped>
#background {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  filter: brightness(0.5);
  z-index: -10;
}

#enterClick {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 10;
  background-color: #000;
  border: none;
  font-size: var(--txt-2xl-size);
  font-weight: var(--txt-lg-weight);
}

.content {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.content .profil {
  grid-column: 1 / -1;
  display: flex;
  align-items: center;
}

.content .profil img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 20px;
  border: 2px solid rgba(255, 255, 255, 0.50);
  opacity: 0;
  animation: slideInTop 1s forwards;
}

.content .profil div h1 {
  display: flex;
  align-items: center;
  gap: 10px;
  opacity: 0;
  animation: slideInBottom 1s forwards;
}

.content .profil div h3 {
  min-height: 29px;
  opacity: 0;
  animation: slideInLeft 1s forwards;
}

.content .profil div p {
  opacity: 0;
  animation: slideInLeft 1s forwards;
}

@keyframes slideInTop {
  from {
    opacity: 0;
    transform: translateY(-100px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInBottom {
  from {
    opacity: 0;
    transform: translateY(100px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(100px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(-100px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Appliquer l'animation aux boxes */
.content .box {
  opacity: 0;
  /* état initial */
  animation: slideInLeft 1s forwards;
}

.content .box:nth-of-type(2n) {
  animation: slideInRight 1s forwards;
}

.content .box {
  width: 100%;
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 10px;
  padding: 10px;
  gap: 5px;
  transition: 0.3s ease;
}

.content .box:hover {
  background-color: rgba(255, 255, 255, 0.10);
  border: 1px solid rgba(255, 255, 255, 0.6);
}

.content .box #ppDisc,
.content .box #ppServ {
  display: flex;
  width: 80px;
  height: 80px;
  border-radius: 10%;
  object-fit: cover;
  margin-right: 10px;
}

.content .box #ppDisc {
  border-radius: 50%;
}

.content .box div {
  position: relative;
}

.content .box #presence {
  position: absolute;
  right: 10px;
  bottom: 10px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  backdrop-filter: blur(10px);
}

.content .box h2 {
  font-size: var(--txt-lg-size);
  font-weight: var(--txt-lg-weight);
}

.content .box div div {
  display: flex;
  align-items: center;
  gap: 5px;
}

.content .box div div img {
  width: 20px;
  height: 20px;
}

.content .box div div p {
  font-size: var(--txt-sm-size);
}

.content .box a {
  border: none;
  background-color: #1a6334;
  font-size: 0.7rem;
  padding: 2px 6px 2px 6px;
  border-radius: 8px;
  cursor: pointer;
}

.content .view {
  grid-column: 1 / -1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-left: 10px;
}

.content .view p {
  font-weight: var(--txt-sm-weight);
  font-size: var(--txt-sm-size);
}

.content .view div {
  display: flex;
  align-items: center;
  gap: 5px;
}

#IconsPhone {
  display: none;
}

#IconsDesktop {
  display: block;
}

@media screen and (max-width: 850px) {
  .content {
    display: flex;
    flex-direction: column;
  }

  .content .profil {
    flex-direction: column;
    text-align: center;
  }

  .content .profil div h3 {
    display: none;
  }

  .content .box {
    width: max-content;
    min-width: 350px;
    margin: 0 auto;
  }

  #IconsDesktop {
    display: none;
  }

  #IconsPhone {
    display: flex;
  }
}
</style>
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
  color: #fff;
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

@media screen and (max-width: 1024px) {
  :root {
    --txt-xs-size: 0.65rem;
    --txt-sm-size: 0.8rem;
    --txt-base-size: 0.9rem;
    --txt-lg-size: 1.1rem;
    --txt-xl-size: 1.3rem;
    --txt-2xl-size: 1.75rem;
  }
}

@media screen and (max-width: 768px) {
  :root {
    --txt-xs-size: 0.6rem;
    --txt-sm-size: 0.75rem;
    --txt-base-size: 0.85rem;
    --txt-lg-size: 1rem;
    --txt-xl-size: 1.2rem;
    --txt-2xl-size: 1.5rem;
  }
}

@media screen and (max-width: 480px) {
  :root {
    --txt-xs-size: 0.55rem;
    --txt-sm-size: 0.7rem;
    --txt-base-size: 0.8rem;
    --txt-lg-size: 0.95rem;
    --txt-xl-size: 1.1rem;
    --txt-2xl-size: 1.3rem;
  }
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
