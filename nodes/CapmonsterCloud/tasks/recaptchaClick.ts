import { IDataObject, IExecuteFunctions } from 'n8n-workflow';

export const buildRecaptchaClick = function (this: IExecuteFunctions, i: number): IDataObject {
	const metadataRaw = this.getNodeParameter('metadata', i, '{}') as string;
	let metadata: IDataObject = {};
	try {
		metadata = JSON.parse(metadataRaw);
	} catch {
		throw new Error('Metadata should be valid JSON');
	}

	const imageUrlsRaw = this.getNodeParameter('imageUrls', i) as string;
	let imageUrls: string[] = [];
	try {
		imageUrls = JSON.parse(imageUrlsRaw);
	} catch  {
		throw new Error('Image URLs should be valid JSON array');
	}

	return {
		type: 'ComplexImageTask',
		class: 'recaptcha',
		websiteUrl: this.getNodeParameter('websiteUrl', i),
		imageUrls,
		metadata,
		userAgent: this.getNodeParameter('userAgent', i, undefined),
	};
};
