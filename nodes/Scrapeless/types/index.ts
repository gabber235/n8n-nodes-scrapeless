import { IExecuteFunctions, INodeExecutionData } from "n8n-workflow";

export interface INodeContext {
	functionThis: IExecuteFunctions;
	items: INodeExecutionData[];
	i: number;
}

export type IHelpers = IExecuteFunctions['helpers'];

export type RequestResponse<T, R extends boolean> = R extends true ? { status: number; data: T } : T;

export interface ScrapelessConfig {
	baseApiUrl?: string;
	actorApiUrl?: string;
	storageApiUrl?: string;
	browserApiUrl?: string;
	scrapingCrawlApiUrl?: string;
	helpers: IHelpers;
	apiKey: string;
	timeout?: number;
}

