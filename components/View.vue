<script lang="ts" setup>
const {data:view} = await useFetch("https://api.r4aiden.online/view")
</script>

<template>
	<div>
		<IconsView />
		<p>{{ view }}</p>
	</div>
</template>
