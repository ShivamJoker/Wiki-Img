import * as TypeDoc from "typedoc";
import { concatMdSync } from "concat-md";

import { writeFile } from "node:fs/promises";

const log = console.log;

const generateDocs = async () => {
  const app = new TypeDoc.Application();

  // If you want TypeDoc to load tsconfig.json / typedoc.json files
  app.options.addReader(new TypeDoc.TSConfigReader());
  app.options.addReader(new TypeDoc.TypeDocReader());

  app.bootstrap({
    // typedoc options here
    entryPoints: ["./src/index.ts"],
    plugin: ["typedoc-plugin-markdown"],
    readme: "none",
    name: "How to use?",
    logLevel: "Info",
    //@ts-ignore
    hideInPageTOC: true,
    hideBreadcrumbs: true,
  });

  const project = app.convert();

  if (project) {
    // Project may not have converted correctly
    const outputDir = "docs/generated";

    // Rendered docs
    await app.generateDocs(project, outputDir);

    log("\n=== Merging generated docs ===");

    const readme = concatMdSync("./docs", { hideAnchorLinks: true });
    await writeFile("README.md", readme);

    log("=== Docs generated in README.md ===");
    return;
  }

  log("=== Docs generation failed ===");
  process.exit(1);
};

generateDocs();
