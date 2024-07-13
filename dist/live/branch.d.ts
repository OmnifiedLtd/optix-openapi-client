import { newAuthenticatedClient } from './client';
import type { components } from '../generated';
import { ApiResponse } from '../response';
export type BranchSearchRequest = components['schemas']['SearchBranchesRequest'];
export type BranchSearchResponse = components['schemas']['BranchIPagedResult'];
export declare function branchesSearch(client: ReturnType<typeof newAuthenticatedClient>, input: BranchSearchRequest): Promise<ApiResponse<BranchSearchResponse>>;
export declare function branchesSearchExn(client: ReturnType<typeof newAuthenticatedClient>, input: BranchSearchRequest): Promise<BranchSearchResponse>;
export type BranchDetailsRequest = {
    branchId: string;
};
export type BranchDetailsResponse = components['schemas']['BranchDetailsResponse'];
export declare function branchGetDetails(client: ReturnType<typeof newAuthenticatedClient>, input: BranchDetailsRequest): Promise<ApiResponse<BranchDetailsResponse>>;
export declare function branchGetDetailsExn(client: ReturnType<typeof newAuthenticatedClient>, input: BranchDetailsRequest): Promise<BranchDetailsResponse>;
