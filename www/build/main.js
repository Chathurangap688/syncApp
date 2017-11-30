webpackJsonp([3],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrowserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_image_picker__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_photo_library__ = __webpack_require__(84);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the BrowserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BrowserPage = (function () {
    function BrowserPage(navCtrl, photoLibrary, navParams, file, imagePicker) {
        this.navCtrl = navCtrl;
        this.photoLibrary = photoLibrary;
        this.navParams = navParams;
        this.file = file;
        this.imagePicker = imagePicker;
        this.path = this.file.externalRootDirectory;
        this.items = [];
        if (navParams.get('path') != null) {
            this.path = navParams.get('path');
        }
    }
    BrowserPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log(this.file.externalRootDirectory);
        console.log(this.path);
        var options = {
            maximumImagesCount: 10,
        };
        this.imagePicker.getPictures(options).then(function (results) {
            for (var i = 0; i < results.length; i++) {
                _this.items.push({
                    title: results[i],
                    note: results[i],
                });
            }
        }, function (err) { });
    };
    BrowserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-browser',template:/*ion-inline-start:"D:\ShortSem\Project\MyIonicProject\src\pages\browser\browser.html"*/'<!--\n  Generated template for the BrowserPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Quick Upload</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n    <button ion-item *ngFor="let item of items" >\n      <ion-thumbnail item-start>\n        <img src=" {{item.note}}">\n      </ion-thumbnail>\n      {{item.title}}\n      <div class="item-note" item-right>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n\n \n\n\n</ion-content>\n'/*ion-inline-end:"D:\ShortSem\Project\MyIonicProject\src\pages\browser\browser.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_photo_library__["a" /* PhotoLibrary */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_image_picker__["a" /* ImagePicker */]])
    ], BrowserPage);
    return BrowserPage;
}());

//# sourceMappingURL=browser.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateAcountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CreateAcountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreateAcountPage = (function () {
    function CreateAcountPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CreateAcountPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreateAcountPage');
    };
    CreateAcountPage.prototype.cancel = function () {
        window.location.reload();
    };
    CreateAcountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-create-acount',template:/*ion-inline-start:"D:\ShortSem\Project\MyIonicProject\src\pages\create-acount\create-acount.html"*/'<!--\n  Generated template for the CreateAcountPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Create Acount</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list>\n        <ion-item>\n            <ion-label stacked>Full Name</ion-label>\n            <ion-input type="text" [(ngModel)]="fullname"></ion-input>\n          </ion-item>\n    \n        <ion-item>\n            <ion-label stacked>User Name</ion-label>\n            <ion-input type="text" [(ngModel)]="username"></ion-input>\n          </ion-item>\n    \n        <ion-item>\n            <ion-label stacked>Password</ion-label>\n            <ion-input type="password" [(ngModel)]="password" v></ion-input>\n            \n         </ion-item>\n         <ion-item>\n            <ion-label stacked>Password again</ion-label>\n            <ion-input type="password" [(ngModel)]="password2" v></ion-input>\n         \n         </ion-item>\n         <ion-item>\n            <ion-label stacked>I read and accept the licence of this app</ion-label>\n            <ion-checkbox></ion-checkbox>\n         \n         </ion-item>\n         <ion-item>\n          <button ion-button color="primary"  (click)="cancel()">Create</button>\n          <button ion-button color="dark"  (click)="cancel()">Cancel</button>\n         </ion-item>\n    </ion-list>\n\n\n</ion-content>\n'/*ion-inline-end:"D:\ShortSem\Project\MyIonicProject\src\pages\create-acount\create-acount.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], CreateAcountPage);
    return CreateAcountPage;
}());

