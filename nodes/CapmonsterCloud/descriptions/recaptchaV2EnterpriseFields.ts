import { INodeProperties } from 'n8n-workflow';

export const recaptchaV2EnterpriseFields: INodeProperties[] = [
	{
		displayName: 'Website URL',
		name: 'websiteURL',
		type: 'string',
		required: true,
		displayOptions: { show: { taskType: ['recaptchaV2Enterprise'] } },
		default: '',
	},
	{
		displayName: 'Website Key',
		name: 'websiteKey',
		type: 'string',
		required: true,
		displayOptions: { show: { taskType: ['recaptchaV2Enterprise'] } },
		default: '',
		description: 'Site key ReCaptcha Enterprise',
	},
	{
		displayName: 'Enterprise Payload',
		name: 'enterprisePayload',
		type: 'string',
		typeOptions: { editor: 'codeNodeEditor', rows: 5 },
		displayOptions: { show: { taskType: ['recaptchaV2Enterprise'] } },
		default: '{}',
	},
	{
		displayName: 'User Agent',
		name: 'userAgent',
		type: 'string',
		displayOptions: { show: { taskType: ['recaptchaV2Enterprise'] } },
		default: '',
	},
];
