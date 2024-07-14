import { fromClientResponse, toExn } from '../response';
export async function branchesSearch(client, input) {
    const response = await client.POST('/v1/branch/search', {
        body: input,
    });
    return fromClientResponse(response);
}
export async function branchesSearchExn(client, input) {
    const response = await branchesSearch(client, input);
    return toExn(response);
}
export async function branchGetDetails(client, input) {
    const response = await client.GET('/v1/branch/{branchId}', {
        params: {
            path: {
                branchId: input.branchId,
            },
        },
    });
    return fromClientResponse(response);
}
export async function branchGetDetailsExn(client, input) {
    const response = await branchGetDetails(client, input);
    return toExn(response);
}
