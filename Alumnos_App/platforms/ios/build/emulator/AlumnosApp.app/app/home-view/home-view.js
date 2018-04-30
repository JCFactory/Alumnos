var http = require('http');
var observableModule = require("data/observable");
var ObservableArray = require("data/observable-array").ObservableArray;
// const getFrameById = require("tns-core-modules/ui/frame").getFrameById;
var page;
// const HomeViewModel = require("./home-view-model");
const topmost = require("ui/frame").topmost;
var alumnos = new ObservableArray;


//Method called when navigating to HomeView
// function onNavigatingTo(args){
//     const page = args.object;
//     let viewModel = page.bindingContext;
//     if(!args.isBackNavigation){
//         viewModel = new HomeViewModel();
//         page.bindingContext = viewModel;
//     }
//     viewModel.load();
// }


// exports.onTap = function (args) {
//     const tappedItem = args.view.bindingContext;
//     topmost().navigate({
//         moduleName: "detail/details-page",
//         context: tappedItem,
//         animated: true,
//         transition: {
//             name: "flip",
//             duration: 200,
//             curve: "ease"
//         }
//     })
// };


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
    const navigationEntry = {
        moduleName: "detail/details-page",
        context: {args},
        animated: true,
        transition: {
            name: "flip",
            duration: 380,
            curve: "easeIn"
        }
    };
    console.log(args.object);
    topmost().navigate(navigationEntry);
}