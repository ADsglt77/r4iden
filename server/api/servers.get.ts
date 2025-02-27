import axios from "axios";

const server = ["devweb","snipy"];
export default defineEventHandler(async (event) => {
	return await Promise.all(
		server.map(async (server) => {
			const { data: api } = await axios.get(`https://discord.com/api/v9/invites/${server}?with_counts=true`);
			return {
				name: api.guild.name,
				invite: server,
				member: api.approximate_member_count,
				online: api.approximate_presence_count,
				icon: `https://cdn.discordapp.com/icons/${api.guild.id}/${api.guild.icon}.png`,
			};
		})
	);
});
