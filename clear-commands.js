import { REST, Routes } from 'discord.js';
import 'dotenv/config';

const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);

(async () => {
    try {
        console.log('Bezig met het verwijderen van alle slash-commands...');

        // Dit verwijdert alle commando's voor de hele bot (Global)
        await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), { body: [] });

        console.log('✅ Succes! Alle commando\'s zijn verwijderd uit Discord.');
        console.log('Herstart nu je bot op Railway.');
    } catch (error) {
        console.error(error);
    }
})();
