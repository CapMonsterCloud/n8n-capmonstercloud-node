import { IDataObject, IExecuteFunctions } from 'n8n-workflow';
import { getProxyFields } from './common';

export const buildGeeTest = function (this: IExecuteFunctions, i: number): IDataObject {
	return {
		type: 'GeeTestTask',
		websiteURL: this.getNodeParameter('websiteURL', i),
		gt: this.getNodeParameter('gt', i),
		challenge: this.getNodeParameter('challenge', i),
		geetestApiServerSubdomain: this.getNodeParameter('geetestApiServerSubdomain', i),
		userAgent: this.getNodeParameter('userAgent', i, undefined),
		...getProxyFields.call(this, i),
	};
};
