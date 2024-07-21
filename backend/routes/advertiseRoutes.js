const { Router } = require("express");
const Authorization = require("../services/Authorization");
const uploadCloud = require('../config/uploadImage');
const Advertise = require("../controllers/Advertise");
const advertisementValidations = require("../validations/advertisementValidatons");

const router = Router();
router.post("/create-advertise",
    [Authorization.authorized, advertisementValidations],
    uploadCloud.single('image'),
    Advertise.createAdver
);
router.delete("/delete-advertise/:pid", [Authorization.authorized], Advertise.deleteAdver);
router.get("/get-advertise",
    [Authorization.authorized],
    Advertise.getAdver
);



module.exports = router;
