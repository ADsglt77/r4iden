<script setup lang="ts">
</script>

<template>
    <div class="bages">
        <div>
            <img src="/img/badges/nitro.png" alt="">
            <p>Nitro Subscriber</p>
        </div>
        <div>
            <img src="/img/badges/boostSince1month.png" alt="">
            <p>Server booster since Jan. 28, 2025</p>
        </div>
        <div>
            <img src="/img/badges/earlySupp.png" alt="">
            <p>Early support</p>
        </div>
        <div>
            <img src="/img/badges/bravery.png" alt="">
            <p>HypeSquad Bravery</p>
        </div>
        <div>
            <img src="/img/badges/quest.png" alt="">
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

@keyframes fadeInFromTop {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.bages > div {
  opacity: 0; /* état initial */
  animation: fadeInFromTop 1s forwards;
}

.bages > div:nth-child(1) {
  animation-delay: 0ms;
}
.bages > div:nth-child(2) {
  animation-delay: 100ms;
}
.bages > div:nth-child(3) {
  animation-delay: 200ms;
}
.bages > div:nth-child(4) {
  animation-delay: 300ms;
}
.bages > div:nth-child(5) {
  animation-delay: 400ms;
}
</style>