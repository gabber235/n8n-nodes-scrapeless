import { INodeProperties } from "n8n-workflow";
import { countryOptions } from "../common";

export const universalScrapingApiFields: INodeProperties[] = [
	{
		displayName: 'Target URL',
		name: 'url',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['universalScrapingApi'],
				operation: ['webUnlocker'],
			}
		},
		placeholder: 'https://example.com',
	},
	{
		displayName: 'Js Render',
		name: 'jsRender',
		type: 'boolean',
		default: true,
		displayOptions: {
			show: {
				resource: ['universalScrapingApi'],
				operation: ['webUnlocker'],
			}
		},
	},
	{
		displayName: 'Headless',
		name: 'headless',
		type: 'boolean',
		default: true,
		displayOptions: {
			show: {
				resource: ['universalScrapingApi'],
				operation: ['webUnlocker'],
			}
		},
	},
	{
		displayName: 'Country',
		name: 'country',
		type: 'options',
		// eslint-disable-next-line n8n-nodes-base/node-param-default-wrong-for-options
		default: 'ANY',
		displayOptions: {
			show: {
				resource: ['universalScrapingApi'],
				operation: ['webUnlocker', 'jsRender'],
			}
		},
		options: countryOptions.map((country) => ({
			name: country.label,
			value: country.value,
		})),
	},
	{
		displayName: 'Js Instructions',
		name: 'jsInstructions',
		type: 'json',
		default: JSON.stringify([
			{
				"wait": 100
			}
		]),
		displayOptions: {
			show: {
				resource: ['universalScrapingApi'],
				operation: ['webUnlocker'],
			}
		},
	},
	{
		displayName: 'Block',
		name: 'block',
		type: 'json',
		default: JSON.stringify({
			"resources": [
				"image",
				"font",
				"script"
			],
			"urls": [
				"https://example.com"
			]
		}),
		displayOptions: {
			show: {
				resource: ['universalScrapingApi'],
				operation: ['webUnlocker'],
			}
		},
	},
]
