<script lang="ts" setup>
const view = ref<number>(await usePrismaClient().view.count());
</script>

<template>
	<div>
		<IconsView />
		<p>{{ view }}</p>
	</div>
</template>
