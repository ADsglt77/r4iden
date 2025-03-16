<template>
  <div class="box" v-for="server in servers" :key="server.invite">
    <img :src="server.icon" alt="" id="ppServ" />
    <div>
      <h2>{{ server.name }}</h2>
      <div>
        <p><IconsMemberOnline /> {{ server.online }} Online</p>
        <p><IconsMemberOffline /> {{ server.member }} Total</p>
      </div>
      <a :href="`https://discord.gg/${server.invite}`" target="_blank">JOIN</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Server {
  name: string;
  invite: string;
  member: number;
  online: number;
  icon: string;
}

const servers = ref<Server[]>([]);

async function fetchServers() {
  servers.value = await $fetch<Server[]>("https://api.r4iden.online/servers");
}

fetchServers();
</script>

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

.box #ppServ {
  display: flex;
  width: 80px;
  height: 80px;
  border-radius: 10%;
  object-fit: cover;
  margin-right: 10px;
}

.box div {
  position: relative;
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
