import { spawn } from "child_process";
import path from "path";

const testAppFilePath = path.join(__dirname, "./printLogger.ts");

const subProcess = spawn(`ts-node`, [testAppFilePath]);

subProcess.stdout.on("data", (data) => {
  const stdoutData = JSON.parse(data.toString());
  subProcess.kill("SIGINT");
});
