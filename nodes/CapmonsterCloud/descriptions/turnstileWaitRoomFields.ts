import { INodeProperties } from 'n8n-workflow';

export const turnstileWaitRoomFields: INodeProperties[] = [
	{
		displayName: 'Website URL',
		name: 'websiteURL',
		type: 'string',
		required: true,
		displayOptions: { show: { taskType: ['turnstileWaitRoom'] } },
		default: '',
	},
	{
		displayName: 'Website Key',
		name: 'websiteKey',
		type: 'string',
		required: true,
		displayOptions: { show: { taskType: ['turnstileWaitRoom'] } },
		default: '',
	},
	{
		displayName: 'HTML Page (Base64)',
		name: 'htmlPageBase64',
		type: 'string',
		typeOptions: { editor: 'codeNodeEditor', rows: 5 },
		required: true,
		displayOptions: { show: { taskType: ['turnstileWaitRoom'] } },
		default: '',
	},
	{
		displayName: 'User Agent',
		name: 'userAgent',
		type: 'string',
		required: true,
		displayOptions: { show: { taskType: ['turnstileWaitRoom'] } },
		default: '',
	},
];
