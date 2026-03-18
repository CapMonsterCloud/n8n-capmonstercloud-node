import { IDataObject, IExecuteFunctions } from 'n8n-workflow';
import { getProxyFields } from './common';

export const buildBinanceTask = function (this: IExecuteFunctions, i: number): IDataObject {
	const task: IDataObject = {
		type: 'BinanceTask',
		websiteURL: this.getNodeParameter('websiteURL', i),
		websiteKey: this.getNodeParameter('websiteKey', i),
		validateId: this.getNodeParameter('validateId', i),
		userAgent: this.getNodeParameter('userAgent', i),
	};

	return {
		...task,
		...getProxyFields.call(this, i),
	};
};
