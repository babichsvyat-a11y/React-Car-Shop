interface IApiErrorData {
  message?: string;
  errors?: Array<{ message: string }>;
}

export default interface IApiErrorShape {
  message?: string;
  response?: {
    data?: IApiErrorData;
  };
}
