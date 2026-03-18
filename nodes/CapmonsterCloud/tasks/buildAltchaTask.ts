import { IDataObject, IExecuteFunctions } from 'n8n-workflow';
import { getProxyFields } from './common';

export const buildAltchaTask = function (this: IExecuteFunctions, i: number): IDataObject {
	const task: IDataObject = {
		type: 'CustomTask',
		class: 'altcha',
		websiteURL: this.getNodeParameter('websiteURL', i),
		websiteKey: this.getNodeParameter('websiteKey', i) || undefined,
		userAgent: this.getNodeParameter('userAgent', i),
		metadata: {
			challenge: this.getNodeParameter('challenge', i),
			iterations: this.getNodeParameter('iterations', i),
			salt: this.getNodeParameter('salt', i),
			signature: this.getNodeParameter('signature', i),
		},
	};

	return {
		...task,
		...getProxyFields.call(this, i),
	};
};
