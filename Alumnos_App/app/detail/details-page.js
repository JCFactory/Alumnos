const topmost = require("ui/frame").topmost;
var observableModule = require("data/observable");
var ObservableArray = require("data/observable-array").ObservableArray;
var page;

var alumno = new ObservableArray();
var id;
var nombre;
var apellido;
var accion;

var pageData = new observableModule.fromObject({
    id: alumno.id,
    nombre: alumno.nombre,
    apellido: alumno.apellido,
    accion: alumno.accion
});

exports.loaded = function (args) {
    page = args.object;
    const context = page.navigationContext;
    console.log(context);
    var newAlumno = alumno;
    alumno = [];
    newAlumno.push(context.id);
    newAlumno.push(context.nombre);
    newAlumno.push(context.apellido);
    newAlumno.push(context.accion);
    console.log(newAlumno);
    page = args.object;
    page.bindingContext = context;
}