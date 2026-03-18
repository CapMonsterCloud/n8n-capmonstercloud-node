import { IDataObject, IExecuteFunctions } from 'n8n-workflow';
import { getProxyFields } from './common';

export const buildTurnstile = function (this: IExecuteFunctions, i: number): IDataObject {
	return {
		type: 'TurnstileTask',
		websiteURL: this.getNodeParameter('websiteURL', i),
		websiteKey: this.getNodeParameter('websiteKey', i),
		...getProxyFields.call(this, i),
	};
};
