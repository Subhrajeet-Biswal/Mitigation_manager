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
    const currentDate = new Date();
    const formattedDate = `${currentDate.getFullYear()}-${
      currentDate.getMonth() + 1
    }-${currentDate.getDate()}`;

    let query = `INSERT INTO public."Mitigation"(id, "Description", "Pre-Mitigation-score", "Post-Mitigation-score", "Applied-on")
                 values('${id}', '${user.Description}', ${user.Pre_Mitigation_score}, ${user.Post_Mitigation_score}, '${formattedDate}')`;
    client.query(query, (err: any, result: any) => {
      if (err) {
        reject(err);
      } else {
        resolve(result.rows);
      }
    });
  });
}

export { gettable_dao, createrecord_dao };
