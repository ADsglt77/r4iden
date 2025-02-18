<script setup lang="ts">
import IconsInstagram from './icons/social/instagram.vue';
import IconsGithub from './icons/social/github.vue';
import IconsBuyMeCoffee from './icons/social/buyMeCoffee.vue';

</script>

<template>
    <div class="icons">
            <IconsInstagram />
            <p>ad.sglt</p>
            <IconsGithub />
            <p>ADsglt77</p>
            <IconsBuyMeCoffee />
            <p>ADsglt</p>
    </div>
</template>

<style scoped>
.icons {
    width: min-content;
    position: absolute;
    left: 0;
    bottom: 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px 6px;
    margin: 0 0 20px 20px;
}

svg {
    width: 22px;
    height: 22px;
}

p {
    font-size: var(--txt-sm-size);
    font-weight: var(--txt-sm-weight);
    opacity: 0;
    transition: 0.3s ease;
}

svg:hover+p {
    opacity: 1;
}
</style>