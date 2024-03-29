// import { Sequelize } from 'sequelize';
const datamodel = require ('../model/datamodel.ts')
const pg = require("pg");

const client = new pg.Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: process.env.DB_PASSWORD,
    database: "Mitigation-db"
})

async function connectdb(){
  try{
    await client.connect();
    console.log('Connected to the database.');
  }catch(error:any){
    console.error('Error connecting to database: ' + error.stack);
  }
}

export {connectdb,client};