import { INodeProperties } from 'n8n-workflow';

export const impervaFields: INodeProperties[] = [
	{
		displayName: 'Website URL',
		name: 'websiteURL',
		type: 'string',
		required: true,
		displayOptions: { show: { taskType: ['imperva'] } },
		default: '',
		description: 'The URL of the site protected by Imperva',
	},
	{
		displayName: 'User Agent',
		name: 'userAgent',
		type: 'string',
		displayOptions: { show: { taskType: ['imperva'] } },
		default: '',
		description: 'Optional User-Agent header',
	},
	{
		displayName: 'Incapsula Script URL',
		name: 'incapsulaScriptUrl',
		type: 'string',
		required: true,
		displayOptions: { show: { taskType: ['imperva'] } },
		default: '',
		description: 'URL of the Incapsula JS resource',
	},
	{
		displayName: 'Incapsula Cookies',
		name: 'incapsulaCookies',
		type: 'string',
		required: true,
		displayOptions: { show: { taskType: ['imperva'] } },
		default: '',
		description: 'Incapsula session cookies',
	},
	{
		displayName: 'Reese84 URL Endpoint',
		name: 'reese84UrlEndpoint',
		type: 'string',
		required: true,
		displayOptions: { show: { taskType: ['imperva'] } },
		default: '',
		description: 'Reese84 endpoint for validation',
	},
];
