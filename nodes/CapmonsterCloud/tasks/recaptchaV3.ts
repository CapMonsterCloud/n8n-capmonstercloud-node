import { IDataObject, IExecuteFunctions } from 'n8n-workflow';
import { getProxyFields } from './common';

export const buildRecaptchaV3 = function (this: IExecuteFunctions, i: number): IDataObject {


	return {
		type: 'RecaptchaV3Task',
		websiteURL: this.getNodeParameter('websiteURL', i),
		websiteKey: this.getNodeParameter('websiteKey', i),
		minScore: this.getNodeParameter('minScore', i),
		pageAction: this.getNodeParameter('pageAction', i),
		isEnterprise: this.getNodeParameter('isEnterprise', i),
		...getProxyFields.call(this, i),
	};
};