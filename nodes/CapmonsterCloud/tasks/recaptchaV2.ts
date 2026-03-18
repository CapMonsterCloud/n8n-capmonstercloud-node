import { IDataObject, IExecuteFunctions } from 'n8n-workflow';
import { getProxyFields } from './common';

export const buildRecaptchaV2 = function (this: IExecuteFunctions, i: number): IDataObject {
	return {
		type: 'RecaptchaV2Task',
		websiteURL: this.getNodeParameter('websiteURL', i),
		websiteKey: this.getNodeParameter('websiteKey', i),
		...getProxyFields.call(this, i),
	};
};