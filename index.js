//OTAxNDc5MDAyNjUxMzgxNzcw.YXQdvg.a6JpQayvuGg8nMPIYoCU1nmINr8
/*
const Discord = require('discord.js');
const client = new Discord.Client({ intents: [ 'DIRECT_MESSAGES', 'GUILD_MESSAGES' ] });
*/
const { Discord, Intents, Client } = require('discord.js');

const client = new Client({ intents: [ 'DIRECT_MESSAGES', 'GUILD_MESSAGES' ] });


const  prefix = '!';

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler','event_handler'].forEach(handler =>{
    require (`./handlers/${handler}`)(client, Discord);
})
/*
client.on('ready', ()=>{
    console.log('Bot online')

})

client.on('message', message =>{

    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();


    if (command === 'ping'){
        message.channel.send('pong');

    
    }
    else if (command === 'bestyoutubechannel'){
        message.channel.send('**Go subscribe you little shit** https://youtube.balance2.live');

    }
})*/





client.login("OTAxNDc5MDAyNjUxMzgxNzcw.YXQdvg.a6JpQayvuGg8nMPIYoCU1nmINr8")

