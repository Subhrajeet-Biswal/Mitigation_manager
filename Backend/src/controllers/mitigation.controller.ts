import { gettable_dao } from "../dao/mitigation.dao";

const mitigationservice = require("../services/mitigation.service");
const { client } = require("../db/connection.ts");

async function gettable_controller(req: any, res: any) {
  try {
    let tabledata = await mitigationservice.gettable_service();
    if (tabledata) res.send(tabledata);
    else res.send("Empty Data")
  } catch (err) {
    console.log("error while fetching data", err);
  }
}

async function createrecord_controller(req:any,res:any) {
    try{
        let id = await mitigationservice.createrecord_service(req.body);
        res.send(`Data added successfully with id = ${id}`);
    }catch(err){
        console.log("Data addition failed !",err);
    }
}

export { gettable_controller, createrecord_controller };
