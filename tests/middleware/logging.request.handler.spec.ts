import { expect } from "chai";
import { spawn } from "child_process";
import path from "path";

describe("Middleware Tests", () => {
  // the tests container
  it("Should receive a Logger message in a pino logger output", () => {
    const testAppFilePath = path.join(
      __dirname,
      "../../server/middleware/print-logging.request.handler.ts"
    );

    const subProcess = spawn(`ts-node`, [testAppFilePath]);

    subProcess.stdout.on("data", (data) => {
      const stdoutData = JSON.parse(data.toString());
      const msg = JSON.parse(stdoutData.msg.replace("API Request ", ""));

      expect(msg).to.deep.equal([
        { key: "method", value: "POST" },
        { key: "data", value: { url: "http://localhost/test", body: "Olá" } },
        { key: "headers", value: "Content-Type: application/json" },
        { key: "url", value: "http://localhost/test" },
      ]);

      subProcess.kill("SIGINT");
    });
  });
});
