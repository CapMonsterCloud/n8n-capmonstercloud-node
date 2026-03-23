import { INodeProperties, IDataObject, IExecuteFunctions } from 'n8n-workflow';
import { getProxyFields } from '../proxy';

export const recaptchaV3Enterprise: INodeProperties[] = [
	{
		displayName: 'Website URL',
		name: 'websiteURL',
		type: 'string',
		required: true,
		displayOptions: { show: { operation: ['recaptchaV3Enterprise'] } },
		default: '',
	},
	{
		displayName: 'Website Key',
		name: 'websiteKey',
		type: 'string',
		required: true,
		displayOptions: { show: { operation: ['recaptchaV3Enterprise'] } },
		default: '',
		description: 'Site key ReCaptcha V3 Enterprise',
	},
	{
		displayName: 'Minimum Score',
		name: 'minScore',
		type: 'number',
		typeOptions: {
			minValue: 0.1,
			maxValue: 0.9,
			numberStep: 0.1,
		},
		displayOptions: { show: { operation: ['recaptchaV3Enterprise'] } },
		default: 0.3,
		description: 'Minimum score from 0.1 to 0.9',
	},
	{
		displayName: 'Page Action',
		name: 'pageAction',
		type: 'string',
		displayOptions: { show: { operation: ['recaptchaV3Enterprise'] } },
		default: 'verify',
		description: 'Action parameter passed by the ReCaptcha widget (e.g. login_test)',
	},
];

export const buildRecaptchaV3Enterprise = function (
	this: IExecuteFunctions,
	i: number,
): IDataObject {
	const result: IDataObject = {
		type: 'RecaptchaV3EnterpriseTask',
		websiteURL: this.getNodeParameter('websiteURL', i),
		websiteKey: this.getNodeParameter('websiteKey', i),
		...getProxyFields.call(this, i),
	};

	const minScore = this.getNodeParameter('minScore', i, 0.3) as number;
	if (minScore) result.minScore = minScore;

	const pageAction = this.getNodeParameter('pageAction', i, 'verify') as string;
	if (pageAction) result.pageAction = pageAction;

	return result;
};
