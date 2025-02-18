<script setup lang="ts">

</script>

<template>
    <div class="bages">
        <div>
            <img src="/badges/nitro.png" alt="">
            <p>Nitro Subscriber</p>
        </div>
        <div>
            <img src="/badges/boostSince1month.png" alt="">
            <p>Server booster since Jan. 28, 2025</p>
        </div>
        <div>
            <img src="/badges/earlySupp.png" alt="">
            <p>Early support</p>
        </div>
        <div>
            <img src="/badges/bravery.png" alt="">
            <p>HypeSquad Bravery</p>
        </div>
        <div>
            <img src="/badges/quest.png" alt="">
            <p>A terminé une quête</p>
        </div>
    </div>
</template>

<style scoped>
.bages {
    width: min-content;
    display: flex;
    background-color: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: 10px;
    gap: 5px;
    padding: 1px 5px;
}

div div {
    display: flex;
    justify-content: center;
    gap: 5px;
    position: relative;
}

img {
    position: relative;
    width: 25px;
    height: 25px;
}

p {
    position: absolute;
    font-size: var(--txt-sm-size);
    font-weight: var(--txt-sm-weight);
    bottom: 30px;
    white-space: nowrap;
    opacity: 0;
    transition: 0.3s ease;
}

img:hover+p {
    opacity: 1;
}
</style>