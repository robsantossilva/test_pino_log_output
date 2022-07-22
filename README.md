``` bash
npm install

npm run test
```

tests/middleware/logging.request.handler.spec.ts
``` ts

/* 
Caminho do arquivo responsavel por gerar a saida do log 
*/
const testAppFilePath = path.join(
  __dirname,
  "../../server/middleware/print-logging.request.handler.ts"
);

/*
Gerando sub-processo
*/
const subProcess = spawn(`ts-node`, [testAppFilePath]);

/*
Capturando saido do log e reslizando testes
*/
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

```