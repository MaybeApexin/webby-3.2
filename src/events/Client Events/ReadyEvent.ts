import { RunFunction } from '../../interfaces/Event';

export const run: RunFunction = async (client) => {
	client.logger.success(`${client.user.tag} is activated!`);
};

export const name: string = 'ready';
