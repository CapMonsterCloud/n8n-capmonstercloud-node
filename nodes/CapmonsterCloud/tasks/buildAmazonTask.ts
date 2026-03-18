import { IDataObject, IExecuteFunctions } from 'n8n-workflow';
import { getProxyFields } from './common';

export const buildAmazonTask = function (this: IExecuteFunctions, i: number): IDataObject {
	const task: IDataObject = {
		type: 'AmazonTask',
		websiteURL: this.getNodeParameter('websiteURL', i),
		userAgent: this.getNodeParameter('userAgent', i),
		captchaScript: this.getNodeParameter('captchaScript', i),
		challengeScript: this.getNodeParameter('challengeScript', i),
		websiteKey: this.getNodeParameter('websiteKey', i),
		context: this.getNodeParameter('context', i),
		iv: this.getNodeParameter('iv', i),
		cookieSolution: this.getNodeParameter('cookieSolution', i),
	};

	return {
		...task,
		...getProxyFields.call(this, i),
	};
};
