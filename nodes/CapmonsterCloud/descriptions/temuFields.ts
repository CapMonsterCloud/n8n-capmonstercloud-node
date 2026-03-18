import { INodeProperties } from 'n8n-workflow';

export const temuFields: INodeProperties[] = [
	{
		displayName: 'Website URL',
		name: 'websiteURL',
		type: 'string',
		required: true,
		displayOptions: { show: { taskType: ['temu'] } },
		default: '',
		description: 'The URL of the Temu verification page',
	},
	{
		displayName: 'User Agent',
		name: 'userAgent',
		type: 'string',
		required: true,
		displayOptions: { show: { taskType: ['temu'] } },
		default:
			'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36',
		description: 'User-Agent header to simulate the browser',
	},
	{
		displayName: 'Metadata Cookie',
		name: 'metadataCookie',
		type: 'string',
		required: true,
		displayOptions: { show: { taskType: ['temu'] } },
		default: '',
		description: 'Cookie string for Temu verification (use metadata.cookie)',
	},
];
