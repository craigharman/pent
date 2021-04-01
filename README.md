# PENT
> Prisma + Express + Node + Typescript Boilerplate

PENT is an acronym for Prisma, Express, Node and Typescript, a server side development stack primarily for developing APIs but can easily be extended to be a full stack solution. This boilerplate is a quick start for the PENT stack which handles the default setup (with some sane defaults) and easy development (via some basic included packages).

1. Express configured for Typescript with MVC support
2. Automatic Swagger API documentation [TSOA](https://github.com/lukeautry/tsoa) (see routes documentation below) available from /docs URI
3. [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) default configurations
4. Prisma preconfigured


## Features

### Swagger generation

Documentation is automatically generated when you start the app.

```bash
$ npm run start
```

You can access it via [/docs](http://localhost/docs)

### Prisma setup

To get started:

```bash
$ npx prisma generate
```