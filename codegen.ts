import type { CodegenConfig } from "@graphql-codegen/cli";
import { subgraphUrl } from "./config/subgraph";

const config: CodegenConfig = {
  overwrite: true,
  schema: subgraphUrl,
  documents: ["graphql/queries/**/*.ts"],
  ignoreNoDocuments: true,
  generates: {
    "graphql/generated/": {
      preset: "client",
      config: {
        onlyOperationTypes: true
      }
    },
    "./graphql.schema.json": {
      plugins: ["introspection"]
    }
  }
};

export default config;
