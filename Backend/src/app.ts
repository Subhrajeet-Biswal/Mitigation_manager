import express from "express";
import cors from "cors"
const {router} = require('./routes/router.ts')

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(router);


export {app}