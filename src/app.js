import { REST, Routes } from 'discord.js';

// Schoonmaak-functie
const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);

(async () => {
    try {
        console.log('--- COMMAND CLEANUP START ---');
        // Dit verwijdert alle globale commando's
        await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), { body: [] });
        console.log('✅ Succes: De lijst in Discord is nu leeg!');
    } catch (error) {
        console.error('❌ Fout bij schoonmaken:', error);
    }
})();
