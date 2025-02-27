import { Client } from "discord.js";

const client = new Client({ intents: ["GuildPresences", "GuildMembers", "Guilds"] });
client.login("MTM0NDY3NTI0MTI4NDA3NTU2MA.GKtgB8.LFFR6s3MQO814XfGcAhuxujin7cZWRRj0vkzLE");

export default defineNitroPlugin((nitroApp) => {
	nitroApp.hooks.hook("request", (event) => {
		event.context.client = client;
	});
});
