# PENT
> Prisma + Express + Node + Typescript Boilerplate

PENT is an acronym for Prisma, Express, Node and Typescript, a server side development stack primarily for developing APIs but can easily be extended to be a full stack solution. This boilerplate is a quick start for the PENT stack which handles the default setup (with some sane defaults) and easy development (via some basic included packages).

Out of the box you get:

1) Express configured for Typescript with MVC support
2) Authentication and Authorization set up
3) [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) default configurations
4) (Optional) Docker configuration to run the stack in Docker containers
5) Swagger autogeneration with [TSOA](https://github.com/lukeautry/tsoa) (see routes documentation below) available from /docs URI
6) Pre git-commit linting using [Husky](https://github.com/typicode/husky)
7) Environment variables using [dotenv](https://www.npmjs.com/package/dotenv) package 
8) VSCode Extension [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) support (see /src/http folder)
9) Logging with [Winston](https://github.com/winstonjs/winston)
10) [Jest](https://jestjs.io/) for testing
11) Nodemon for hot reloading (TODO: Swap out for [chokidar](https://codeburst.io/dont-use-nodemon-there-are-better-ways-fc016b50b45e))

## Usage

You can clone this repository directly or use npx.

### Getting started

1. Edit the .env file to point to your database (it will default to the docker container)
2. (Optionally) Start docker containers `docker-compose up` or `docker-compose up -d` (Daemon)
3. Run `npm run prisma:migrate` to create user/auth related tables
4. In development run `npm run dev`

## Overview

### 🗂 Code Structure (default)

```bash
│
├── /.vscode
│   ├── launch.json
│   └── settings.json
│
├── /src
│   ├── /controllers
│   │   ├── auth.controller.ts
│   │   ├── index.controller.ts
│   │   └── users.controller.ts
│   │
│   ├── /dtos
│   │   └── users.dto.ts
│   │
│   ├── /exceptions
│   │   └── HttpException.ts
│   │
│   ├── /http
│   │   ├── auth.http
│   │   └── users.http
│   │
│   ├── /interfaces
│   │   ├── auth.interface.ts
│   │   ├── routes.interface.ts
│   │   └── users.interface.ts
│   │
│   ├── /middlewares
│   │   ├── auth.middleware.ts
│   │   ├── error.middleware.ts
│   │   └── validation.middleware.ts
│   │
│   ├── /models
│   │   └── users.model.ts
│   │
│   ├── /prisma
│   │   ├── /migrations
│   │   └── schema.prisma
│   │
│   ├── /services
│   │   ├── auth.service.ts
│   │   └── users.service.ts
│   │
│   ├── /tests
│   │   ├── auth.test.ts
│   │   ├── index.test.ts
│   │   └── users.test.ts
│   │
│   ├── /utils
│   │   ├── logger.ts
│   │   ├── util.ts
│   │   └── vaildateEnv.ts
│   │
│   ├── app.ts
│   └── server.ts
│
├── .dockerignore
├── .editorconfig
├── .env
├── .eslintignore
├── .eslintrc
├── .gitignore
├── .huskyrc
├── .prettierrc
├── docker-compose.yml
├── Dockerfile
├── Dockerfile.dev
├── jest.config.js
├── Makefile
├── nginx.conf
├── nodemon.json
├── package-lock.json
├── package.json
├── swagger.yaml
└── tsconfig.json
```

### Routes

Routes can be generated automatically using [TSOA](https://github.com/lukeautry/tsoa) decorators within your controllers. The ./routes.ts file will be auto generated when you `npn run dev` or you can manually build via `npm run build`.

When creating controllers:

1. Import the TSOA decorators at the top of your file `import { Body, Controller, Get, Path, Post, Query, Route, SuccessResponse } from 'tsoa';`
2. Make sure your controller extends TSOA's Controller class
3. Add a `@Route('/uri')` above the class, this is the default uri for the route
4. Add an action decorator above each function such as `@Get` or `@Post`
5. Add a response decorator above or below the action decorator