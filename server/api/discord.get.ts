export default defineEventHandler(async (event) => {
	const guild = event.context.client.guilds.cache.get("1333815305570357380");
	if (!guild) return { precence: "offline", activity: null };

	const member = await guild.members.fetch("403779900739420171");
	if (!member) return { precence: "offline", activity: null };


	const a = member.presence?.activities.filter((a) => a.type === 4)[0];
	return {
		name: member?.user.username,
		precence: member?.presence?.status || "offline",
		activity: {
			text: a?.state || null,
			icon: a?.emoji?.imageURL() || null,
		},
	};
});
