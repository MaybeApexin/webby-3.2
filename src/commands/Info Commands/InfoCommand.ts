import {  Message, MessageEmbed  } from 'discord.js';
import {  RunFunction  } from '../../interfaces/Command';
import { DiscordFetcher } from 'discord-fetcher';
import moment from 'moment';


export const run: RunFunction = async(client, message) => {
    try {

        const targetUser =  message.mentions.users.first || message.member;

        const joinDiscord = moment(targetUser.createdAt).format('llll');
        const joinServer = moment(targetUser.joinedAt).format('llll');
       
    } catch(err) {
        console.error(err);
    }
}

export const name: string = "info"