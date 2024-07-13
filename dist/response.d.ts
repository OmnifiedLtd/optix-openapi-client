import { ApiError, ClientError } from "./error";
export type ApiSuccessResponse<T> = {
    type: "Success";
    data: T;
    response: Response;
};
export type ApiErrorResponse = {
    type: "Error";
    error: ApiError;
    response: Response;
};
export type ApiResponse<T> = ApiSuccessResponse<T> | ApiErrorResponse;
export type ClientResponse<T> = {
    data?: T;
    error?: ClientError;
    response: Response;
};
export declare function fromClientResponse<T>(response: ClientResponse<T>): ApiResponse<T>;
export declare function toExn<T>(response: ApiResponse<T>): T;
