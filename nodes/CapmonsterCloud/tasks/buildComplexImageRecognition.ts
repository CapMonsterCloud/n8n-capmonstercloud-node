import { IDataObject, IExecuteFunctions } from 'n8n-workflow';

export const buildComplexImageRecognition = function (
	this: IExecuteFunctions,
	i: number,
): IDataObject {
	const imagesRaw = this.getNodeParameter('imagesBase64', i) as string;
	const metadataRaw = this.getNodeParameter('metadata', i) as string;

	let imagesBase64: string[] = [];
	let metadata: IDataObject = {};

	try {
		imagesBase64 = JSON.parse(imagesRaw);
		if (!Array.isArray(imagesBase64)) {
			throw new Error('Images must be an array');
		}
	} catch (error) {
		throw new Error(error.message);
	}

	try {
		metadata = JSON.parse(metadataRaw);
	} catch {
		throw new Error('metadata должен быть валидным JSON');
	}

	return {
		type: 'ComplexImageTask',
		class: 'recognition',
		imagesBase64,
		metadata,
	};
};
