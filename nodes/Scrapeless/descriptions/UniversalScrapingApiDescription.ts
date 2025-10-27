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
		displayName: 'Proxy Country',
		name: 'proxy_country',
		type: 'options',
		default: '',
		displayOptions: {
			show: {
				resource: ['universalScrapingApi'],
				operation: ['webUnlocker'],
			}
		},
		options: countryOptions.map((country) => ({
			name: country.label,
			value: country.value,
		})),
		hint: 'Select the country for proxy routing. Leave empty to use any available proxy.',
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
