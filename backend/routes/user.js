const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/user");

router.post("/registerUser", async (req, res)=>{

    let user = await User.findOne({user:req.body.user});

    if(user) return res.status(400).send("Usuario ya existe")

    const hash = await bcrypt.hash(req.body.password, 10);

    user = new User({
        name: req.body.name,
        lastName: req.body.lastName,
        email: req.body.email,
        tel: req.body.tel,
        user: req.body.user,
        password: hash
    })

    const result = await user.save();

    if(result){

        const token = user.generateJWT();
        res.status(200).send({token});

    }else{
        res.status(400).send("Error creacion usuario")
    }

})

module.exports = router;