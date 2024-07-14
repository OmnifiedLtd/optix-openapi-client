export function fromClientError(error) {
    if (error.status === 401) {
        return {
            type: 'Unauthorized',
            title: error.title,
            status: error.status,
            detail: error.detail,
            instance: error.instance,
        };
    }
    else if (error.status === 403) {
        return {
            type: 'Forbidden',
            title: error.title,
            status: error.status,
            detail: error.detail,
            instance: error.instance,
        };
    }
    else if (error.status === 404) {
        return {
            type: 'Not Found',
            title: error.title,
            status: error.status,
            detail: error.detail,
            instance: error.instance,
        };
    }
    else {
        return {
            type: 'Generic',
            clientErrorType: error.type,
            detail: error.detail,
            title: error.title,
            status: error.status,
            instance: error.instance,
        };
    }
}
