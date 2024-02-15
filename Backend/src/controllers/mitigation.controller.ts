const mitigationservice = require("../services/mitigation.service");
const { client } = require("../db/connection.ts");
const mitigationdao = require("../dao/mitigation.dao");

async function gettable_controller(req: any, res: any) {
  try {
    let tabledata = await mitigationservice.gettable_service();
    if (tabledata) res.send(tabledata);
    else res.send("Empty Data");
  } catch (err) {
    console.log("error while fetching data", err);
  }
}

async function createrecord_controller(req: any, res: any) {
  try {
    let id = await mitigationservice.createrecord_service(req.body);
    let tabledata = await mitigationservice.gettable_service();
    let preMitigationAvgresult =
      await mitigationservice.updatepremitigationavg_service();
    let preMitigationAvg = parseFloat(preMitigationAvgresult).toFixed(2);
    let postMitigationAvgresult =
      await mitigationservice.updatepostmitigationavg_service();
    let postMitigationAvg = parseFloat(postMitigationAvgresult).toFixed(2);
    res.send({ tabledata, preMitigationAvg, postMitigationAvg });
    console.log(`Data added with id=${id}`);
  } catch (err) {
    console.log("Data addition failed !", err);
  }
}

async function deleterecord_controller(req: any, res: any) {
  try {
    let deletedId = await mitigationservice.deleterecord_service(req.params.id);
    let preMitigationAvgresult =
      await mitigationservice.updatepremitigationavg_service();
    let preMitigationAvg = parseFloat(preMitigationAvgresult).toFixed(2);
    let postMitigationAvgresult =
      await mitigationservice.updatepostmitigationavg_service();
    let postMitigationAvg = parseFloat(postMitigationAvgresult).toFixed(2);
    res.send({ deletedId, preMitigationAvg, postMitigationAvg });
    console.log(`Data deletion successful with id = ${req.params.id}`);
  } catch (err) {
    console.log("Data deletion failed !", err);
  }
}
async function updatepremitigationscore_controller(req: any, res: any) {
  try {
    let updatedId = await mitigationservice.updatepremitigationscore_service(
      req.params.id,
      req.body
    );
    let preMitigationAvgresult =
      await mitigationservice.updatepremitigationavg_service();
    let preMitigationAvg = parseFloat(preMitigationAvgresult).toFixed(2);
    res.send({ updatedId, preMitigationAvg });
    console.log(`Premitigation_score updated for id = ${updatedId}`);
  } catch (err) {
    console.log("Premitigation_score update failed !!", err);
  }
}

async function updatepostmitigationscore_controller(req: any, res: any) {
  try {
    let updatedId = await mitigationservice.updatepostmitigationscore_service(
      req.params.id,
      req.body
    );
    let postMitigationAvgresult =
      await mitigationservice.updatepostmitigationavg_service();
    let postMitigationAvg = parseFloat(postMitigationAvgresult).toFixed(2);
    res.send({ updatedId, postMitigationAvg });
    console.log(`Postmitigation_score updated for id = ${updatedId}`);
  } catch (err) {
    console.log("Postmitigation_score update failed !!", err);
  }
}

export {
  gettable_controller,
  createrecord_controller,
  deleterecord_controller,
  updatepremitigationscore_controller,
  updatepostmitigationscore_controller,
};
