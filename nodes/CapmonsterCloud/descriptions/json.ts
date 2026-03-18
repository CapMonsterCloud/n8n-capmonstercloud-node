import { INodeProperties } from 'n8n-workflow';

export const jsonTaskFields: INodeProperties[] = [
	{
		displayName: 'Task JSON Payload',
		name: 'taskJson',
		type: 'string',
		typeOptions: {
			editor: 'codeNodeEditor',
			rows: 10,
		},
		default:
			'{\n  "type": "RecaptchaV2Task",\n  "websiteURL": "https://example.com",\n  "websiteKey": "SITE_KEY"\n}',
		required: true,
		displayOptions: {
			show: {
				taskType: ['json'],
			},
		},
		description: 'Raw CapMonster task object (without clientKey)',
	},
];
