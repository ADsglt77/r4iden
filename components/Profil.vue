<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Badges from './Badges.vue';
import Presence from './Presence.vue';
import IconsMemberOnline from './icons/MemberOnline.vue';
import IconsMemberOffline from './icons/MemberOffline.vue';
import IconsView from './icons/View.vue';
import Icons from './Icons.vue';

const isEnter = ref(false);
const video = ref<any>();
const muted = ref<boolean>(false);

const servers = ref<{
    invite:string
    member?: number
    online?: number
    icon?: string
    name?: string
}[]>([
    {invite: 'devweb'},
    {invite: 'snipy'}
])


function enterClick(): void {
    isEnter.value = true;
    showQuote();
    if (video.value) {
        video.value.play();
    }
}

const quote = ref<string>('');
const quotes = ['I\'ll leave the rest to you ...', 'A man dies when his memory is forgotten', 'Can we make another promise ?'];

function showQuote(): void {
    const currentQuote = quotes[Math.floor(Math.random() * quotes.length)];
    let i = 0;
    const interval = setInterval(() => {
        if (i >= currentQuote.length) {
            clearInterval(interval);
            deleteQuote();
            return;
        }
        quote.value += currentQuote[i];
        i++;
    }, 100);
}

function deleteQuote(): void {
    const interval = setInterval(() => {
        if (quote.value.length <= 0) {
            clearInterval(interval);
            showQuote();
            return;
        }
        quote.value = quote.value.slice(0, -1);
    }, 60);
}

onMounted(async () => {
    const promises = servers.value.map(server => getServerInfo(server.invite));
    const results = await Promise.all(promises);
    servers.value = servers.value.map((server, index) => ({
        ...server,
        ...results[index]
    }));
});

async function getServerInfo(invite:string) {
    return await fetch(`https://discord.com/api/invite/${invite}?with_counts=true`).then(res => res.json()).then(data => {
        return {
            name: data.guild.name,
            member: data.approximate_member_count,
            online: data.approximate_presence_count,
            icon: "https://cdn.discordapp.com/icons/" + data.guild.id + "/" + data.guild.icon + ".png",
        }
    });
}
</script>

<template>
	<button @click="enterClick" v-if="!isEnter" id="enterClick">🥥 • Click to enter . . .</button>
	<video src="@/assets/background.mp4" id="background" :muted loop playsinline ref="video"></video>
	<div class="content">
		<div class="profil">
			<img src="/pp2.gif" alt="" />
			<div>
				<h1>
					AD
					<Badges />
				</h1>
				<h3>
					<span>{{ quote }}</span>
				</h3>
				<p>Dev Web UI & UX</p>
			</div>
		</div>
		<div class="box">
			<div>
				<img src="/pp.gif" alt="" id="ppDisc" />
				<img src="/presence/dnd.png" alt="" id="presence" />
			</div>
			<div>
				<h2>r4id3n.</h2>
				<p>
					<Presence />
				</p>
			</div>
		</div>
		<div class="box" v-for="server in servers" :key="server.invite">
			<!-- <img src="/logo.png" alt="" id="ppServ" /> -->
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
		<div class="view">
			<div>
				<IconsView />
				<p>6.999</p>
			</div>
			<Icons id="IconsPhone" />
		</div>
	</div>
	<Icons id="IconsDesktop" />
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
}

.content .profil div h1 {
    display: flex;
    align-items: center;
    gap: 10px;
}

.content .profil div h3 {
    min-height: 29px;
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
    gap: 10px;
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
