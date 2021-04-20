import { Message, MessageAttachment } from 'discord.js';
import { RunFunction } from '../../interfaces/Command';
import { convertStringToNumber } from 'convert-string-to-number';
import fs from 'fs';
import path from 'path';


export const run: RunFunction = async (client, message) => {
	try {
		const msg = await message.channel.send(
			client.embed({ description: `Pinging.` }, message)
		);
		await msg.edit(client.embed({ description: `Pinging..` }, message));
		await msg.edit(client.embed({ description: `Pinging...` }, message));
	

		if (client.ws.ping < 100) {
			return await msg.edit(
				client.embed(
					{ description: `WebSocket: ${client.ws.ping}ms`, color: '#00cf03' },
					message
				)
			);
                }

                if (client.ws.ping > 100) {
                    return await msg.edit(
                        client.embed(
                            { description: `WebSocket: ${client.ws.ping}ms`, color: '#ff0303' },
                            message
                        )
                    ); 
                }


	} catch (err) {
		if (err) {
			
			console.error(err);
            const errPath = path.resolve(__dirname, '../../../errors/logs/')
			 fs.writeFileSync(
				`${errPath}/err.log`,
				`${err.toString()}`
			);
                message.channel.send(`\`${err}\``);
		}

        if (!err) {
            const errPath = path.resolve(__dirname, '../../../errors/logs/')

            fs.writeFileSync(
				`${errPath}/err.log`,
				`[$ NO ERRORS ENCOUNTERED ]`
			);
        }
	}
};

export const name: string = 'ping';
