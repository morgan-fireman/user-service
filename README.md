# user-service

## Subtask I
Create a server using Koa.js (latest). This server should include the following packages:
 - koa
 - koa-logger

## Subtask II
To implement a verification of the source code so any error should not be commited to the repo. The eslint-config-airbnb config could be taken as a basis without changes. To accomplish this task, you will need the following packages:
 - eslint 
 - eslint-config-airbnb
 - eslint-plugin-prettier
 - prettier
 - husky
 - lint-staged

An example of the config for `prettier`:

```
module.exports = {
  printWidth: 120,
  singleQuote: true,
  trailingComma: 'all',
  bracketSpacing: true,
  tabWidth: 2,
  semi: true,
};
```

## Subtask III

To implement the following routes:
  - `GET /users` it's needed for `user-service` command. The response - an array of 3 users (prepare them in advance). Each user data includes properties such as: `id` (UUID), `driverId` (UUID), `passengerId` (UUID)
  - `GET /rides` it's needed for `ride-service` command. The response - an array of 3 rides (prepare them in advance). Each ride has properties such as: `id` (UUID), `carId` (UUID), `driverId` (UUID), `passengerId` (UUID)
  - `GET /car` it's needed for `car-service` command. The response - an array of 3 cars (prepare them in advance). Each car has properties such as: `id` (UUID), `plate` (string), `model` (string)

## Subtaks IV

The routing has to be implemented on a middleware, without using `koa` routers. The main task is to create a router that will support the extension (adding a new router does not add new connection lines). Usage hint - `fs.readFile`, `require`, `map`.

An example of the project stucture:

```
/
  /src
    /middlewares
      router.js
    index.js
  .eslintrs.js
  prettier.config.js
  .eslintignore
  package.json
  package-lock.json
```
