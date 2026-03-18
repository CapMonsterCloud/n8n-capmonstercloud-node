import { IDataObject, IExecuteFunctions } from 'n8n-workflow';

export const buildRecaptchaV3Enterprise = function (
	this: IExecuteFunctions,
	i: number,
): IDataObject {
	return {
		type: 'RecaptchaV3EnterpriseTask',
		websiteURL: this.getNodeParameter('websiteURL', i),
		websiteKey: this.getNodeParameter('websiteKey', i),
		minScore: this.getNodeParameter('minScore', i, 0.3),
	};
};
