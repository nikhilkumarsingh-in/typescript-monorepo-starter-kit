# TypeScript Monorepo Starter Kit

Simple and beginner-friendly **TypeScript monorepo starter kit** built with **NPM Workspaces** and the TypeScript compiler.

This starter kit provides a clean foundation for developing multiple TypeScript applications and shared packages within a single repository. It focuses on the essential tools needed for a productive monorepo without adding unnecessary complexity.

## Features

- TypeScript
- NPM Workspaces
- TypeScript incremental builds
- TypeScript composite projects
- TypeScript project references
- Prettier for code formatting
- Shared configuration across applications and packages
- Simple and beginner-friendly setup

Testing, linting, and other development tools are intentionally not included.

## NPM Workspaces

This project uses **NPM Workspaces** to manage multiple applications and packages within a single repository.

NPM Workspaces provide a simple way to organize related projects, manage their dependencies, and work with shared internal packages from one repository.

The workspace setup is kept minimal so developers can understand how the monorepo works without needing to learn a complex toolchain.

## TypeScript Builds

The monorepo uses TypeScript's **incremental** and **composite** build features together with **project references**.

This provides an efficient build system that allows TypeScript to:

- Reuse information from previous builds
- Rebuild only projects that need to be updated
- Understand dependencies between projects
- Build applications and packages in the correct dependency order

The build setup is based on the TypeScript compiler (`tsc`) without introducing an additional monorepo build tool.

## Formatting

Code formatting is handled by **Prettier**.

A shared Prettier configuration helps keep formatting consistent across all applications and packages in the monorepo.

Prettier is included as the formatting solution while keeping the overall development setup simple.

## Project Philosophy

This starter kit is intentionally simple.

The goal is to provide the essential foundation for a TypeScript monorepo while keeping the number of tools and concepts to a minimum.

It is designed for developers who want to understand their monorepo setup rather than rely on a large abstraction layer.

The starter kit focuses on:

**NPM Workspaces + TypeScript + `tsc` builds + Prettier**

Additional tools can be introduced later as project requirements grow.

## License

This project is licensed under the [MIT License](LICENSE).
