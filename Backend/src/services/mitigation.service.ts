import { resolve } from "path";
import { json } from "stream/consumers";

const mitigationdao = require("../dao/mitigation.dao");


function gettable_service() {
  return  mitigationdao.gettable_dao();
}

function createrecord_service(data:any){
    return mitigationdao.createrecord_dao(data);
}

function deleterecord_service(id:any){
    return mitigationdao.deleterecord_dao(id);
}

export { gettable_service,createrecord_service,deleterecord_service };
