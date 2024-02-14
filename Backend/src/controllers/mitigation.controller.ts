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
        console.log(`Data added successfully with id = ${id}`);
        let tabledata = await mitigationservice.gettable_service();
        res.send(tabledata);
    }catch(err){
        console.log("Data addition failed !",err);
    }
}

async function deleterecord_controller(req:any,res:any) {
    try{
        let result = await mitigationservice.deleterecord_service(req.params.id);
        res.send(result);
        console.log(`Data deletion successful with id = ${req.params.id}`);
    }catch(err){
        console.log("Data deletion failed !",err);
    }
    
}


export { gettable_controller, createrecord_controller,deleterecord_controller };
