function Alumno(options){
    const model = {
        id: options.id,
        nombre: options.nombre,
        apellido: options.apellido,
        accion: options.accion
    };
    return model;
}

module.exports = Alumno;







// var mongoose = require("mongoose");

// var alumno = new mongoose.Schema({
//     _id: {
//         type: Number,
//         default: "",
//         required: true
//         // select: true
//         //select: false
//     },
//     id: {
//         type: Number,
//         default: "",
//         required: true,
//         unique:true
//         //select: true
//     },
//     nombre: {
//         type: String,
//         default: "",
//         // required: true,
//         // select: true
//     },
//     apellido: {
//         type: String,
//         default: "",
//         // required: true
//         // select: true
//         //  select: false
//     },
//     accion: {
//         type: String,
//         default: "",
//         required: true,
//         // select: true
//         //  select: false
//     },
// });


// module.exports = mongoose.model("Alumno", alumno);