import { INodeProperties } from 'n8n-workflow';

export const recaptchaClickFields: INodeProperties[] = [
	{
		displayName: 'Website URL',
		name: 'websiteUrl',
		type: 'string',
		required: true,
		displayOptions: { show: { taskType: ['recaptchaClick'] } },
		default: '',
	},
	{
		displayName: 'Image URLs',
		name: 'imageUrls',
		type: 'string',
		typeOptions: { editor: 'codeNodeEditor', rows: 5 },
		required: true,
		displayOptions: { show: { taskType: ['recaptchaClick'] } },
		default: '["https://example.com/captcha.jpg"]',
	},
	{
		displayName: 'Metadata',
		name: 'metadata',
		type: 'string',
		typeOptions: { editor: 'codeNodeEditor', rows: 5 },
		displayOptions: { show: { taskType: ['recaptchaClick'] } },
		default: '{}',
	},
	{
		displayName: 'User Agent',
		name: 'userAgent',
		type: 'string',
		displayOptions: { show: { taskType: ['recaptchaClick'] } },
		default: '',
		description: 'User-Agent для запроса к сайту',
	},
];
