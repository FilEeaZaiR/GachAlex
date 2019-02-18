//Base bot discord :
const Discord = require('discord.js');

const client = new Discord.Client();

//Login + connexion du bot :
client.login(process.env.TOKEN);

client.on("ready", () => {
    console.log("Connexion en cours ...");
        setInterval(function() {

            var statut = [
              `GachaBot By FilEeaZaiR`,
              `${client.users.size} utilisateurs`];
    
            var random = Math.floor(Math.random()*(statut.length));
    
            client.user.setPresence({ 
                    game: { 
                    name: statut[random],
                    type: 0
                  }
            });
      }, 30000); 
});

client.on("guildMemberAdd", member => {

    const bvn = member.guild.channels.find(m => m.id === "546751006319575071");

    if(!bvn) return;

    var role = member.guild.roles.find(r => r.id === "546752612968693809");
    member.addRole(role).catch(console.error);

    bvn.send({
        embed: {
            color: 0xFE6F01,
            author: {
                name: member.user.tag,
                icon_url: member.user.displayAvatarURL
            },
            title: "Arrivée d'un nouvel utilisateur",
            fields: [
            {
                name: "Un nouvel utilisateur vient d'arriver",
                value: `Il s'agit de [${member.user.tag}]`,
                inline: true
            },
            {
                name: `Nombre de membres après l'arrivée de __${member.user.tag}__`,
                value: member.guild.memberCount,
                inline: false
            }],
            timestamp: new Date(),
            footer: {
                text: `ID : ${member.user.id} | FilEeaZaiR#1258`,
            }
        }
    });

});

client.on("guildMemberRemove", member => {

    const logs = member.guild.channels.find(m => m.id === "546751006319575071");
    if (!logs) return;
	
    logs.send({embed: {
            color: 0xFE6F01,
            author: {
                name: member.user.tag,
                icon_url: member.user.displayAvatarURL
            },
            title: "Départ d'un utilisateur",
	        image: {
		        url: "http://www.lesaffaires.com/uploads/images/normal/578f645f2123b12d0257dfa1fbdb8fff.jpg"
	        },
	        thumbnail: {
                url: member.user.displayAvatarURL
            },
            fields: [
            {
                name: "Un utilisateur vient de partir",
                value: `Il s'agit de [${member.user.tag}]`,
                inline: true
            },
            {
                name: `Nombre de membres après le départ de __${member.user.tag}__`,
                value: member.guild.memberCount,
                inline: false
            }],
            timestamp: new Date(),
            footer: {
                text: `ID : ${member.user.id} | FilEeaZaiR#1258`,
            }
        }
    });

});
