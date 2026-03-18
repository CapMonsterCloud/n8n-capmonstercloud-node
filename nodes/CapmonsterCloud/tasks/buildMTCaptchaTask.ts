import { IDataObject, IExecuteFunctions } from 'n8n-workflow';
import { getProxyFields } from './common';

export const buildMTCaptchaTask = function (this: IExecuteFunctions, i: number): IDataObject {
	const task: IDataObject = {
		type: 'MTCaptchaTask',
		websiteURL: this.getNodeParameter('websiteURL', i),
		websiteKey: this.getNodeParameter('websiteKey', i),
		isInvisible: this.getNodeParameter('isInvisible', i),
		pageAction: this.getNodeParameter('pageAction', i),
	};

	return {
		...task,
		...getProxyFields.call(this, i),
	};
};
