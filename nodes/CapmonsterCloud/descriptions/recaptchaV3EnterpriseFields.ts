import { INodeProperties } from 'n8n-workflow';

export const recaptchaV3EnterpriseFields: INodeProperties[] = [
	{
		displayName: 'Website URL',
		name: 'websiteURL',
		type: 'string',
		required: true,
		displayOptions: { show: { taskType: ['recaptchaV3Enterprise'] } },
		default: '',
	},
	{
		displayName: 'Website Key',
		name: 'websiteKey',
		type: 'string',
		required: true,
		displayOptions: { show: { taskType: ['recaptchaV3Enterprise'] } },
		default: '',
		description: 'Site key ReCaptcha V3 Enterprise',
	},
	{
		displayName: 'Minimum Score',
		name: 'minScore',
		type: 'number',
		displayOptions: { show: { taskType: ['recaptchaV3Enterprise'] } },
		default: 0.3,
	},
];
