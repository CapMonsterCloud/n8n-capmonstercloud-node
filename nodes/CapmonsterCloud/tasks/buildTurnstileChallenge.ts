import { IDataObject, IExecuteFunctions } from 'n8n-workflow';
import { getProxyFields } from './common';

export const buildTurnstileChallenge = function (this: IExecuteFunctions, i: number): IDataObject {
	return {
		type: 'TurnstileTask',
		websiteURL: this.getNodeParameter('websiteURL', i),
		websiteKey: this.getNodeParameter('websiteKey', i),
		cloudflareTaskType: 'token',
		userAgent: this.getNodeParameter('userAgent', i),
		pageAction: this.getNodeParameter('pageAction', i, undefined),
		pageData: this.getNodeParameter('pageData', i, undefined),
		data: this.getNodeParameter('data', i, undefined),
		...getProxyFields.call(this, i),
	};
};
