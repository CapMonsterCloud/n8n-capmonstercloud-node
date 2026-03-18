import { INodeProperties } from 'n8n-workflow';

export const tendiFields: INodeProperties[] = [
	{
		displayName: 'Website URL',
		name: 'websiteURL',
		type: 'string',
		required: true,
		displayOptions: { show: { taskType: ['tendi'] } },
		default: '',
		description: 'The URL of the page with TenDI captcha',
	},
	{
		displayName: 'Website Key',
		name: 'websiteKey',
		type: 'string',
		required: true,
		displayOptions: { show: { taskType: ['tendi'] } },
		default: '',
		description: 'Site key of the TenDI captcha',
	},
	{
		displayName: 'User Agent',
		name: 'userAgent',
		type: 'string',
		displayOptions: { show: { taskType: ['tendi'] } },
		default: '',
		description: 'Optional User-Agent header for the request',
	},
	{
		displayName: 'Captcha URL',
		name: 'captchaUrl',
		type: 'string',
		displayOptions: { show: { taskType: ['tendi'] } },
		default: '',
		description: 'URL of the TenDI captcha script (optional metadata)',
	},
];
