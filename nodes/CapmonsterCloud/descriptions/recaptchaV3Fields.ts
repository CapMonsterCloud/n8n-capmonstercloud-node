import { INodeProperties } from 'n8n-workflow';

export const recaptchaV3Fields: INodeProperties[] = [
	{
		displayName: 'Website URL',
		name: 'websiteURL',
		type: 'string',
		required: true,
		displayOptions: { show: { taskType: ['recaptchaV3'] } },
		default: '',
	},
	{
		displayName: 'Website Key',
		name: 'websiteKey',
		type: 'string',
		required: true,
		displayOptions: { show: { taskType: ['recaptchaV3'] } },
		default: '',
	},
	{
		displayName: 'Action',
		name: 'pageAction',
		type: 'string',
		displayOptions: { show: { taskType: ['recaptchaV3'] } },
		default: '',
	},
	{
		displayName: 'Min Score',
		name: 'minScore',
		type: 'number',
		displayOptions: { show: { taskType: ['recaptchaV3'] } },
		default: 0.3,
	},
	{
		displayName: 'Is Enterprise',
		name: 'isEnterprise',
		type: 'boolean',
		displayOptions: { show: { taskType: ['recaptchaV3'] } },
		default: false,
	},
];
