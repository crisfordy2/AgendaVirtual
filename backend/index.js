const { json } = require("express");
const express = require("express");
const mongoose = require("mongoose");

const User = require("./routes/user");
const Auth = require("./routes/auth");
const Recordatorio = require("./routes/recordatorio");

const app = express();

app.use(express.json());
app.use("/api/user/", User);
app.use("/api/auth", Auth)
app.use("/api/user", Recordatorio);

const port = process.env.PORT || 3001;


app.listen(port, ()=>{
    console.log("Servidor corriendo en el puerto:", port);
})

mongoose.connect('mongodb://127.0.0.1:27017/AgendaVirtualDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})
.then(()=>{console.log("DB ON")})
.catch((error) =>{console.log("Error: ", error)})