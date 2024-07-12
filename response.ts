import { ApiError, ClientError, ErrorType, fromClientError } from "./error"


export type ApiSuccessResponse<T> = {
  apiResponseType: "success"
  data: T
  response: Response
}

export type ApiErrorResponse = {
  apiResponseType: "error"
  error: ApiError
  response: Response
}

export type ApiResponse<T> = ApiSuccessResponse<T> | ApiErrorResponse

export type ClientResponse<T> = {
  data?: T;
  error?: ClientError;
  response: Response
}

export function fromClientResponse<T>(response: ClientResponse<T>): ApiResponse<T> {
  if (response.response?.status === 401) {
    return {
      apiResponseType: 'error',
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
      apiResponseType: 'error',
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
      apiResponseType: 'success',
      data: response.data,
      response: response.response,
    }
  }
  if (response.error) {
    const error = fromClientError(response.error)
    return {
      apiResponseType: 'error',
      error: error,
      response: response.response,
    }
  } else {
    // this should never happen
    return {
      apiResponseType: 'error',
      error: {
        type: ErrorType.Generic,
        title: "No data or error returned from api",
      },
      response: response.response,
    }
  }
}

export function toExn<T>(response: ApiResponse<T>): T {
  switch (response.apiResponseType) {
    case 'success':
      return response.data
    case 'error':
      const error = response.error
      if (error.type === ErrorType.Unauthorized) {
        throw new Error("Unauthorized")
      } else if (error.type === ErrorType.Forbidden) {
        throw new Error("Forbidden")
      } else if (error.type === ErrorType.NotFound) {
        throw new Error("Not Found")
      } else if (error.type === ErrorType.Generic) {
        throw new Error("Generic Error")
      }
      throw new Error("Unknown Error")
  }
}
