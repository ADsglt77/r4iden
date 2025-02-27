<script setup lang="ts">
import IconsInstagram from './icons/social/instagram.vue';
import IconsGithub from './icons/social/github.vue';
import IconsBuyMeCoffee from './icons/social/buyMeCoffee.vue';
</script>

<template>
    <div class="icons">
        <div class="icon-wrap">
            <a href="https://www.instagram.com/ad.sglt/" target="_blank"><IconsInstagram /></a>
            <p>ad.sglt</p>
        </div>
        <div class="icon-wrap">
            <a href="https://github.com/ADsglt77" target="_blank"><IconsGithub /></a>
            <p>ADsglt77</p>
        </div>
        <div class="icon-wrap">
            <a href="https://buymeacoffee.com/adsglt" target="_blank"><IconsBuyMeCoffee /></a>
            <p>ADsglt</p>
        </div>
    </div>
</template>

<style scoped>
.icons {
    position: absolute;
    left: 20px;
    bottom: 20px;
    display: flex;
    flex-direction: column;
    

}

.icon-wrap {
    display: flex;
    align-items: center;
    gap: 10px;
}

svg {
    width: 22px;
    height: 22px;
    margin: 10px;
    transition: transform 0.3s ease;
}

p {
    font-size: var(--txt-sm-size);
    font-weight: var(--txt-sm-weight);
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
}

.icon-wrap:hover p {
    opacity: 1;
}

@media screen and (max-width: 850px) {
    .icons {
        position: static;
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 15px;
    }

    .icon-wrap {
        flex-direction: column;
        align-items: center;
        gap: 5px;
    }

    svg {
        margin: 0 6px;
    }

    p {
        display: none;
    }
}
</style>
