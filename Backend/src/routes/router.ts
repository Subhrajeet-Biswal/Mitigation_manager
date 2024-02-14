import express from "express";
const mitigationcontroller = require('../controllers/mitigation.controller.ts')

const router = express.Router();

router.get("/",mitigationcontroller.gettable_controller);
router.post("/",mitigationcontroller.createrecord_controller);
router.delete("/:id",mitigationcontroller.deleterecord_controller);
router.put("/premitigation/:id",mitigationcontroller.updatepremitigationscore_controller);
router.put("/postmitigation/:id",mitigationcontroller.updatepostmitigationscore_controller);

export {router}