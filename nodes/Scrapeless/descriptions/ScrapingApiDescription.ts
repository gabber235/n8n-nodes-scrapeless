import { INodeProperties } from "n8n-workflow";

export const scrapingApiFields: INodeProperties[] = [
	{
		displayName: 'Search Query',
		name: 'q',
		type: 'string',
		required: true,
		default: 'coffee',
		hint: "Parameter defines the query you want to search. You can use anything that you would use in a regular Google search. e.g. inurl:, site:, intitle:. We also support advanced search query parameters such as as_dt and as_eq.",
		displayOptions: {
			show: {
				resource: ['scrapingApi'],
				operation: ['googleSearch'],
			}
		},
	},
	{
		displayName: 'Language',
		name: 'hl',
		type: 'string',
		default: 'en',
		hint: "Parameter defines the language to use for the Google search. It's a two-letter language code. (e.g., en for English, es for Spanish, or fr for French).",
		displayOptions: {
			show: {
				resource: ['scrapingApi'],
				operation: ['googleSearch'],
			}
		},
	},
	{
		displayName: 'Country',
		name: 'gl',
		type: 'string',
		default: 'us',
		hint: "Parameter defines the country to use for the Google search. It's a two-letter country code. (e.g., us for the United States, uk for United Kingdom, or fr for France).",
		displayOptions: {
			show: {
				resource: ['scrapingApi'],
				operation: ['googleSearch'],
			}
		},
	},
]
