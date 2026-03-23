import { INodeProperties, IDataObject, IExecuteFunctions } from 'n8n-workflow';
import { getProxyFields } from '../proxy';
import { userAgent as defaultUserAgent } from '../const';

export const geeTestV4Fields: INodeProperties[] = [
	{
		displayName: 'Website URL',
		name: 'websiteURL',
		type: 'string',
		required: true,
		displayOptions: { show: { operation: ['geeTestV4'] } },
		default: '',
		description: 'Whether Address of the page on which the captcha is solved',
	},
	{
		displayName: 'GT',
		name: 'gt',
		type: 'string',
		required: true,
		displayOptions: { show: { operation: ['geeTestV4'] } },
		default: '',
		description: 'Whether The GeeTest identifier key for the domain - the captcha_id parameter',
	},
	{
		displayName: 'Geetest API Subdomain',
		name: 'geetestApiServerSubdomain',
		type: 'string',
		displayOptions: { show: { operation: ['geeTestV4'] } },
		default: '',
		description:
			'Geetest API subdomain server (must be different from api.geetest.com). Optional parameter, required for some sites.',
	},
	{
		displayName: 'Geetest Get Lib',
		name: 'geetestGetLib',
		type: 'string',
		typeOptions: { editor: 'codeNodeEditor', rows: 3 },
		displayOptions: { show: { operation: ['geeTestV4'] } },
		default: '',
		description: 'Path to the captcha script to display it on the page. Send JSON as a string.',
	},
	{
		displayName: 'Init Parameters',
		name: 'initParameters',
		type: 'json',
		displayOptions: { show: { operation: ['geeTestV4'] } },
		default: {},
		description:
			'Whether Additional parameters for version 4, used together with “riskType” (captcha type/characteristics of its verification)',
	},
	{
		displayName: 'User Agent',
		name: 'userAgent',
		type: 'string',
		displayOptions: { show: { operation: ['geeTestV4'] } },
		default: defaultUserAgent,
		description: 'Whether Browser User-Agent used to recognize captcha',
	},
];

export const buildGeeTestV4 = function (this: IExecuteFunctions, i: number): IDataObject {
	const result: IDataObject = {
		type: 'GeeTestTask',
		version: 4,
		websiteURL: this.getNodeParameter('websiteURL', i),
		gt: this.getNodeParameter('gt', i),
		...getProxyFields.call(this, i),
	};

	const subdomain = this.getNodeParameter('geetestApiServerSubdomain', i, '') as string;
	if (subdomain) result.geetestApiServerSubdomain = subdomain;

	const getLib = this.getNodeParameter('geetestGetLib', i, '') as string;
	if (getLib) result.geetestGetLib = getLib;

	const initParams = this.getNodeParameter('initParameters', i, {}) as object;
	if (initParams && Object.keys(initParams).length > 0) result.initParameters = initParams;

	const ua = this.getNodeParameter('userAgent', i, '') as string;
	if (ua) result.userAgent = ua;

	return result;
};
