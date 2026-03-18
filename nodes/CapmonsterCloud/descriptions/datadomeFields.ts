import { INodeProperties } from 'n8n-workflow';

export const datadomeFields: INodeProperties[] = [
	{
		displayName: 'Website URL',
		name: 'websiteURL',
		type: 'string',
		required: true,
		displayOptions: { show: { taskType: ['datadome'] } },
		default: '',
		description: 'Target website URL protected by DataDome',
	},
	{
		displayName: 'User Agent',
		name: 'userAgent',
		type: 'string',
		required: true,
		displayOptions: { show: { taskType: ['datadome'] } },
		default: '',
		description: 'Browser User-Agent used for solving',
	},
	{
		displayName: 'Captcha URL',
		name: 'captchaUrl',
		type: 'string',
		required: true,
		displayOptions: { show: { taskType: ['datadome'] } },
		default: '',
		description: 'DataDome captcha URL',
	},
	{
		displayName: 'DataDome Cookie',
		name: 'datadomeCookie',
		type: 'string',
		required: true,
		displayOptions: { show: { taskType: ['datadome'] } },
		default: '',
		description: 'Datadome cookie value',
	},
	{
		displayName: 'DataDome Version',
		name: 'datadomeVersion',
		type: 'options',
		options: [
			{ name: 'New', value: 'new' },
			{ name: 'Old', value: 'old' },
		],
		default: 'new',
		displayOptions: { show: { taskType: ['datadome'] } },
		description: 'Version of DataDome protection',
	},
];
