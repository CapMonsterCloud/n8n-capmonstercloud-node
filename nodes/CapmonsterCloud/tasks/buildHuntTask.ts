import { IDataObject, IExecuteFunctions } from 'n8n-workflow';
import { getProxyFields } from './common';

export const buildHuntTask = function (this: IExecuteFunctions, i: number): IDataObject {
	const task: IDataObject = {
		type: 'CustomTask',
		class: 'HUNT',
		websiteURL: this.getNodeParameter('websiteURL', i),
		userAgent: this.getNodeParameter('userAgent', i),
		metadata: {
			apiGetLib: this.getNodeParameter('apiGetLib', i),
		},
	};

	return {
		...task,
		...getProxyFields.call(this, i),
	};
};
