var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

// mongoose.connect('mongodb://169.254.1.2:27017/clase');
mongoose.connect('mongodb://127.0.0.1:27017/clase');

var app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

var router = express.Router();

app.use("/api", router);
router.route("/alumnos").get(getAlumnos);
router.route("/alumno/:id").get(getAlumno);

// router.route("/drug/:name").get(drugController.getDrug);
// router.route("/addDrug").post(drugController.addDrug);
// router.route("/updateDrug/:id").post(drugController.updateDrug);
// router.route("/deleteDrugs/:id").get(drugController.deleteDrug);

app.listen(3000);

// var Alumno = require(".././app/shared/model");
var Alumno = require("./mongo-node/mongo-node");

var http = require("http");

//GET NAME OF DRUGS IN MONGODB 
function getAlumnos(req, res) {
    Alumno.find(function (err, alumnos) {
        if (err) {
            res.send(err);
        }
        res.send(alumnos);
    });
};

// function getDetails(req,res){
//     Alumno.
// };

//GET SPECIFIC DRUG BY SEARCHING ITS NAME (SEARCH FIELD HAS TO BE IMPLEMENTED!!!!! IN FRONTEND XML)
function getAlumno(req, res) {
    
    // Common RESTful way to get the Id is from the url params in req.params
    Alumno.findById(req.params.id, (err, alumno) => {
        if (err) return res.send(err)
        return res.send(alumno)
    });
    // Alumno.find({ id: req.params.id }, function (err, alumno) {
    //     if (err) {
    //         res.send(err);
    //     }
    //     res.send(alumno);
    // });
};


//Functions for the remaining crud operations: (CREATE, UPDATE and DELETE)

// exports.addDrug = function (req, res) {
//     var drug = new Drug();
//     drug.id = req.body.id;
//     drug.name = req.body.name;
//     drug.countryCode = req.body.countryCode;
//     drug.size = req.body.size;
//     drug.location = req.body.location;
//     drug.timeStamp = req.body.timeStamp;
//     drug.save(function (err) {
//         if (err) {
//             res.send(err)
//         }
//         res.send({ message: "task was saved.", data: drug });
//     });
// }

// exports.updateDrug = function (req, res) {
//     Drug.update({ id: req.params.id }, {
//         id = req.body.id,
//         name = req.body.name,
//         countryCode = req.body.countryCode,
//         size = req.body.size,
//         location = req.body.location,
//         timeStamp = req.body.timeStamp
//     }, function(err, num, raw) {
//         if (err) {
//             res.send(err);
//         }
//         res.json(num);
//     });
// }

// exports.deleteDrug = function (req, res) {
//     Drug.remove({ _id: req.params.id }, function (err) {
//         if (err) {
//             res.send(err)
//         }
//         res.json({ message: "The drug was deleted" });
//     });
// };