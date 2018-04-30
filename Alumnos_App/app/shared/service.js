const Observable = require("rxjs/Observable").Observable;
var mongoose = require("mongoose");

const Alumno = require("./model");

const editableProperties = [
    "accion"
];

function Service(){
    if(Service._instance){
        throw new Error("Use Service.getInstance() instead of new");
    }
    this._alumnos = [];
    Service._instance = _this;

    this.load = function(){
        return new Observable((observer)=>{
            const path = "alumnos";
            const onValueEvent = (snapshot)=>{
                const results = this._handleSnapshot(snapshot.value);
                observer.next(results);
            };
            mongoose.addValueEventListener(onValueEvent,'/${path}');
        }).catch(this._handleErrors);
    };

    this._handleSnapshot = function (data){
        this._alumnos = [];
        if(data){
            for(const id in data){
                if(data.hasOwnProperty(id)){
                    this._alumnos.push(new Alumno(data[id]));
                }
            }
        }
        return this._alumnos;
    }

    this._handleErrors = function(error){
        return Observable.throw(error);
    };
}

Service.getInstance = function(){
    return Service._instance;
};

Service._instance = new Service();

function cloneUpdateModel(alumno){
    return editableProperties.reduce((a,e)=>(a[e]= car[e], a), {});
}

module.exports = Service;