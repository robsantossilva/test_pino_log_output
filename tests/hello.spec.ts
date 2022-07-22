import { expect } from "chai";
import { spawn } from "child_process";
import path from "path";

describe("Pino Tests", () => {
  // the tests container
  it("Should receive a 'Olá' message in a pino logger output", () => {
    const testAppFilePath = path.join(__dirname, "../server/printLogger.ts");

    const subProcess = spawn(`ts-node`, [testAppFilePath]);

    subProcess.stdout.on("data", (data) => {
      const stdoutData = JSON.parse(data.toString());
      expect(stdoutData.msg).to.equal("Olá");
      subProcess.kill("SIGINT");
    });
  });
});
