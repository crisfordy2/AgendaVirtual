const express = require("express");
const router = express.Router();
const Recordatorio = require("../models/recordatorio");
const Auth = require("../middleware/auth");
const User = require("../models/user");

router.post("/registerRecordatorio", Auth, async (req, res)=>{

    const user = await User.findById(req.user._id);

    if(!user) return res.status(400).send("Usuario no autentificado");

    const recordatorio = new Recordatorio({
        idUsuario: user._id,
        nameActivity: req.body.nameActivity,
        description: req.body.description
    })

    const result = await recordatorio.save();
    res.status(200).send({result});

    

})

module.exports = router;


