import { INodeProperties } from 'n8n-workflow';

export const basiliskFields: INodeProperties[] = [
	{
		displayName: 'Website URL',
		name: 'websiteURL',
		type: 'string',
		required: true,
		displayOptions: { show: { taskType: ['basilisk'] } },
		default: '',
		description: 'The URL of the page with Basilisk captcha',
	},
	{
		displayName: 'Website Key',
		name: 'websiteKey',
		type: 'string',
		required: true,
		displayOptions: { show: { taskType: ['basilisk'] } },
		default: '',
		description: 'Site key of the Basilisk captcha',
	},
	{
		displayName: 'User Agent',
		name: 'userAgent',
		type: 'string',
		displayOptions: { show: { taskType: ['basilisk'] } },
		default: '',
		description: 'Optional User-Agent header for the request',
	},
];
