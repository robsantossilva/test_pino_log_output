import loggingRequestHandler from "./logging.request.handler";

type Request = {
  method: string;
  url: string;
  body: string;
  headers: string;
  originalUrl: string;
};

type Response = {};

type NextHandler = () => any;

const request: Request = {
  method: "POST",
  url: "http://localhost/test",
  body: "Olá",
  headers: "Content-Type: application/json",
  originalUrl: "http://localhost/test",
};

const response: Response = {};

const nextHandler: NextHandler = () => {};

loggingRequestHandler(request, response, nextHandler);
