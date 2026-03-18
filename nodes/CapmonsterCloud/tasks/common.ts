import { IExecuteFunctions, IDataObject } from 'n8n-workflow';

export const getProxyFields = function (
	this: IExecuteFunctions,
	i: number,
): IDataObject {
	const useProxy = this.getNodeParameter('useProxy', i, false) as boolean;
	if (!useProxy) return {};

	const proxyType = this.getNodeParameter('proxyType', i, undefined) as string | undefined;
	const proxyAddress = this.getNodeParameter('proxyAddress', i, undefined) as string | undefined;
	const proxyPort = this.getNodeParameter('proxyPort', i, undefined) as number | undefined;
	const proxyLogin = this.getNodeParameter('proxyLogin', i, undefined) as string | undefined;
	const proxyPassword = this.getNodeParameter('proxyPassword', i, undefined) as string | undefined;

	if (!proxyType || !proxyAddress || !proxyPort) return {};

	return {
		proxyType,
		proxyAddress,
		proxyPort,
		...(proxyLogin ? { proxyLogin } : {}),
		...(proxyPassword ? { proxyPassword } : {}),
	};
};
