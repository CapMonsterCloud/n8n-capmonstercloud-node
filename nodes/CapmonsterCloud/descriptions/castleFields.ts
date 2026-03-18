import { INodeProperties } from 'n8n-workflow';

export const castleFields: INodeProperties[] = [
	{
		displayName: 'Website URL',
		name: 'websiteURL',
		type: 'string',
		required: true,
		displayOptions: { show: { taskType: ['castle'] } },
		default: '',
		description: 'The URL of the page with Castle protection',
	},
	{
		displayName: 'Website Key',
		name: 'websiteKey',
		type: 'string',
		required: true,
		displayOptions: { show: { taskType: ['castle'] } },
		default: '',
		description: 'Castle public key',
	},
	{
		displayName: 'User Agent',
		name: 'userAgent',
		type: 'string',
		required: true,
		displayOptions: { show: { taskType: ['castle'] } },
		default:
			'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36',
		description: 'User-Agent header',
	},
	{
		displayName: 'wUrl',
		name: 'wUrl',
		type: 'string',
		required: true,
		displayOptions: { show: { taskType: ['castle'] } },
		default: '',
		description: 'URL to cw.js script',
	},
	{
		displayName: 'swUrl',
		name: 'swUrl',
		type: 'string',
		required: true,
		displayOptions: { show: { taskType: ['castle'] } },
		default: '',
		description: 'URL to csw.js script',
	},
	{
		displayName: 'Count',
		name: 'count',
		type: 'number',
		required: true,
		displayOptions: { show: { taskType: ['castle'] } },
		default: 1,
		description: 'Number of required iterations',
	},
];
