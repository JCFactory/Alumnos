const topmost = require("ui/frame").topmost;
var observableModule = require("data/observable");
var ObservableArray = require("data/observable-array").ObservableArray;
var nativescriptDom = require("nativescript-dom");

// const DetailViewModel = require("./details-view-model")
// const fromObject = require("data/observable").fromObject;

// var alumno = new ObservableArray;

// var pageData = new observableModule.fromObject({
//     alumnos
// });

exports.pageNavigatedTo = function (args) {
    const page = args.object;
    page.bindingContext = page.navigationContext;
}

