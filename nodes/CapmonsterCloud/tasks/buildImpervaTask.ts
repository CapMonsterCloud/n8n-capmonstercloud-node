import { IDataObject, IExecuteFunctions } from 'n8n-workflow';
import { getProxyFields } from './common';

export const buildImpervaTask = function (this: IExecuteFunctions, i: number): IDataObject {
	const task: IDataObject = {
		type: 'CustomTask',
		class: 'Imperva',
		websiteURL: this.getNodeParameter('websiteURL', i),
		userAgent: this.getNodeParameter('userAgent', i),
		metadata: {
			incapsulaScriptUrl: this.getNodeParameter('incapsulaScriptUrl', i),
			incapsulaCookies: this.getNodeParameter('incapsulaCookies', i),
			reese84UrlEndpoint: this.getNodeParameter('reese84UrlEndpoint', i),
		},
	};

	return {
		...task,
		...getProxyFields.call(this, i),
	};
};
