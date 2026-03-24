import { INodeProperties, IDataObject, IExecuteFunctions } from 'n8n-workflow';
import { userAgent as defaultUserAgent } from '../const';

export const recaptchaClick: INodeProperties[] = [
	{
		displayName: 'Website URL',
		name: 'websiteUrl',
		type: 'string',
		displayOptions: { show: { operation: ['recaptchaClick'] } },
		default: '',
		description: 'URL of the page where the captcha is solved',
	},
	{
		displayName: 'Image URLs',
		name: 'imageUrls',
		type: 'string',
		typeOptions: { editor: 'codeNodeEditor', rows: 5 },
		displayOptions: { show: { operation: ['recaptchaClick'] } },
		default: '["https://example.com/captcha.jpg"]',
		description: 'Array of image URLs (required if imagesBase64 is empty)',
	},
	{
		displayName: 'Images Base64',
		name: 'imagesBase64',
		type: 'string',
		typeOptions: { editor: 'codeNodeEditor', rows: 5 },
		displayOptions: { show: { operation: ['recaptchaClick'] } },
		default: '[]',
		description: 'Array of image base64 strings (required if imageUrls is empty)',
	},
	{
		displayName: 'Metadata',
		name: 'metadata',
		type: 'string',
		typeOptions: { editor: 'codeNodeEditor', rows: 7 },
		displayOptions: { show: { operation: ['recaptchaClick'] } },
		default: '{}',
		description: 'Metadata including Grid, TaskDefinition or Task',
	},
	{
		displayName: 'User Agent',
		name: 'userAgent',
		type: 'string',
		displayOptions: { show: { operation: ['recaptchaClick'] } },
		default: defaultUserAgent,
		description: 'User-Agent used for requests to the target website',
	},
];

export const buildRecaptchaClick = function (this: IExecuteFunctions, i: number): IDataObject {
	const metadataRaw = this.getNodeParameter('metadata', i, '{}') as string;
	let metadata: IDataObject = {};
	try {
		metadata = JSON.parse(metadataRaw);
	} catch {
		throw new Error('Metadata should be valid JSON');
	}

	if (!metadata.Grid) {
		throw new Error('Metadata must include "Grid" (4x4, 3x3, 1x1)');
	}
	if (!metadata.Task && !metadata.TaskDefinition) {
		throw new Error('Metadata must include either "Task" or "TaskDefinition"');
	}

	const imageUrlsRaw = this.getNodeParameter('imageUrls', i) as string;
	let imageUrls: string[] = [];
	if (imageUrlsRaw) {
		try {
			imageUrls = JSON.parse(imageUrlsRaw);
		} catch {
			throw new Error('Image URLs should be a valid JSON array');
		}
	}

	const imagesBase64Raw = this.getNodeParameter('imagesBase64', i, '[]') as string;
	let imagesBase64: string[] = [];
	if (imagesBase64Raw) {
		try {
			imagesBase64 = JSON.parse(imagesBase64Raw);
		} catch {
			throw new Error('Images Base64 should be a valid JSON array');
		}
	}

	if (imageUrls.length === 0 && imagesBase64.length === 0) {
		throw new Error('Either imageUrls or imagesBase64 must be provided');
	}

	return {
		type: 'ComplexImageTask',
		class: 'recaptcha',
		websiteUrl: this.getNodeParameter('websiteUrl', i),
		imageUrls: imageUrls.length ? imageUrls : undefined,
		imagesBase64: imagesBase64.length ? imagesBase64 : undefined,
		metadata,
		userAgent: this.getNodeParameter('userAgent', i, undefined),
	};
};
