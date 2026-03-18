import { IDataObject, IExecuteFunctions } from 'n8n-workflow';
import { getProxyFields } from './common';

export const buildDataDome = function (this: IExecuteFunctions, i: number): IDataObject {
	return {
		type: 'CustomTask',
		class: 'DataDome',
		websiteURL: this.getNodeParameter('websiteURL', i),
		userAgent: this.getNodeParameter('userAgent', i),
		metadata: {
			captchaUrl: this.getNodeParameter('captchaUrl', i),
			datadomeCookie: this.getNodeParameter('datadomeCookie', i),
			datadomeVersion: this.getNodeParameter('datadomeVersion', i),
		},
		...getProxyFields.call(this, i),
	};
};
