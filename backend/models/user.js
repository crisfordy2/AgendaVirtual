const mongoose = require("mongoose");
const moment = require("moment");
const jwt = require("jsonwebtoken");

const userShema = mongoose.Schema({

    name: String,
    lastName: String,
    email: String,
    tel: String,
    user: String, 
    password: String,    

});

userShema.methods.generateJWT = function(){
    return jwt.sign({

        _id: this._id,
        name: this.name,
        lastName: this.lastName,
        iat: moment().unix()

    }, "TokenJWT")
}



const User = mongoose.model("user", userShema)

module.exports = User;