import pino from "pino";

const pinoLogger = pino({
  level: "debug",
});

export default function hello(): void {
  pinoLogger.info("Olá");
}
