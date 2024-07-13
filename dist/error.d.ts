import { components } from "./generated";
type ProblemDetails = components['schemas']['ProblemDetails'];
type BadRequestError = {
    type: 'Bad Request';
} & ProblemDetails;
type UnauthorizedError = {
    type: 'Unauthorized';
} & ProblemDetails;
type ForbiddenError = {
    type: 'Forbidden';
} & ProblemDetails;
type NotFoundError = {
    type: 'Not Found';
} & ProblemDetails;
type GenericError = {
    type: 'Generic';
    clientErrorType?: string | null;
    title?: string | null;
    status?: number | null;
    detail?: string | null;
    instance?: string | null;
};
export type ApiError = BadRequestError | ForbiddenError | NotFoundError | UnauthorizedError | GenericError;
export type ClientError = {
    type?: string | null;
    title?: string | null;
    status?: number | null;
    detail?: string | null;
    instance?: string | null;
};
export declare function fromClientError(error: ClientError): ApiError;
export {};
