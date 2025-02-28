<script lang="ts" setup>
const {data:view} = await useFetch("/api/view")
</script>

<template>
	<div>
		<IconsView />
		<p>{{ view }}</p>
	</div>
</template>
