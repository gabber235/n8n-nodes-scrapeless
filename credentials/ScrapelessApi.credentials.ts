import { IAuthenticateGeneric, ICredentialTestRequest, ICredentialType, INodeProperties, Icon } from 'n8n-workflow';

export class ScrapelessApi implements ICredentialType {
	name = 'scrapelessApi';
	displayName = 'Scrapeless API';
	documentationUrl = 'https://docs.scrapeless.com/';
	icon = 'file:scrapeless.svg' as Icon;
	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			default: '',
		},
	];
	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			qs: {
				api_key: '={{$credentials.apiKey}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://backend.scrapeless.com/app/api',
			method: 'GET',
			url: '/v1/access-tokens/check/neQ1SREuZwIaaEinUkFcqMwTbMeDLix9',
		},
	};
}
