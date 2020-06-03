# Server side

## Initiate node project

```shell
npm init -y
```

## Install _typescript_ and create _tsconfig.json_ file

```shell
npm install typescript -D
npx tsc --init
```

## Install dependencies

```shell
npm install
```

## Run migrations

```shell
npm run knex:migrate
```

## Populate database

```shell
npm run knex:seed
```

---

## HTTP methods

- GET: Search
- POST: Create
- PUT: Update
- DELETE: Delete

## Request params

- Required routes' params to identify a resource.

## Query params

- Optional routes' params fo filters, pagination, etc.

## Request body

- Create/Update params information
