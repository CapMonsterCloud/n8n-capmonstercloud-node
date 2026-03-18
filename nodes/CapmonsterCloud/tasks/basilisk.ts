import { IDataObject, IExecuteFunctions } from 'n8n-workflow';
import { getProxyFields } from './common';

export const buildBasiliskTask = function (this: IExecuteFunctions, i: number): IDataObject {
	return {
		type: 'CustomTask',
		class: 'Basilisk',
		websiteURL: this.getNodeParameter('websiteURL', i),
		websiteKey: this.getNodeParameter('websiteKey', i),
		userAgent: this.getNodeParameter('userAgent', i),
		...getProxyFields.call(this, i),
	};
};
