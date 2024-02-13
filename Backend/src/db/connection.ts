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

// async function connectdb(){
//     client.connect((err:any) => {
//         if (err) {
//           console.error('Error connecting to database: ' + err.stack);
//           return;
//         }
//         console.log('Connected to the database.');
//       });
// }

async function connectdb(){
  try{
    await client.connect();
    console.log('Connected to the database.');
  }catch(error:any){
    console.error('Error connecting to database: ' + error.stack);
  }
}

// function connectdb() {
//   const sequelize = new Sequelize("Mitigation-db", "postgres", process.env.DB_PASSWORD, {
//     host: "localhost",
//     dialect: "postgres",
//   });

//   sequelize
//     .authenticate()
//     .then(() => {
//       console.log("Connection has been established successfully.");
//     })
//     .catch((error) => {
//       console.error("Unable to connect to the database: ", error);
//     });
// }

export {connectdb};