const express = require("express")
const data = require("./user.service")
const Joi = require("joi") 
const validateRequest = require("../../middleware/validation")
const router = express.Router()

router.post("/user",validationMiddleware,data.postData)
router.get("/user",data.getData)
router.get("/user/:id",data.getDataId)
router.delete("/user/:id",data.deleteData)
router.put("/user/:id",validationMiddleware,data.updateData)
module.exports = router;


async function validationMiddleware(req, res, next) {
    const Schema = Joi.object({
        firstName: Joi.string().min(2).required(),
        lastName: Joi.string().min(2).required(),
    });
    validateRequest(req, next, Schema);
}