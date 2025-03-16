<script setup lang="ts">
const props = defineProps<{ quotes: string[] }>();
const quote = ref<string>('');
const TYPING_SPEED = 100;
const DELETING_SPEED = 60;
let quoteInterval: number | undefined;

function showQuote(): void {
    clearQuoteIntervals();
    const currentQuote = props.quotes[Math.floor(Math.random() * props.quotes.length)];
    let i = 0;
    quote.value = '';

    quoteInterval = window.setInterval(() => {
        if (i >= currentQuote.length) {
            clearInterval(quoteInterval);
            setTimeout(deleteQuote, 1000);
            return;
        }
        quote.value += currentQuote[i];
        i++;
    }, TYPING_SPEED);
}

function deleteQuote(): void {
    clearQuoteIntervals();
    quoteInterval = window.setInterval(() => {
        if (quote.value.length <= 0) {
            clearInterval(quoteInterval);
            setTimeout(showQuote, 500);
            return;
        }
        quote.value = quote.value.slice(0, -1);
    }, DELETING_SPEED);
}

function clearQuoteIntervals(): void {
    if (quoteInterval !== undefined) {
        clearInterval(quoteInterval);
        quoteInterval = undefined;
    }
}

onUnmounted(() => {
    clearQuoteIntervals();
});

showQuote();
</script>

<template>
    <div class="profil">
        <img src="/img/pp.gif"
            alt="Profil picture of AD"
        />
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
</template>

<style scoped>
.profil {
    grid-column: 1 / -1;
    display: flex;
    align-items: center;
}

.profil img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 20px;
    border: 2px solid rgba(255, 255, 255, 0.50);
    opacity: 0;
    animation: slideInTop 1s forwards;
}

.profil div h1 {
    display: flex;
    align-items: center;
    gap: 10px;
    opacity: 0;
    animation: slideInBottom 1s forwards;
}

.profil div h3 {
    min-height: 29px;
    opacity: 0;
    animation: slideInLeft 1s forwards;
}

.profil div p {
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
</style>
