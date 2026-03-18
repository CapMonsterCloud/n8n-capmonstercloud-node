import { INodeProperties } from 'n8n-workflow';

export const binanceFields: INodeProperties[] = [
	{
		displayName: 'Website URL',
		name: 'websiteURL',
		type: 'string',
		required: true,
		displayOptions: { show: { taskType: ['binance'] } },
		default: '',
		description: 'The URL of the Binance page with the captcha',
	},
	{
		displayName: 'Website Key',
		name: 'websiteKey',
		type: 'string',
		required: true,
		displayOptions: { show: { taskType: ['binance'] } },
		default: '',
		description: 'Captcha site key or identifier',
	},
	{
		displayName: 'Validate ID',
		name: 'validateId',
		type: 'string',
		required: true,
		displayOptions: { show: { taskType: ['binance'] } },
		default: '',
		description: 'Unique validation ID for the captcha challenge',
	},
	{
		displayName: 'User Agent',
		name: 'userAgent',
		type: 'string',
		displayOptions: { show: { taskType: ['binance'] } },
		default: '',
		description: 'Optional User-Agent header for the request',
	},
];
