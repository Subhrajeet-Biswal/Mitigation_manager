import { resolve } from "path";
import { json } from "stream/consumers";

const mitigationdao = require("../dao/mitigation.dao");

function gettable_service() {
  return mitigationdao.gettable_dao();
}

function createrecord_service(data: any) {
  return mitigationdao.createrecord_dao(data);
}

function deleterecord_service(id: any) {
  return mitigationdao.deleterecord_dao(id);
}

function updatepremitigationscore_service(id: any, data: any) {
  return mitigationdao.updatepremitigationscore_dao(id, data);
}

function updatepostmitigationscore_service(id: any, data: any) {
  return mitigationdao.updatepostmitigationscore_dao(id, data);
}

function updatepremitigationavg_service() {
  return mitigationdao.updatepremitigationavg_dao();
}

function updatepostmitigationavg_service() {
  return mitigationdao.updatepostmitigationavg_dao();
}

export {
  gettable_service,
  createrecord_service,
  deleterecord_service,
  updatepremitigationscore_service,
  updatepostmitigationscore_service,
  updatepremitigationavg_service,
  updatepostmitigationavg_service,
};
