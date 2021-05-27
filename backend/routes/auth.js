const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");

router.post("/login", async (req, res)=>{
    
    let user = await User.findOne({user: req.body.user});

    if(!user) return res.status(400).send("Usuario o contraseña incorrectos");

    const pass = await bcrypt.compare(req.body.password, user.password);

    if(!pass) return res.status(400).send("Usuario o contraseña incorrectos");

    const token = user.generateJWT();
    res.status(200).send({token});

})

module.exports = router;