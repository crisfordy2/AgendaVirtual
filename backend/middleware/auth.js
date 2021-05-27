const jwt = require("jsonwebtoken");

const Auth = (req, res, next)=>{

    let token = req.header("Authorization");

    if(!token) return res.status(401).send("Autorizacion rechazada no hay token")

    token = token.split(" ")[1];
    
    if(!token) return res.status(401).send("Autorizacion rechazada no hay token")

    try {
        
        const payload = jwt.verify(token, "TokenJWT");
        req.user = payload;
        next();
    } catch (error) {

        return res.status(401).send("Autorizacion rechazada no hay token")      
    }


};

module.exports = Auth;