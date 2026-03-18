import { INodeProperties } from 'n8n-workflow';

export const funcaptchaFields: INodeProperties[] = [
	{
		displayName: 'Website URL',
		name: 'websiteURL',
		type: 'string',
		required: true,
		displayOptions: { show: { taskType: ['funcaptcha'] } },
		default: '',
		description: 'The URL of the page with FunCaptcha',
	},
	{
		displayName: 'Website Public Key',
		name: 'websitePublicKey',
		type: 'string',
		required: true,
		displayOptions: { show: { taskType: ['funcaptcha'] } },
		default: '',
		description: 'FunCaptcha public key for the website',
	},
	{
		displayName: 'FunCaptcha API JS Subdomain',
		name: 'funcaptchaApiJSSubdomain',
		type: 'string',
		required: true,
		displayOptions: { show: { taskType: ['funcaptcha'] } },
		default: '',
		description: 'The subdomain to load FunCaptcha API JS',
	},
	{
		displayName: 'Data',
		name: 'data',
		type: 'string',
		required: true,
		displayOptions: { show: { taskType: ['funcaptcha'] } },
		default: '',
		description: 'JSON blob with FunCaptcha data',
	},
	{
		displayName: 'User Agent',
		name: 'userAgent',
		type: 'string',
		required: true,
		displayOptions: { show: { taskType: ['funcaptcha'] } },
		default:
			'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36',
		description: 'User-Agent header',
	},
];
