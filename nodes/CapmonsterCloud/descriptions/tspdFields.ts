import { INodeProperties } from 'n8n-workflow';

export const tspdFields: INodeProperties[] = [
	{
		displayName: 'Website URL',
		name: 'websiteURL',
		type: 'string',
		required: true,
		displayOptions: { show: { taskType: ['tspd'] } },
		default: '',
		description: 'The URL of the page protected by TSPD',
	},
	{
		displayName: 'TSPD Cookie',
		name: 'tspdCookie',
		type: 'string',
		required: true,
		displayOptions: { show: { taskType: ['tspd'] } },
		default: '',
		description: 'Cookie string for TSPD validation',
		typeOptions: { rows: 4 },
	},
	{
		displayName: 'HTML Page (Base64)',
		name: 'htmlPageBase64',
		type: 'string',
		required: true,
		displayOptions: { show: { taskType: ['tspd'] } },
		default: '',
		description: 'Base64-encoded HTML page for TSPD challenge',
		typeOptions: { rows: 6 },
	},
	{
		displayName: 'User Agent',
		name: 'userAgent',
		type: 'string',
		required: true,
		displayOptions: { show: { taskType: ['tspd'] } },
		default:
			'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36',
		description: 'User-Agent header',
	},
];
