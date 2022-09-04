import * as swc from "@swc/core";
import { readFile, writeFile } from "fs/promises";
import dts from "npm-dts";

const log = console.log;

const { Generator } = dts;
log(`
    ____        _ __    ___            
   / __ )__  __(_) /___/ (_)___  ____ _
  / __  / / / / / / __  / / __ \\/ __ \`/
 / /_/ / /_/ / / / /_/ / / / / / /_/ / 
/_____/\\__,_/_/_/\\__,_/_/_/ /_/\\__, /  
                              /____/  
`);

const compile = async () => {
  const code = await readFile("./src/index.ts", { encoding: "utf8" });
  const cliCode = await readFile("./src/cli.ts", { encoding: "utf8" });

  log("\n=== Started compiling ===");
  const es6Config: swc.Options = {
    jsc: {
      parser: {
        syntax: "typescript",
      },
      target: "es2020",
      preserveAllComments: true,
    },
    module: {
      type: "es6",
    },
  };
  const es6Out = await swc.transform(code, es6Config);
  const esCli6Out = await swc.transform(cliCode, es6Config);
  // change the module to commonjs
  es6Config.module.type = "commonjs";
  const cjsOut = await swc.transform(code, es6Config);

  // write the compiled code in lib dir
  await writeFile("./lib/index.js", es6Out.code);
  await writeFile("./lib/cli.js", esCli6Out.code);
  await writeFile("./lib/index.cjs", cjsOut.code);

  log("=== Compiling finished ===\n");

  log("\n=== Generating type definitions ===");
  await new Generator({ entry: "./src/index.ts", output: "./lib/" }).generate();
  log("=== Type definitions generated ===\n");
};

compile();
