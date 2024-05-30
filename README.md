
  

# Description

  

This is a basic NESTjs application to manage a PostgreSQL database with two tables: Users and Wallet.

It Implements CRUD operations for these tables.

  
  

## Clone the Repository

  

```bash

git  clone  https://github.com/SId-pranay123/nest-crud.git

```

  

## Installation

  

```bash

$  yarn  install

```

  

## Initializing the database

```bash

$  docker  compose  up  dev-db  -d

```

  

## Prisma migrate

```bash

npx  prisma  migrate  dev  --name  NAME

```

  
  

## Make sure you have a .env file in the root directory

DATABASE_URL and JWT_SECRET is intialised

  
  

## Running the app

  

```bash

# development

$  yarn  run  start

  

# watch mode

$  yarn  run  start:dev


```

## We can test all the defined routes using tools like Postman, keep in mind that the authentication part is implemented using JWT bearer tokens.