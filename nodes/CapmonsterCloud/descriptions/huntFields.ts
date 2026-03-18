import { INodeProperties } from 'n8n-workflow';

export const huntFields: INodeProperties[] = [
	{
		displayName: 'Website URL',
		name: 'websiteURL',
		type: 'string',
		required: true,
		displayOptions: { show: { taskType: ['hunt'] } },
		default: '',
		description: 'The URL of the page protected by Hunt',
	},
	{
		displayName: 'API Library URL',
		name: 'apiGetLib',
		type: 'string',
		required: true,
		displayOptions: { show: { taskType: ['hunt'] } },
		default: '',
		description: 'URL to the external API library required for Hunt challenge',
	},
	{
		displayName: 'User Agent',
		name: 'userAgent',
		type: 'string',
		required: true,
		displayOptions: { show: { taskType: ['hunt'] } },
		default:
			'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36',
		description: 'User-Agent header',
	},
];
