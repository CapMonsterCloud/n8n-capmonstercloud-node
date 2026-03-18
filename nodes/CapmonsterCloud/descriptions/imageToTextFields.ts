import { INodeProperties } from 'n8n-workflow';

export const imageToTextFields: INodeProperties[] = [
	{
		displayName: 'Image URL',
		name: 'body',
		type: 'string',
		typeOptions: {
			rows: 6,
		},
		required: true,
		displayOptions: { show: { taskType: ['imageToText'] } },
		default: '',
		description: 'Base64',
	},
];
