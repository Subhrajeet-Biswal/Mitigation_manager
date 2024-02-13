import express from "express";
const mitigationcontroller = require('../controllers/mitigation.controller.ts')
const {client} = require('../db/connection.ts')

const router = express.Router();

router.get("/",mitigationcontroller.gettable_controller);
router.post("/",mitigationcontroller.createrecord_controller);
router.delete("/:id",mitigationcontroller.deleterecord_controller);

export {router}