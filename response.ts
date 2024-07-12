import { ApiError, ClientError, fromClientError } from "./error"


export type ApiSuccessResponse<T> = {
  type: "Success"
  data: T
  response: Response
}

export type ApiErrorResponse = {
  type: "Error"
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
      type: 'Error',
      error: {
        type: 'Unauthorized',
        title: 'Unauthorized',
        status: response.response?.status,
        detail: response.response?.statusText,
        instance: response.response?.url,
      },
      response: response.response,
    }
  }
  if (response.response?.status === 400) {
    return {
      type: 'Error',
      error: {
        type: 'Bad Request',
        title: 'Bad Request',
        status: response.response?.status,
        detail: response.response?.statusText,
        instance: response.response?.url,
      },
      response: response.response,
    }
  }
  if (response.data) {
    return {
      type: 'Success',
      data: response.data,
      response: response.response,
    }
  }
  if (response.error) {
    const error = fromClientError(response.error)
    return {
      type: 'Error',
      error: error,
      response: response.response,
    }
  } else {
    // this should never happen
    return {
      type: 'Error',
      error: {
        type: 'Generic',
        title: "No data or error returned from api",
      },
      response: response.response,
    }
  }
}

// TODO: add more info to errors
export function toExn<T>(response: ApiResponse<T>): T {
  switch (response.type) {
    case 'Success':
      return response.data
    case 'Error':
      const error = response.error
      switch (error.type) {
        case 'Unauthorized':
          throw new Error("Unauthorized")
        case 'Forbidden':
          throw new Error("Forbidden")
        case 'Not Found':
          throw new Error("Not Found")
        case 'Generic':
          throw new Error("Generic Error")
      }
      throw new Error("Unknown Error")
  }
}
