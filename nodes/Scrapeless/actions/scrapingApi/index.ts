import { IDataObject, INodeExecutionData } from "n8n-workflow";
import { getRequestConfig } from "../../common";
import { INodeContext } from "../../types";
import { ScrapelessClient } from "@scrapeless-ai/sdk";

export async function handleScrapingApiOperation(operation: string, context: INodeContext): Promise<INodeExecutionData> {
	switch (operation) {
		case 'googleSearch':
			return await handleScrapingApiGoogleSearch(context);
		default:
			throw new Error(`Unsupported operation: ${operation}`);
	}
}

async function handleScrapingApiGoogleSearch(context: INodeContext): Promise<INodeExecutionData> {
	const { apiKey } = await getRequestConfig(context);

	const q = context.functionThis.getNodeParameter('q', context.i) as string;
	const hl = context.functionThis.getNodeParameter('hl', context.i) as string;
	const gl = context.functionThis.getNodeParameter('gl', context.i) as string;

	const input = {
		q: q,
		hl: hl,
		gl: gl,
	}

	const client = new ScrapelessClient({
		apiKey: apiKey,
	})

	const task = await client.deepserp.createTask({
    actor: 'scraper.google.search',
    input: input,
  });
  if (task.status === 200) {
    return {
			json: task.data as unknown as IDataObject
		}
  }

  while (true) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    const result = await client.deepserp.getTaskResult(task.data.taskId);
    if (result.status === 200) {
      return {
				json: result.data as unknown as IDataObject
			}
    }
  }
}
