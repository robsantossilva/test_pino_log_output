import pino from "pino";

const Logger = pino({
  name: "pino_test_output",
  level: "debug",
  useLevelLabels: true,
  enabled: true,
});

export default function loggingRequestHandler(req, res, next): void {
  if (req) {
    Logger.info("API Request", [
      { key: "method", value: req.method },
      { key: "data", value: { url: req.url, body: req.body } },
      { key: "headers", value: req.headers },
      { key: "url", value: req.originalUrl },
    ]);
  }

  return next();
}
