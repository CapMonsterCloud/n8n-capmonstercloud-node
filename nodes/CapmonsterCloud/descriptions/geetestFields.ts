import { INodeProperties } from 'n8n-workflow';

export const geetestFields: INodeProperties[] = [
	{
		displayName: 'Website URL',
		name: 'websiteURL',
		type: 'string',
		required: true,
		displayOptions: { show: { taskType: ['geetest'] } },
		default: '',
		description: 'URL captcha page',
	},
	{
		displayName: 'GT',
		name: 'gt',
		type: 'string',
		required: true,
		displayOptions: { show: { taskType: ['geetest'] } },
		default: '',
		description: 'GT key',
	},
	{
		displayName: 'Challenge',
		name: 'challenge',
		type: 'string',
		required: true,
		displayOptions: { show: { taskType: ['geetest'] } },
		default: '',
		description: 'Challenge code',
	},
	{
		displayName: 'API Server Subdomain',
		name: 'geetestApiServerSubdomain',
		type: 'string',
		required: true,
		displayOptions: { show: { taskType: ['geetest'] } },
		default: '',
		description: 'API Server Subdomain: api-na.geetest.com',
	},
	{
		displayName: 'User Agent',
		name: 'userAgent',
		type: 'string',
		displayOptions: { show: { taskType: ['geetest'] } },
		default: '',
		description: 'User-Agent',
	},
];
