const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    cooldown: 3,
	data: new SlashCommandBuilder()
		.setName('itemshop')
		.setDescription('Get the fortnite item shop.'),
	async execute(interaction) {
		await interaction.reply('The Fortnite Item Shop.\n\nYou can view the latest item shop at [Fortnite Item Shop](https://fortnite.gg/shop).');
	},
};