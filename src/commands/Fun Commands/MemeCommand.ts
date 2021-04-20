import { Message, MessageEmbed } from 'discord.js';
import { RunFunction } from '../../interfaces/Command';
import https from 'https';

const url = 'https://www.reddit.com/r/meme/hot/.json?limit=100';

export const run: RunFunction = async(client, message) => {
    try {


        https.get(url, (result) => {
            var body = ''
            result.on('data', (chunk) => {
                body += chunk
            })
        

        result.on('end', () => {
            var response = JSON.parse(body)
            var index = response.data.children[Math.floor(Math.random() * 99) + 1].data
        
        

        var image = index.preview.images[0].source.url.replace('&amp;', '&')
        var title = index.title
        var link = 'https://reddit.com' + index.permalink
        var subRedditName = index.subreddit_name_prefixed

        message.channel.send(client.embed({title: subRedditName, image: {url: image}, url:`${image}` }, message))
    })
})
    } catch(err) {
        console.error(err)
        message.channel.send(`\`${err}\``);
    }


}

export const name: string = "meme"