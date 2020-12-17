export interface ResponseInterface {
  statusCode: number;
  message?: string;
  payload?: object | null;
  errors?: object | null;
  token?: string | null;
}
