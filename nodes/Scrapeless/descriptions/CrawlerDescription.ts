import { INodeProperties } from "n8n-workflow";

export const crawlerFields: INodeProperties[] = [
	{
		displayName: 'URL to Crawl',
		name: 'url',
		type: 'string',
		required: true,
		default: '',
		hint: 'If you want to crawl in batches, please refer to the SDK of the document',
		displayOptions: {
			show: {
				resource: ['crawler'],
				operation: ['scrape', 'crawl'],
			}
		},
		placeholder: 'https://example.com',
	},
	{
		displayName: 'Number Of Subpages',
		name: 'limitCrawlPages',
		type: 'number',
		required: true,
		default: 5,
		description: 'Max number of results to return',
		displayOptions: {
			show: {
				resource: ['crawler'],
				operation: ['crawl'],
			}
		},
		hint: 'You can only enter 100 subpages, while there is no limit in the SDK. For more details, please refer to the documentation.',
		typeOptions: {
			minValue: 1,
		},
		placeholder: '100',
	}
]
