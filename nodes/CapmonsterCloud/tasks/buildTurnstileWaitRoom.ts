import { IDataObject, IExecuteFunctions } from 'n8n-workflow';
import { getProxyFields } from './common';

export const buildTurnstileWaitRoom = function (this: IExecuteFunctions, i: number): IDataObject {
	return {
		type: 'TurnstileTask',
		websiteURL: this.getNodeParameter('websiteURL', i),
		websiteKey: this.getNodeParameter('websiteKey', i),
		cloudflareTaskType: 'wait_room',
		htmlPageBase64: this.getNodeParameter('htmlPageBase64', i),
		userAgent: this.getNodeParameter('userAgent', i),
		...getProxyFields.call(this, i),
	};
};
