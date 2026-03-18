import { IDataObject, IExecuteFunctions } from 'n8n-workflow';
import { getProxyFields } from './common';

export const buildRecaptchaV2Enterprise = function (
	this: IExecuteFunctions,
	i: number,
): IDataObject {
	const enterprisePayloadRaw = this.getNodeParameter('enterprisePayload', i, '{}') as string;
	let enterprisePayload: IDataObject = {};
	try {
		enterprisePayload = JSON.parse(enterprisePayloadRaw);
	} catch  {
		throw new Error('Enterprise Payload should be valid JSON');
	}

	return {
		type: 'RecaptchaV2EnterpriseTask',
		websiteURL: this.getNodeParameter('websiteURL', i),
		websiteKey: this.getNodeParameter('websiteKey', i),
		enterprisePayload,
		userAgent: this.getNodeParameter('userAgent', i, undefined) as string | undefined,
		...getProxyFields.call(this, i),
	};
};
