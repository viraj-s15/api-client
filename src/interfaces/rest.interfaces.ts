interface IRequest {
  headers?: {
    [key: string]: string;
  }[];
  method: string;
  url: string;
  body?: any;
}

export interface IRestRequest {
  id: string;
  name: string;
  description: string;
  request: IRequest;
}

export interface IRestResponnse {
  data: any;
  status: number;
  headers: any;
}
