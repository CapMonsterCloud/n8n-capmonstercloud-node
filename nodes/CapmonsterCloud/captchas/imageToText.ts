import { INodeProperties, IExecuteFunctions, IDataObject } from 'n8n-workflow';

export const imageToText: INodeProperties[] = [
	{
		displayName: 'Body (Base64)',
		name: 'body',
		type: 'string',
		typeOptions: {
			rows: 6,
		},
		required: true,
		displayOptions: { show: { operation: ['imageToText'] } },
		default: '',
		description: 'File body encoded in base64. Make sure to send it without line breaks.',
	},
	{
		displayName: 'Captcha Module',
		name: 'capMonsterModule',
		type: 'string',
		displayOptions: { show: { operation: ['imageToText'] } },
		default: '',
		description: 'Recognition module name (e.g., "yandex", "special")',
	},
	{
		displayName: 'Recognizing Threshold',
		name: 'recognizingThreshold',
		type: 'number',
		typeOptions: {
			minValue: 0,
			maxValue: 100,
		},
		displayOptions: { show: { operation: ['imageToText'] } },
		default: 0,
		description: 'Captcha recognition threshold (0–100)',
	},
	{
		displayName: 'Case Sensitive',
		name: 'case',
		type: 'boolean',
		displayOptions: { show: { operation: ['imageToText'] } },
		default: false,
		description: 'Whether Set to true if captcha is case sensitive',
	},
	{
		displayName: 'Numeric Only',
		name: 'numeric',
		type: 'options',
		options: [
			{ name: 'No', value: 0 },
			{ name: 'Yes', value: 1 },
		],
		displayOptions: { show: { operation: ['imageToText'] } },
		default: 0,
		description: 'Set to 1 if captcha contains numbers only',
	},
	{
		displayName: 'Math Captcha',
		name: 'math',
		type: 'boolean',
		displayOptions: { show: { operation: ['imageToText'] } },
		default: false,
		description: 'Whether Set to true if captcha requires a mathematical operation',
	},
];

export const buildImageToText = function (this: IExecuteFunctions, i: number): IDataObject {
	return {
		type: 'ImageToTextTask',
		body: this.getNodeParameter('body', i),
		capMonsterModule: this.getNodeParameter('capMonsterModule', i, ''),
		recognizingThreshold: this.getNodeParameter('recognizingThreshold', i, 0),
		case: this.getNodeParameter('case', i, false),
		numeric: this.getNodeParameter('numeric', i, 0),
		math: this.getNodeParameter('math', i, false),
	};
};
