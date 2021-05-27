const mongoose = require("mongoose");

const recordatorioSchema = mongoose.Schema({

    idUsuario: String,
    nameActivity: String,
    date: {type: Date, default: Date.now},
    description: String

})

const Recordatorio = mongoose.model("recordatorio", recordatorioSchema);

module.exports = Recordatorio;