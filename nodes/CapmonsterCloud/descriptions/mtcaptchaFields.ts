import { INodeProperties } from 'n8n-workflow';

export const mtcaptchaFields: INodeProperties[] = [
	{
		displayName: 'Website URL',
		name: 'websiteURL',
		type: 'string',
		required: true,
		displayOptions: { show: { taskType: ['mtcaptcha'] } },
		default: '',
		description: 'The URL of the page containing the MTCaptcha',
	},
	{
		displayName: 'Website Key',
		name: 'websiteKey',
		type: 'string',
		required: true,
		displayOptions: { show: { taskType: ['mtcaptcha'] } },
		default: '',
		description: 'The public key for MTCaptcha solving',
	},
	{
		displayName: 'Invisible',
		name: 'isInvisible',
		type: 'boolean',
		displayOptions: { show: { taskType: ['mtcaptcha'] } },
		default: false,
		description: 'Whether the captcha is invisible',
	},
	{
		displayName: 'Page Action',
		name: 'pageAction',
		type: 'string',
		displayOptions: { show: { taskType: ['mtcaptcha'] } },
		default: '',
		description: 'Action name for MTCaptcha (e.g., login, register)',
	},
];
