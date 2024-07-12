import { components } from "./generated"

type ProblemDetails = components['schemas']['ProblemDetails']

type BadRequestError = {
  type: 'Bad Request'
} & ProblemDetails

type UnauthorizedError = {
  type: 'Unauthorized'
} & ProblemDetails

type ForbiddenError = {
  type: 'Forbidden'
} & ProblemDetails

type NotFoundError = {
  type: 'Not Found'
} & ProblemDetails

type GenericError = {
  type: 'Generic',
  clientErrorType?: string | null;
  title?: string | null;
  status?: number | null;
  detail?: string | null;
  instance?: string | null;
}

export type ApiError =
  BadRequestError
  | ForbiddenError
  | NotFoundError
  | UnauthorizedError
  | GenericError

export type ClientError = {
  type?: string | null;
  title?: string | null;
  status?: number | null;
  detail?: string | null;
  instance?: string | null;
}

export function fromClientError(error: ClientError): ApiError {
  if (error.status === 401) {
    return {
      type: 'Unauthorized',
      title: error.title,
      status: error.status,
      detail: error.detail,
      instance: error.instance,
    }
  } else if (error.status === 403) {
    return {
      type: 'Forbidden',
      title: error.title,
      status: error.status,
      detail: error.detail,
      instance: error.instance,
    }
  } else if (error.status === 404) {
    return {
      type: 'Not Found',
      title: error.title,
      status: error.status,
      detail: error.detail,
      instance: error.instance,
    }
  } else {
    return {
      type: 'Generic',
      clientErrorType: error.type,
      detail: error.detail,
      title: error.title,
      status: error.status,
      instance: error.instance,
    }
  }
}

