import { IExecuteFunctions, INodeExecutionData } from "n8n-workflow";

export interface INodeContext {
	functionThis: IExecuteFunctions;
	items: INodeExecutionData[];
	i: number;
}
