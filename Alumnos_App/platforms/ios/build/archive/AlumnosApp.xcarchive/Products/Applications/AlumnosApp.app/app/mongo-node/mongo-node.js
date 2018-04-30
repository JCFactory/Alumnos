var mongoose = require("mongoose");

var alumno = new mongoose.Schema({
    _id:{
        type: Number,
        default: "",
    },
    id:{
        type: Number,
        default: "",
    },
    nombre:{
        type: String,
        default: "",
    },
    apellido:{
        type: String,
        default: "",
    },
    accion:{
        type: String,
        default: "",
    }
});

module.exports = mongoose.model("Alumno", alumno);