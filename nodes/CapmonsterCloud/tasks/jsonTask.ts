import { IExecuteFunctions, IDataObject, NodeOperationError } from 'n8n-workflow';

export const buildJsonTask = function (this: IExecuteFunctions, i: number): IDataObject {
	const raw = this.getNodeParameter('taskJson', i) as string;

	try {
		const parsed = JSON.parse(raw) as IDataObject;

		if (!parsed.type) {
			throw new Error('Missing "type" field');
		}

		return parsed;
	} catch (error) {
		throw new NodeOperationError(this.getNode(), `Invalid JSON: ${(error as Error).message}`, {
			itemIndex: i,
		});
	}
};
