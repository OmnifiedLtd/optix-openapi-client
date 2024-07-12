import { ApiError, ClientError, ErrorType, fromClientError, throwError } from "./error"

export enum ApiResponseType {
  Success = "Success",
  Error = "Error",
}

export type ApiSuccessResponse<T> = {
  apiResponseType: ApiResponseType.Success
  data: T,
  // The raw response from the api
  // response: Response
}

export type ApiErrorResponse = {
  apiResponseType: ApiResponseType.Error,
  error: ApiError,
  // The raw response from the api
  // response: Response
}

export type ApiResponse<T> = {response: Response} & ( ApiSuccessResponse<T> | ApiErrorResponse)

export type ClientResponse<T> = {
  data?: T;
  error?: ClientError;
  response: Response;
}

export function fromClientResponse<T>(response: ClientResponse<T>): ApiResponse<T> {
  if (response.response?.status === 401) {
    return {
      apiResponseType: ApiResponseType.Error,
      error: {
        type: ErrorType.Unauthorized,
        title: "Unauthorized",
        status: response.response?.status,
        detail: response.response?.statusText,
        instance: response.response?.url,
      },
      response: response.response,
    }
  }
  if (response.response?.status === 400) {
    return {
      apiResponseType: ApiResponseType.Error,
      error: {
        type: ErrorType.BadRequest,
        title: "Bad Request",
        status: response.response?.status,
        detail: response.response?.statusText,
        instance: response.response?.url,
      },
      response: response.response,
    }
  }
  if (response.data) {
    return {
      apiResponseType: ApiResponseType.Success,
      data: response.data,
      response: response.response,
    }
  }
  if (response.error) {
    const error = fromClientError(response.error)
    return {
      apiResponseType: ApiResponseType.Error,
      error: error,
      response: response.response,
    }
  } else {
    // this should never happen
    return {
      apiResponseType: ApiResponseType.Error,
      error: {
        type: ErrorType.Generic,
        title: "No data or error returned from api",
      },
      response: response.response,
    }
  }
}

export function toExn<T>(response: ApiResponse<T>): T | void {
  // switch (response.apiResponseType) {
  //   case ApiResponseType.Error:
  //     throwError(response.error)
  //   case ApiResponseType.Success:
  //     // TODO: why does TS not infer this?
  //     const { data } = response
  //     return data
  // }
  if(response.apiResponseType === ApiResponseType.Error) {
    throwError(response.error)
  } else {
    const { data } = response
    return data
  }
}
