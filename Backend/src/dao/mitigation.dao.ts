const { client } = require("../db/connection.ts");
const { v4: uuidv4 } = require("uuid");

function gettable_dao() {
  return new Promise((resolve: any, reject: any) => {
    let query = `SELECT * FROM public."Mitigation"`;
    client.query(query, (err: any, result: any) => {
      if (err) {
        reject(err);
      } else {
        resolve(result.rows);
      }
    });
  });
}

function createrecord_dao(data: any) {
  return new Promise((resolve: any, reject: any) => {
    let user = data;
    let id = uuidv4();
    let currentDate = new Date();
    let formattedDate = `${currentDate.getFullYear()}-${
      currentDate.getMonth() + 1
    }-${currentDate.getDate()}`;
    console.log(formattedDate);
    let query = `INSERT INTO public."Mitigation"(id, "Description", "Pre_Mitigation_score", "Post_Mitigation_score", "Applied_on")
                 values('${id}', '${user.Description}', ${user.Pre_Mitigation_score}, ${user.Post_Mitigation_score}, '${formattedDate}')`;
    client.query(query, (err: any, result: any) => {
      if (err) {
        reject(err);
      } else {
        resolve(id);
      }
    });
  });
}

function deleterecord_dao(id: any) {
  return new Promise((resolve: any, reject: any) => {
    let query = `DELETE FROM public."Mitigation" WHERE id='${id}'`;
    client.query(query, (err: any, result: any) => {
      if (err) {
        reject(err);
      } else {
        resolve(id);
      }
    });
  });
}

function updatepremitigationscore_dao(id: any, data: any) {
  return new Promise((resolve: any, reject: any) => {
    let query = `UPDATE public."Mitigation"
    SET "Pre_Mitigation_score" = ${data.Pre_Mitigation_score} WHERE id='${id}'`;
    client.query(query, (err: any, result: any) => {
      if (err) {
        reject(err);
      } else {
        resolve(id);
      }
    });
  });
}

function updatepostmitigationscore_dao(id: any, data: any) {
  return new Promise((resolve: any, reject: any) => {
    let query = `UPDATE public."Mitigation"
    SET "Post_Mitigation_score" = ${data.Post_Mitigation_score} WHERE id='${id}'`;
    client.query(query, (err: any, result: any) => {
      if (err) {
        reject(err);
      } else {
        resolve(id);
      }
    });
  });
}

function updatepremitigationavg_dao() {
  return new Promise((resolve: any, reject: any) => {
    let query = `SELECT AVG("Pre_Mitigation_score") FROM public."Mitigation"`;
    client.query(query, (err: any, result: any) => {
      if (err) {
        reject(err);
      } else {
        resolve(result.rows[0].avg);
      }
    });
  });
}

function updatepostmitigationavg_dao() {
  return new Promise((resolve: any, reject: any) => {
    let query = `SELECT AVG("Post_Mitigation_score") FROM public."Mitigation"`;
    client.query(query, (err: any, result: any) => {
      if (err) {
        reject(err);
      } else {
        resolve(result.rows[0].avg);
      }
    });
  });
}

export {
  gettable_dao,
  createrecord_dao,
  deleterecord_dao,
  updatepremitigationavg_dao,
  updatepostmitigationavg_dao,
  updatepremitigationscore_dao,
  updatepostmitigationscore_dao,
};
