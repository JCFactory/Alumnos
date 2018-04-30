var http = require('http');
var observableModule = require("data/observable");
var ObservableArray = require("data/observable-array").ObservableArray;
var page;
const topmost = require("ui/frame").topmost;
var alumnos = new ObservableArray();


//function to show active and detected tags in green color
function green(args) {
    var circle = args.object;
    circle.color = "#10BA10";
}

//function to show inactive tags in red color
function red(args) {
    var circle = args.object;
    circle.color = "#E53003";
}

var pageData = new observableModule.fromObject({
    alumnos
});

exports.loaded = function(args){
    http.request({url:"http://127.0.0.1:3000/api/alumnos", method: "GET"}).then(function(response){
        console.log("asdfjklö");
        var responseArray = response.content.toJSON();
        var newAlumnos = alumnos;
        alumnos = [];
        newAlumnos.push(responseArray);      
    }, function(e){
        console.log("error");
    });
    page = args.object;
    page.bindingContext = pageData;
}

exports.onTap = function(args){
    const selectedAlumno = args.view.bindingContext;
    const navigationEntry = {
        moduleName: "detail/details-page",
        context: {
          id: selectedAlumno.id,
          nombre: selectedAlumno.nombre,
          apellido: selectedAlumno.apellido,
          accion: selectedAlumno.accion
                 },
        animated: true,
        transition: {
            name: "flip",
            duration: 500,
            curve: "easeIn"
        }
    };
    console.log("selected alumno " + selectedAlumno.id);
    topmost().navigate(navigationEntry);
}