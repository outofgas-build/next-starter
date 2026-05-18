# AGENTS.md

Guidance for AI agents working in this repository.

## Project Overview

- This is a Next.js 16 app using the App Router, React 19, TypeScript, Tailwind CSS 4, Bun, Apollo Client, TanStack Table, Privy auth, and GraphQL Codegen.
- Main application code lives in `app/`, reusable UI in `components/`, hooks in `hooks/`, API and GraphQL clients in `lib/`, and configuration in `config/`.
- Generated GraphQL files live in `graphql/generated/`. Do not hand-edit generated files; update queries or codegen config and run codegen instead.

## Reference Projects

- Contract reference project: `/Users/forever9/Code/venzo/venzo-city-contracts`.
- Use the contract project for ABI, event, deployment, and domain model context when frontend behavior depends on smart contracts.

## Commands

- Install dependencies with `bun install`.
- Start the development server with `bun run dev`.
- Run a production build with `bun run build`.
- Run linting with `bun run lint`.
- Regenerate GraphQL types with `bun run codegen`.

## Coding Guidelines

- Prefer existing project patterns and local helpers before adding new abstractions.
- Use `@/` imports for app-local modules when matching existing files.
- Keep UI components typed with TypeScript and avoid `any` unless there is a concrete interop reason.
- For styling, use Tailwind utility classes and the existing shadcn-style primitives in `components/ui/`.
- Use `lucide-react` icons for common UI actions.
- Keep client-only React code behind `"use client"` and avoid adding it to server components unnecessarily.
- Keep environment-dependent browser values behind `NEXT_PUBLIC_` variables when they must be exposed to the client.

## Data And API Notes

- GraphQL queries are in `graphql/queries/`.
- Subgraph endpoint: `https://api.goldsky.com/api/public/project_cma5n10r0vrqg01tv8ajb6gsc/subgraphs/venzo-subgraph/0.0.6/gn`.
- React Query keys should be centralized in `lib/query-keys.ts` when adding new data hooks.
- HTTP and GraphQL client setup should stay in `lib/api/` and `lib/graphql-client.ts`.

## Verification

- For most code changes, run `bun run lint`.
- For changes touching build config, Next app routing, generated GraphQL, or environment assumptions, also run `bun run build`.
- After editing GraphQL operations or schema/codegen config, run `bun run codegen` and include the generated diff.

## Git And File Safety

- Do not revert unrelated work in the tree.
- Keep edits scoped to the requested behavior.
- Do not commit, push, or create branches unless the user explicitly asks.
