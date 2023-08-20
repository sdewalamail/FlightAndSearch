## Wlcome to ticket booket system

## Project Setup
 - clone the project on your local
 - Execute the `npm i`
 - create `.env` file in the root directory and add the following enviroment variable
   - `PORT=3000`

- Inside the `src/config` folder create a new file `config.json` and then  add  the following piece of json.

```
{
  "development": {
    "username": <>,
    "password": <>,
    "database": <>,
    "host": <>,
    "dialect": <>
  }
} 

```

- Once you've added your db config as listed above, go to the src folder from your terminal and execute npx sequelize db:create and then execute
`npx sequelize db:migrate`