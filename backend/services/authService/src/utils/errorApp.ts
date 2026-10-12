class ErrorApp extends Error {
  path?: string;
  statusCode?: number;
  response?: any;
  isOperational?: boolean;

  constructor({
    message = "Inernal Server Error",
    statusCode = 500,
    path,
    response,
    isOperational = true,
  }: {
    message?: ErrorApp["message"];
    statusCode?: ErrorApp["statusCode"];
    path?: ErrorApp["path"];
    response?: ErrorApp["response"];
    isOperational?: ErrorApp["isOperational"];
  }) {
    super(message);
    this.statusCode = statusCode;
    this.path = path;
    this.response = response;
    this.isOperational = isOperational;

    Object.setPrototypeOf(this, new.target.prototype);
    Error.captureStackTrace?.(this, this.constructor);
  }

  static badRequest(message: string = "Client bad request") {
    return new ErrorApp({ message: message, statusCode: 400 });
  }

  static notFound(message: string = "Resource not found") {
    return new ErrorApp({ message: message, statusCode: 404 });
  }
}

export default ErrorApp;
