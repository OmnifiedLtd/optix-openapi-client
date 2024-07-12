import { components } from "./generated"

export enum ErrorType {
  Unauthorized = 'Unauthorized',
  Forbidden = 'Forbidden',
  NotFound = 'Not Found',
  // Catch all
  Generic = 'Generic'
}

type ProblemDetails = components['schemas']['ProblemDetails']

type UnauthorizedError = {
  type: ErrorType.Unauthorized
} & ProblemDetails

type ForbiddenError = {
  type: ErrorType.Forbidden
} & ProblemDetails

type NotFoundError = {
  type: ErrorType.NotFound
} & ProblemDetails

type GenericError = {
  type: ErrorType.Generic,
  clientErrorType?: string | null;
  title?: string | null;
  status?: number | null;
  detail?: string | null;
  instance?: string | null;
}

export type ApiError =
  UnauthorizedError
  | ForbiddenError
  | NotFoundError
  | GenericError

export type ClientError = {
  type?: string | null;
  title?: string | null;
  status?: number | null;
  detail?: string | null;
  instance?: string | null;
}

export function fromClientError(error: ClientError): ApiError {
  console.log("client error", error)
  if (error.type === ErrorType.Unauthorized) {
    return {
      type: ErrorType.Unauthorized,
      title: error.title,
      status: error.status,
      detail: error.detail,
      instance: error.instance,
    }
  } else if (error.type === ErrorType.Forbidden) {
    return {
      type: ErrorType.Forbidden,
      title: error.title,
      status: error.status,
      detail: error.detail,
      instance: error.instance,
    }
  } else if (error.type === ErrorType.NotFound) {
    return {
      type: ErrorType.NotFound,
      title: error.title,
      status: error.status,
      detail: error.detail,
      instance: error.instance,
    }
  } else {
    return {
      type: ErrorType.Generic,
      clientErrorType: error.type,
      detail: error.detail,
      title: error.title,
      status: error.status,
      instance: error.instance,
    }
  }
}

// TODO: improve this to include more information
export function throwError(error: ApiError): void {
  if (error.type === ErrorType.Unauthorized) {
    throw new Error("Unauthorized")
  } else if (error.type === ErrorType.Forbidden) {
    throw new Error("Forbidden")
  } else if (error.type === ErrorType.NotFound) {
    throw new Error("Not Found")
  } else if (error.type === ErrorType.Generic) {
    throw new Error("Generic Error")
  }
}
