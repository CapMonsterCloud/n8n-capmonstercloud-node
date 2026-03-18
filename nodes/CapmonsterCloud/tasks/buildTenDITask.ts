import { IDataObject, IExecuteFunctions } from 'n8n-workflow';
import { getProxyFields } from './common';

export const buildTenDITask = function (this: IExecuteFunctions, i: number): IDataObject {
	const metadata = this.getNodeParameter('captchaUrl', i)
		? { captchaUrl: this.getNodeParameter('captchaUrl', i) }
		: undefined;

	return {
		type: 'CustomTask',
		class: 'TenDI',
		websiteURL: this.getNodeParameter('websiteURL', i),
		websiteKey: this.getNodeParameter('websiteKey', i),
		userAgent: this.getNodeParameter('userAgent', i),
		...(metadata ? { metadata } : {}),
		...getProxyFields.call(this, i),
	};
};
