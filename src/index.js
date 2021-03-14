const colors = require('colors');
const { MessageEmbed } = require('discord.js');

const embed = new MessageEmbed()
.setColor('#00DCFF')

class Rick {

    create({ msg }) {
        if (!msg)
            return console.log(`${colors.brightRed('[YIKES]')}`.white + colors.white(' You can\'t even give me a proper message? Smh'));

        embed
        .setTitle('Successfully created the video')
        .setDescription('You can find the video [here](https://www.youtube.com/watch?v=dQw4w9WgXcQ)')
        
        msg.channel.send(msg.author, { embed: embed });
    };

    eval({ msg, input }) {
        if (!msg)
            return console.log(`${colors.brightRed('[YIKES]')}`.white + colors.white(' You can\'t even give me a proper message? Smh'));

        if (!input)
            input = 'Absolutely nothing because you failed to give me something to evaluate';

        embed
        .setTitle('Evaluating.....')
        .addFields(
            { name: 'Input', value: `\`\`\`${input}\`\`\``, inline: false },
            { name: 'Output', value: `|| [You are an idiot](https://www.youtube.com/watch?v=dQw4w9WgXcQ) ||`, inline: false }
        )
        
        msg.channel.send(msg.author, { embed: embed });
    };

    google({ msg, query }) {
        if (!msg)
            return console.log(`${colors.brightRed('[YIKES]')}`.white + colors.white(' You can\'t even give me a proper message? Smh'));
        
        embed
        .setTitle(`Searching google for ${query}`)
        .setDescription('Result - [Click Here](https://www.youtube.com/watch?v=dQw4w9WgXcQ)')

        msg.channel.send(msg.author, { embed: embed });
    }

    rick({ msg }) {
        if (!msg)
            return console.log(`${colors.brightRed('[YIKES]')}`.white + colors.white(' You can\'t even give me a proper message? Smh'));

        embed
        .setDescription('[Click Here](https://www.youtube.com/watch?v=dQw4w9WgXcQ)');
        
        msg.channel.send(msg.author, { embed: embed });
    };

    astley({ msg }) {
        if (!msg)
            return console.log(`${colors.brightRed('[YIKES]')}`.white + colors.white(' You can\'t even give me a proper message? Smh'));

        embed
        .setDescription('[Click Here](https://www.youtube.com/watch?v=dQw4w9WgXcQ)');

        msg.channel.send(msg.author, { embed: embed });
    };

    cannon({ msg }) {
        if (!msg)
            return console.log(`${colors.brightRed('[YIKES]')}`.white + colors.white(' You can\'t even give me a proper message? Smh'));
        
        embed
        .setTitle('Who is cannon?')
        .setDescription('Well Cannon is a person. Cannon is Portuguese and likes TypeScript, JavaScript (Not rlly) and Firebase. Cannon is learning C++, HTML and English. Cannon is also the creator of [Valex Bot](https://github.com/CannonStealth/valex)')
        .addFields(
            { name: 'Advantages of Cannon', value: '[Speaks Portuguese](https://www.youtube.com/watch?v=dQw4w9WgXcQ)', inline: true },
            { name: 'Disadvantages of Cannon', value: '[Idk](https://www.youtube.com/watch?v=dQw4w9WgXcQ)', inline: true },
            { name: 'GitHub', value: `[Click Here](https://github.com/CannonStealth)`, inline: true },
        )
        
        msg.channel.send(msg.author, { embed: embed });
    };

    agred({ msg }) {
        if (!msg)
            return console.log(`${colors.brightRed('[YIKES]')}`.white + colors.white(' You can\'t even give me a proper message? Smh'));

        embed
        .setTitle('Who is Agred?')
        .setDescription('Agred is the creator of [MegaFlushed Bot](https://discord.gg/q9yJh3qFUG). He is also known as Acery, whichever you prefer')
        .addFields(
            { name: 'Advantages of Agred', value: '[Says **GOTEEEM**](https://www.youtube.com/watch?v=dQw4w9WgXcQ)', inline: true },
            { name: 'Disadvantages of Agred', value: '[Kinda sus](https://www.youtube.com/watch?v=dQw4w9WgXcQ)', inline: true },
            { name: 'GitHub', value: `[Click Here](https://github.com/GG101xAcery)`, inline: true }
        )
        
        msg.channel.send(msg.author, { embed: embed });
    };
    
    mystic({ msg }) {
        if (!msg)
            return console.log(`${colors.brightRed('[YIKES]')}`.white + colors.white(' You can\'t even give me a proper message? Smh'))
        
        embed
        .setTitle('Who is the awesome person Mystic?')
        .setDescription('Mystic is the creator of Calypso which hasn\'t released yet due to multiple projects atm! He is also known as "! needs spoonfeed to live"')
        .addFields(
            { name: 'Adventage of Mystic', value: 'Is Cool, likes Exadon and is a bot dev for Mystical Traders, lmfao', inline: true },
            { name: 'Disadventages of Mystic', value: 'none except he likes to ask for spoonfeed alot', inline: true },
            { name: 'Github', value: '[Click here](https://github.com/MysticIsSus)', inline: true }
           )
        
        msg.channel.send(msg.author, { embed: embed });
    };

}

module.exports = Rick;
