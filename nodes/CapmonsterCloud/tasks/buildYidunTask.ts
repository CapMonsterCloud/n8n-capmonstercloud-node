import { IDataObject, IExecuteFunctions } from 'n8n-workflow';
import { getProxyFields } from './common';

export const buildYidunTask = function (this: IExecuteFunctions, i: number): IDataObject {
	const task: IDataObject = {
		type: 'YidunTask',
		websiteURL: this.getNodeParameter('websiteURL', i),
		websiteKey: this.getNodeParameter('websiteKey', i),
		userAgent: this.getNodeParameter('userAgent', i),
	};

	return {
		...task,
		...getProxyFields.call(this, i),
	};
};
