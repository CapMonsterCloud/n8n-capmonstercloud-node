import { INodeProperties } from 'n8n-workflow';

export const complexImageRecognitionFields: INodeProperties[] = [
	{
		displayName: 'Images (Base64 Array)',
		name: 'imagesBase64',
		type: 'string',
		typeOptions: { editor: 'codeNodeEditor', rows: 8 },
		required: true,
		displayOptions: { show: { taskType: ['complexImageRecognition'] } },
		default: '[]',
		description: 'Images array base64',
	},
	{
		displayName: 'Metadata',
		name: 'metadata',
		type: 'string',
		typeOptions: { editor: 'codeNodeEditor', rows: 5 },
		required: true,
		displayOptions: { show: { taskType: ['complexImageRecognition'] } },
		default: '{\n  "Task": "betpunch_3x3_rotate"\n}',
		description: 'JSON metadata',
	},
];