//# sourceMappingURL=create-acount.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_acount_create_acount__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_http__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, storage, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.http = http;
        this.username = '';
        this.password = '';
    }
    LoginPage.prototype.login = function (age) {
        if (this.username != '') {
            this.http.post('http://localhost/227/', {
                cardToken: "token",
                amount: 500
            }, {
                headers: { 'Content-Type': 'application/json' }
            })
                .then(function (data) {
                console.log(data.data);
            }).catch(function (error) {
                console.log(error.status);
            });
        }
    };
    LoginPage.prototype.createAcount = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__create_acount_create_acount__["a" /* CreateAcountPage */]);
    };
    LoginPage.prototype.ionViewDidLoad = function () {
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"D:\ShortSem\Project\MyIonicProject\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title><ion-icon name="paper-plane"></ion-icon>Login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    \n\n    <ion-item>\n      <ion-label floating>Username</ion-label>\n      <ion-input type="text" [(ngModel)]="username"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Password</ion-label>\n      <ion-input type="password" id="pw" [(ngModel)]="password"v></ion-input>\n    </ion-item>\n\n  </ion-list>\n\n  <div >\n    <button ion-button color="primary" block  (click)="login()">LogIn</button>\n    <button ion-button color="dark" block (click)="createAcount()">Create Acount</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\ShortSem\Project\MyIonicProject\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_http__["a" /* HTTP */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_http__["a" /* HTTP */]) === "function" && _d || Object])
    ], LoginPage);
    return LoginPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 118:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 118;

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/browser/browser.module": [
		286,
		2
	],
	"../pages/create-acount/create-acount.module": [
		287,
		1
	],
	"../pages/login/login.module": [
		288,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 159;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelloIonicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_image_picker__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__browser_browser__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__item_details_item_details__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HelloIonicPage = (function () {
    function HelloIonicPage(imagePicker, navCtrl) {
        this.imagePicker = imagePicker;
        this.navCtrl = navCtrl;
    }
    HelloIonicPage.prototype.addFiles = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__browser_browser__["a" /* BrowserPage */], {});
    };
    HelloIonicPage.prototype.getFiles = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__item_details_item_details__["a" /* ItemDetailsPage */], {});
    };
    HelloIonicPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-hello-ionic',template:/*ion-inline-start:"D:\ShortSem\Project\MyIonicProject\src\pages\hello-ionic\hello-ionic.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title> <ion-icon name="paper-plane"></ion-icon> Quick Acces</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n \n    \n    <ion-content>\n        \n    <button ion-button color="dark" (click)="getFiles()"  block>\n      <ion-icon name="paper-plane" ></ion-icon> \'Quick Download\n    </button>\n   \n    <button ion-button color="secondary" (click)="addFiles()"block>\n    Quick Upload\n    </button>\n\n  </ion-content>\n\n</ion-content>\n'/*ion-inline-end:"D:\ShortSem\Project\MyIonicProject\src\pages\hello-ionic\hello-ionic.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_image_picker__["a" /* ImagePicker */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */]])
    ], HelloIonicPage);
    return HelloIonicPage;
}());

