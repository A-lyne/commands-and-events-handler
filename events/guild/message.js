module.exports = (Discord,client,messge) =>{
    const;prefix = '!';

    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    const command = client.commands.get(cmd);

    const command;execute( client, message, args, Discord);

}
