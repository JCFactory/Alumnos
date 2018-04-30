// const observableModule = require("data/observable");
// const ObservableArray = require("data/observable-array").ObservableArray;

// const HomeService = require(".././shared/service");


// function HomeViewModel() {
//     const viewModel = observableModule.fromObject({
//         alumnos: new ObservableArray([]),
//         isLoading: false,
//         _alumnosService: Service.getInstance(),
//         _dataSubscription: null,

//         load: function () {
//             if (!this._dataSubscription) {
//                 this.set("isLoading", true);
//                 this._dataSubscription = this._alumnosService.load()
//                     .subscribe((alumnos) => {
//                         this.set("alumnos", new ObservableArray(alumnos));
//                         this.set("isLoading", false);
//                     });
//             }
//         },

//         unload: function () {
//             if (!this._dataSubscription) {
//                 this._dataSubscription.unsubscribe();
//                 this._dataSubscription = null;
//             }
//         }
//     });
//     return viewModel;
// }

// module.exports = HomeViewModel;