//# sourceMappingURL=hello-ionic.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item_details_item_details__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_chooser__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_photo_library__ = __webpack_require__(84);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ListPage = (function () {
    function ListPage(navCtrl, photoLibrary, file, navParams, fileChooser) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.photoLibrary = photoLibrary;
        this.file = file;
        this.navParams = navParams;
        this.fileChooser = fileChooser;
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        this.items.push({
            title: "ss",
            note: "D:/ShortSem/Project/MyIonicProject/resources/icon.png",
            icon: this.icons[Math.floor(Math.random() * this.icons.length)]
        });
        this.file.listDir("file:///storage/emulated/0/DCIM", "Camera").then(function (results) {
            for (var i = 0; i < results.length; i++) {
                console.log('Image URI: ' + results[i]);
                _this.items.push({
                    title: results[i].name,
                    note: results[i].nativeURL,
                    icon: _this.icons[Math.floor(Math.random() * _this.icons.length)]
                });
            }
        }, function (err) {
        });
        this.photoLibrary.requestAuthorization().then(function () {
            _this.photoLibrary.getLibrary().subscribe({
                next: function (library) {
                    library.forEach(function (libraryItem) {
                        this.items.push({
                            title: libraryItem.photoURL,
                            note: libraryItem.id,
                            icon: this.icons[Math.floor(Math.random() * this.icons.length)]
                        }); // Cross-platform access to photo
                        // array of ids of appropriate AlbumItem, only of includeAlbumsData was used
                    });
                },
                error: function (err) {
                    _this.items.push({
                        title: err,
                        note: "couldNotGet Libry",
                        icon: _this.icons[Math.floor(Math.random() * _this.icons.length)]
                    });
                },
                complete: function () {
                    _this.items.push({
                        title: "Done",
                        note: "couldNotGet Libry",
                        icon: _this.icons[Math.floor(Math.random() * _this.icons.length)]
                    });
                }
            });
        })
            .catch(function (err) {
            return _this.items.push({
                title: "No permitions",
                note: err,
                icon: _this.icons[Math.floor(Math.random() * _this.icons.length)]
            });
        });
    }
    ListPage.prototype.addDir = function () {
        var _this = this;
        //this.openGallery();
        this.fileChooser.open()
            .then(function (uri) {
            _this.items.push({
                title: uri,
                note: uri,
                icon: _this.icons[Math.floor(Math.random() * _this.icons.length)]
            });
        })
            .catch(function (e) { return _this.items.push(); });
    };
    ListPage.prototype.itemTapped = function (event, item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__item_details_item_details__["a" /* ItemDetailsPage */], {
            item: item
        });
    };
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"D:\ShortSem\Project\MyIonicProject\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-title>My First List</ion-title>\n\n    \n\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  \n  <ion-list>\n    <ion-item *ngFor="let item of items" >\n      <ion-thumbnail item-start>\n        <img src={{item.note}}>\n      </ion-thumbnail>\n      <h2>{{item.title}}</h2>\n      <p>{{item.note}}</p>\n      <button ion-button clear item-end (click)="itemTapped($event, item)">View</button>\n    </ion-item>\n  </ion-list>\n\n\n</ion-content>\n\n<ion-footer>\n    <ion-toolbar>\n        <button ion-button block (click)="addDir()" >\n            <ion-icon name="add" ><span></span>upload</ion-icon>\n          </button>\n    </ion-toolbar>\n  </ion-footer>\n'/*ion-inline-end:"D:\ShortSem\Project\MyIonicProject\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_photo_library__["a" /* PhotoLibrary */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_chooser__["a" /* FileChooser */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item_details_item_details__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SettingPage = (function () {
    function SettingPage(navCtrl, navParams, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    SettingPage.prototype.logout = function () {
        var _this = this;
        this.storage.set('uname', null).then(function (val) {
            window.location.reload();
            _this.storage.set('pw', null);
        });
    };
    SettingPage.prototype.itemTapped = function (event, item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__item_details_item_details__["a" /* ItemDetailsPage */], {
            item: item
        });
    };
    SettingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-setting',template:/*ion-inline-start:"D:\ShortSem\Project\MyIonicProject\src\pages\setting\setting.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Settings</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-content>\n\n        <div padding>\n          <button ion-button color="dark" block (click)="logout()">Logout</button>\n          \n        </div>\n      \n       \n</ion-content>\n'/*ion-inline-end:"D:\ShortSem\Project\MyIonicProject\src\pages\setting\setting.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], SettingPage);
    return SettingPage;
}());

//# sourceMappingURL=setting.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(230);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_hello_ionic_hello_ionic__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_item_details_item_details__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_setting_setting__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_create_acount_create_acount__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_browser_browser__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_photo_library__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_storage__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_file_chooser__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_file__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_image_picker__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_http__ = __webpack_require__(264);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_hello_ionic_hello_ionic__["a" /* HelloIonicPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_item_details_item_details__["a" /* ItemDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_setting_setting__["a" /* SettingPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_create_acount_create_acount__["a" /* CreateAcountPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_browser_browser__["a" /* BrowserPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/browser/browser.module#BrowserPageModule', name: 'BrowserPage', segment: 'browser', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/create-acount/create-acount.module#CreateAcountPageModule', name: 'CreateAcountPage', segment: 'create-acount', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_14__ionic_storage__["a" /* IonicStorageModule */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_hello_ionic_hello_ionic__["a" /* HelloIonicPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_item_details_item_details__["a" /* ItemDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_setting_setting__["a" /* SettingPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_create_acount_create_acount__["a" /* CreateAcountPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_browser_browser__["a" /* BrowserPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_file_chooser__["a" /* FileChooser */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_photo_library__["a" /* PhotoLibrary */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_image_picker__["a" /* ImagePicker */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_http__["a" /* HTTP */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_hello_ionic_hello_ionic__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_list_list__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_setting_setting__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = (function () {
    function MyApp(platform, menu, statusBar, splashScreen, storage) {
        var _this = this;
        this.platform = platform;
        this.menu = menu;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.storage = storage;
        // make HelloIonicPage the root (or first) page
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__pages_hello_ionic_hello_ionic__["a" /* HelloIonicPage */];
        this.initializeApp();
        this.storage.get('uname').then(function (val) {
            if (val == null) {
                console.log('Your uname is', val);
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */]);
            }
        });
        // set our app's pages
        this.pages = [
            { title: 'Quick Acces', component: __WEBPACK_IMPORTED_MODULE_2__pages_hello_ionic_hello_ionic__["a" /* HelloIonicPage */], icon: "paper-plane" },
            { title: 'Advanced and Explore', component: __WEBPACK_IMPORTED_MODULE_3__pages_list_list__["a" /* ListPage */], icon: "boat" },
            { title: 'Settings', component: __WEBPACK_IMPORTED_MODULE_4__pages_setting_setting__["a" /* SettingPage */], icon: "build" }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        var _this = this;
        // close the menu when clicking a link from the menu
        this.menu.close();
        // navigate to the new page if it is not the current page
        this.storage.get('uname').then(function (val) {
            _this.nav.setRoot(page.component);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]) === "function" && _a || Object)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\ShortSem\Project\MyIonicProject\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n    <ion-toolbar>\n      \n      <ion-title>EasySync</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        <ion-icon name="{{p.icon}}" ></ion-icon>\n        {{p.title}} \n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"D:\ShortSem\Project\MyIonicProject\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */]) === "function" && _f || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_image_picker__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ItemDetailsPage = (function () {
    function ItemDetailsPage(navCtrl, navParams, imagePicker) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.imagePicker = imagePicker;
        this.items = [];
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
    }
    ItemDetailsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var options = {
            maximumImagesCount: 10,
            width: 800,
            height: 800,
            quality: 80
        };
        this.imagePicker.getPictures(options).then(function (results) {
            for (var i = 0; i < results.length; i++) {
                _this.items.push({
                    title: results[i],
                    note: "s",
                });
            }
        }, function (err) { });
    };
    ItemDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-item-details',template:/*ion-inline-start:"D:\ShortSem\Project\MyIonicProject\src\pages\item-details\item-details.html"*/'<!--\n  Generated template for the BrowserPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  \n    <ion-navbar>\n      <ion-title>Quick Download</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding>\n  \n    <ion-list>\n      <button ion-item *ngFor="let item of items" >\n        <ion-icon name="ios-folder" item-left></ion-icon>\n        {{item.title}}\n        <div class="item-note" item-right>\n          {{item.note}}\n        </div>\n      </button>\n    </ion-list>\n  \n  \n  </ion-content>\n  '/*ion-inline-end:"D:\ShortSem\Project\MyIonicProject\src\pages\item-details\item-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_image_picker__["a" /* ImagePicker */]])
    ], ItemDetailsPage);
    return ItemDetailsPage;
}());

//# sourceMappingURL=item-details.js.map

/***/ })

},[206]);
//# sourceMappingURL=main.js.map