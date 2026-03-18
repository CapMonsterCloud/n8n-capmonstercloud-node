import { INodeProperties } from 'n8n-workflow';

export const turnstileChallengeFields: INodeProperties[] = [
	{
		displayName: 'Website URL',
		name: 'websiteURL',
		type: 'string',
		required: true,
		displayOptions: { show: { taskType: ['turnstileChallenge'] } },
		default: '',
	},
	{
		displayName: 'Website Key',
		name: 'websiteKey',
		type: 'string',
		required: true,
		displayOptions: { show: { taskType: ['turnstileChallenge'] } },
		default: '',
	},
	{
		displayName: 'User Agent',
		name: 'userAgent',
		type: 'string',
		required: true,
		displayOptions: { show: { taskType: ['turnstileChallenge'] } },
		default: '',
	},
	{
		displayName: 'Page Action',
		name: 'pageAction',
		type: 'string',
		default: '',
		displayOptions: { show: { taskType: ['turnstileChallenge'] } },
	},
	{
		displayName: 'Page Data',
		name: 'pageData',
		type: 'string',
		default: '',
		displayOptions: { show: { taskType: ['turnstileChallenge'] } },
	},
	{
		displayName: 'Data',
		name: 'data',
		type: 'string',
		default: '',
		displayOptions: { show: { taskType: ['turnstileChallenge'] } },
	},
];
