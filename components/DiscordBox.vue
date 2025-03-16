<script setup lang="ts">
import { ref } from 'vue';

interface UserDiscord {
  name: string;
  image: string;
  activity: {
    text: string;
    icon: string;
  };
  precence: string;
}

const discord = ref<UserDiscord | null>(null);

async function fetchDiscordData() {
  discord.value = await $fetch<UserDiscord>("https://api.r4iden.online/discord");
}

fetchDiscordData();
</script>


<template>
  <div class="box">
    <div>
      <img :src="discord?.image" alt="" id="ppDisc" />
      <img :src="`/img/presence/${discord?.precence || 'offline'}.png`" alt="" id="presence" />
    </div>
    <div>
      <h2>{{ discord?.name || "Probleme de chargement" }}</h2>
      <div>
        <img :src="discord.activity.icon" alt="" v-if="discord?.activity.icon" />
        <p v-if="discord?.activity.text">{{ discord.activity.text }}</p>
      </div>
    </div>
  </div>
</template>


<style scoped>
.box {
  width: 100%;
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 10px;
  padding: 10px;
  gap: 5px;
  transition: 0.3s ease;
  opacity: 0;
  animation: slideInLeft 1s forwards;
}

.box:nth-of-type(2n) {
  animation: slideInRight 1s forwards;
}

.box:hover {
  background-color: rgba(255, 255, 255, 0.10);
  border: 1px solid rgba(255, 255, 255, 0.6);
}

.box #ppDisc,
.box #ppServ {
  display: flex;
  width: 80px;
  height: 80px;
  border-radius: 10%;
  object-fit: cover;
  margin-right: 10px;
}

.box #ppDisc {
  border-radius: 50%;
}

.box div {
  position: relative;
}

.box #presence {
  position: absolute;
  right: 10px;
  bottom: 10px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  backdrop-filter: blur(10px);
}

.box h2 {
  font-size: var(--txt-lg-size);
  font-weight: var(--txt-lg-weight);
}

.box div div {
  display: flex;
  align-items: center;
  gap: 5px;
}

.box div div img {
  width: 20px;
  height: 20px;
}

.box div div p {
  font-size: var(--txt-sm-size);
}

.box a {
  border: none;
  background-color: #1a6334;
  font-size: 0.7rem;
  padding: 2px 6px 2px 6px;
  border-radius: 8px;
  cursor: pointer;
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
</style>
