import { IDataObject, IExecuteFunctions } from 'n8n-workflow';
import { getProxyFields } from './common';

export const buildFunCaptchaTask = function (this: IExecuteFunctions, i: number): IDataObject {
	const task: IDataObject = {
		type: 'FunCaptchaTask',
		websiteURL: this.getNodeParameter('websiteURL', i),
		websitePublicKey: this.getNodeParameter('websitePublicKey', i),
		funcaptchaApiJSSubdomain: this.getNodeParameter('funcaptchaApiJSSubdomain', i),
		data: this.getNodeParameter('data', i),
		userAgent: this.getNodeParameter('userAgent', i),
	};

	return {
		...task,
		...getProxyFields.call(this, i),
	};
};
