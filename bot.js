//import { Message } from 'discord.js';
const Discord=require('discord.js');
const bot=new Discord.Client();
const config = require('./config.json');
const links = require('./links.json')
const Welcome = require("discord-welcome");

    Welcome(bot, {
    publicmsg : " @MEMBER Entrou no server! Bem vindo ao servidor Infinity Team CSGO, espero que se divirta jogando conosco! leia as nossas Regras!",
    publicchannel : "494847793047928862"
    })



bot.on('ready', () => {
    bot.user.setActivity('Administrando ~Blk')
    console.log('LOGADO');
})

bot.on('message', async message => {
    if(message.author.bot) return; // ignora as proprias msg
    if(message.content.indexOf(config.prefix) !== 0) return; // ignora msg sem !

     responseObject = links; // chama a area de links para o codigo
     if(responseObject[message.content]){ // "ativa" a area da linha acima
     message.channel.send(responseObject[message.content]);
    }

    const msgs = message.content.slice(config.prefix.length).trim().split(/ +/g);//possibilita separar itens ex: !testo teste um  !testo = msgs[0]
    const comando = msgs.shift().toLowerCase();//cria o comando em minusculo
    if(comando === "ping"){//comando basico de ping
        const ms = await message.channel.send("Ping?");
        const clientms = ms.createdTimestamp - message.createdTimestamp;
        ms.edit('Ping! Client: ' + clientms + 'ms / Bot+Server: ' + Math.round(bot.ping) + 'ms');
    }
    if(comando == "salve"){
        message.channel.send
    }






});
bot.login(config.token);
