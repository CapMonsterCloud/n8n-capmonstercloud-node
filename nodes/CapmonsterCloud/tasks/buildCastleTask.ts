import { IDataObject, IExecuteFunctions } from 'n8n-workflow';
import { getProxyFields } from './common';

export const buildCastleTask = function (this: IExecuteFunctions, i: number): IDataObject {
	const task: IDataObject = {
		type: 'CustomTask',
		class: 'Castle',
		websiteURL: this.getNodeParameter('websiteURL', i),
		websiteKey: this.getNodeParameter('websiteKey', i),
		userAgent: this.getNodeParameter('userAgent', i),
		metadata: {
			wUrl: this.getNodeParameter('wUrl', i),
			swUrl: this.getNodeParameter('swUrl', i),
			count: this.getNodeParameter('count', i),
		},
	};

	return {
		...task,
		...getProxyFields.call(this, i),
	};
};
