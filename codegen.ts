import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema:
    "https://api.goldsky.com/api/public/project_cma5n10r0vrqg01tv8ajb6gsc/subgraphs/venzo-subgraph/0.0.6/gn",
  documents: ["graphql/queries/**/*.ts"],
  ignoreNoDocuments: true,
  generates: {
    "graphql/generated/": {
      preset: "client"
    },
    "./graphql.schema.json": {
      plugins: ["introspection"]
    }
  }
};

export default config;
