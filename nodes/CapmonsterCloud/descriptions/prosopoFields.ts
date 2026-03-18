import { INodeProperties } from 'n8n-workflow';

export const prosopoFields: INodeProperties[] = [
	{
		displayName: 'Website URL',
		name: 'websiteURL',
		type: 'string',
		required: true,
		displayOptions: { show: { taskType: ['prosopo'] } },
		default: '',
		description: 'The URL of the website to solve the Prosopo CAPTCHA',
	},
	{
		displayName: 'Website Key',
		name: 'websiteKey',
		type: 'string',
		required: true,
		displayOptions: { show: { taskType: ['prosopo'] } },
		default: '',
		description: 'Prosopo site key for the CAPTCHA',
	},
];
