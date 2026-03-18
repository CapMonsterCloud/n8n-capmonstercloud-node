import { IDataObject, IExecuteFunctions } from 'n8n-workflow';
import { getProxyFields } from './common';

export const buildTspdTask = function (this: IExecuteFunctions, i: number): IDataObject {
	const task: IDataObject = {
		type: 'CustomTask',
		class: 'TSPD',
		websiteURL: this.getNodeParameter('websiteURL', i),
		userAgent: this.getNodeParameter('userAgent', i),
		metadata: {
			tspdCookie: this.getNodeParameter('tspdCookie', i),
			htmlPageBase64: this.getNodeParameter('htmlPageBase64', i),
		},
	};

	return {
		...task,
		...getProxyFields.call(this, i),
	};
};
