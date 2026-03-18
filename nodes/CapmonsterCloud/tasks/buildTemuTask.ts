import { IDataObject, IExecuteFunctions } from 'n8n-workflow';
import { getProxyFields } from './common';

export const buildTemuTask = function (this: IExecuteFunctions, i: number): IDataObject {
	const task: IDataObject = {
		type: 'TemuTask',
		class: 'Temu',
		websiteURL: this.getNodeParameter('websiteURL', i),
		userAgent: this.getNodeParameter('userAgent', i),
		metadata: {
			cookie: this.getNodeParameter('metadataCookie', i),
		},
	};

	return {
		...task,
		...getProxyFields.call(this, i),
	};
};
