import { IDataObject, INodeExecutionData } from "n8n-workflow";
import { getRequestConfig, safeParseJson } from "../../common";
import { IHelpers, INodeContext } from "../../types";
import { UniversalService } from "../../libs/request";
import { UniversalJsRenderInput } from "../../types/universal";

export async function handleUniversalScrapingApiOperation(helpers: IHelpers, operation: string, context: INodeContext): Promise<INodeExecutionData> {
	switch (operation) {
		case 'webUnlocker':
			return await handleUniversalScrapingApiWebUnlocker(helpers, context);
		default:
			throw new Error(`Unsupported operation: ${operation}`);
	}
}

async function handleUniversalScrapingApiWebUnlocker(helpers: IHelpers, context: INodeContext): Promise<INodeExecutionData> {
	const { apiKey, baseUrl } = await getRequestConfig(context);


	const url = context.functionThis.getNodeParameter('url', context.i) as string;
	const jsRender = context.functionThis.getNodeParameter('jsRender', context.i) as boolean;
	const country = context.functionThis.getNodeParameter('country', context.i) as string;
	const jsInstructions = context.functionThis.getNodeParameter('jsInstructions', context.i) as any
	const block = context.functionThis.getNodeParameter('block', context.i) as any
	const headless = context.functionThis.getNodeParameter('headless', context.i) as boolean;

	const input: UniversalJsRenderInput = {
		url: url,
		block: safeParseJson(block),
		headless: headless,
		js_instructions: safeParseJson(jsInstructions),
		js_render: jsRender,
	}


	const client = new UniversalService({
		apiKey: apiKey,
		baseUrl: baseUrl,
		helpers: helpers
	})

	const res = await client.scrape({
		actor: 'unlocker.webunlocker',
		input: input,
		proxy: {
			country: country,
		}
	})


	const result = res || null

	return {
		json: result as unknown as IDataObject
	}
}
