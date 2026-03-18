import { IExecuteFunctions, IDataObject } from 'n8n-workflow';

export const buildImageToText = function (this: IExecuteFunctions, i: number): IDataObject {
	return {
		type: 'ImageToTextTask',
		body: this.getNodeParameter('body', i),
	};
};
