import { INodeProperties } from 'n8n-workflow';
import { TaskType } from '../types';

const taskTypes: TaskType[] = [
	'recaptchaV2',
	'recaptchaV3',
	'recaptchaV2Enterprise',
	'recaptchaV3Enterprise',
	'geetest',
	'turnstile',
	'turnstileChallenge',
	'turnstileWaitRoom',
	'datadome',
	'basilisk',
	'tendi',
	'amazon',
	'binance',
	'imperva',
	'prosopo',
	'temu',
	'yidun',
	'mtcaptcha',
	'altcha',
	'funcaptcha',
	'castle',
	'tspd',
	'hunt',
];

export const proxyFields: INodeProperties[] = [
	{
		displayName: 'Use Proxy',
		name: 'useProxy',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				taskType: taskTypes,
			},
		},
	},
	{
		displayName: 'Proxy Type',
		name: 'proxyType',
		type: 'options',
		options: [
			{ name: 'HTTP', value: 'http' },
			{ name: 'HTTPS', value: 'https' },
			{ name: 'SOCKS5', value: 'socks5' },
		],
		default: 'http',
		displayOptions: {
			show: {
				useProxy: [true],
				taskType: ['recaptchaV2', 'recaptchaV3'],
			},
		},
	},
	{
		displayName: 'Proxy Address',
		name: 'proxyAddress',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				useProxy: [true],
				taskType: taskTypes,
			},
		},
		description: 'IP/hostname proxy. Example: 1.2.3.4 или proxy.example.com.',
	},
	{
		displayName: 'Proxy Port',
		name: 'proxyPort',
		type: 'number',
		default: 8080,
		displayOptions: {
			show: {
				useProxy: [true],
				taskType: taskTypes,
			},
		},
	},
	{
		displayName: 'Proxy Login',
		name: 'proxyLogin',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				useProxy: [true],
				taskType: taskTypes,
			},
		},
	},
	{
		displayName: 'Proxy Password',
		name: 'proxyPassword',
		type: 'string',
		typeOptions: { password: true },
		default: '',
		displayOptions: {
			show: {
				useProxy: [true],
				taskType: taskTypes,
			},
		},
	},
];
