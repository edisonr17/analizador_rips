"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.RipsController = void 0;
var readFile_1 = require("./../commons/readFile");
var alasql = require('alasql');
var RipsController = /** @class */ (function () {
    function RipsController() {
        var _this = this;
        this.objRips = {};
        this.readRips = function () { return __awaiter(_this, void 0, void 0, function () {
            var columns, _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, result, _m, _o, _p, _q, finalConf, _i, _r, conf;
            return __generator(this, function (_s) {
                switch (_s.label) {
                    case 0:
                        columns = [];
                        _a = this.objRips;
                        return [4 /*yield*/, this.readFiles.getDataFromFileForge('./files/rips/AC.txt', [])];
                    case 1:
                        _a.AC = _s.sent();
                        _b = this.objRips;
                        return [4 /*yield*/, this.readFiles.getDataFromFileForge('./files/rips/AF.txt', [])];
                    case 2:
                        _b.AF = _s.sent();
                        _c = this.objRips;
                        return [4 /*yield*/, this.readFiles.getDataFromFileForge('./files/rips/AH.txt', [])];
                    case 3:
                        _c.AH = _s.sent();
                        _d = this.objRips;
                        return [4 /*yield*/, this.readFiles.getDataFromFileForge('./files/rips/AM.txt', [])];
                    case 4:
                        _d.AM = _s.sent();
                        _e = this.objRips;
                        return [4 /*yield*/, this.readFiles.getDataFromFileForge('./files/rips/AN.txt', [])];
                    case 5:
                        _e.AN = _s.sent();
                        _f = this.objRips;
                        return [4 /*yield*/, this.readFiles.getDataFromFileForge('./files/rips/AP.txt', [])];
                    case 6:
                        _f.AP = _s.sent();
                        _g = this.objRips;
                        return [4 /*yield*/, this.readFiles.getDataFromFileForge('./files/rips/AT.txt', [])];
                    case 7:
                        _g.AT = _s.sent();
                        _h = this.objRips;
                        return [4 /*yield*/, this.readFiles.getDataFromFileForge('./files/rips/AU.txt', [])];
                    case 8:
                        _h.AU = _s.sent();
                        _j = this.objRips;
                        return [4 /*yield*/, this.readFiles.getDataFromFileForge('./files/rips/CT.txt', [])];
                    case 9:
                        _j.CT = _s.sent();
                        _k = this.objRips;
                        return [4 /*yield*/, this.readFiles.getDataFromFileForge('./files/rips/US.txt', [])];
                    case 10:
                        _k.US = _s.sent();
                        _l = this.objRips;
                        return [4 /*yield*/, this.readFiles.readXLSX('./files/configFiles/HOSPITAL.xlsx', 1, 2)];
                    case 11:
                        _l.config = _s.sent();
                        result = {};
                        _m = result;
                        return [4 /*yield*/, alasql(this.getQueryByFile("AC", this.getIndexFromFile("AC").cups), [this.objRips.AC, this.objRips.config])];
                    case 12:
                        _m.AC_RESULT = _s.sent();
                        _o = result;
                        return [4 /*yield*/, alasql(this.getQueryByFile("AM", this.getIndexFromFile("AM").med), [this.objRips.AM, this.objRips.config])];
                    case 13:
                        _o.AM_RESULT = _s.sent();
                        _p = result;
                        return [4 /*yield*/, alasql(this.getQueryByFile("AP", this.getIndexFromFile("AP").cups), [this.objRips.AM, this.objRips.config])];
                    case 14:
                        _p.AP_RESULT = _s.sent();
                        _q = result;
                        return [4 /*yield*/, alasql(this.getQueryByFile("AT", this.getIndexFromFile("AT").cups), [this.objRips.AM, this.objRips.config])];
                    case 15:
                        _q.AT_RESULT = _s.sent();
                        finalConf = [];
                        for (_i = 0, _r = this.objRips.config; _i < _r.length; _i++) {
                            conf = _r[_i];
                            finalConf.push({ code: conf[1], name: conf[2], equivalent: conf[3] });
                        }
                        return [4 /*yield*/, this.readFiles.escribirExcelGenerico('./files/configFiles/HOSPITAL.xlsx', './results/SALIDA.xlsx', this.objRips.config, 1)];
                    case 16:
                        _s.sent();
                        return [4 /*yield*/, this.readFiles.escribirExcelGenerico('./results/SALIDA.xlsx', './results/SALIDA.xlsx', result.AC_RESULT, 2)];
                    case 17:
                        _s.sent();
                        return [4 /*yield*/, this.readFiles.escribirExcelGenerico('./results/SALIDA.xlsx', './results/SALIDA.xlsx', result.AM_RESULT, 3)];
                    case 18:
                        _s.sent();
                        return [4 /*yield*/, this.readFiles.escribirExcelGenerico('./results/SALIDA.xlsx', './results/SALIDA.xlsx', result.AP_RESULT, 4)];
                    case 19:
                        _s.sent();
                        return [4 /*yield*/, this.readFiles.escribirExcelGenerico('./results/SALIDA.xlsx', './results/SALIDA.xlsx', result.AT_RESULT, 5)];
                    case 20:
                        _s.sent();
                        console.log(result.AC_RESULT);
                        return [2 /*return*/];
                }
            });
        }); };
        this.getQueryByFile = function (type, indMov) {
            if (type == "AC") {
                return "SELECT ac.[" + indMov + "] as codigo, count(ac.[" + indMov + "]) as conteo , conf.code\n            FROM ? ac \n            left join ? as  conf on conf.code = ac.[" + indMov + "] \n            group by [" + indMov + "]";
            }
            if (type == "AM") {
                return "SELECT ac.[" + indMov + "] as codigo, count(ac.[" + indMov + "]) as conteo\n            FROM ? ac group by [" + indMov + "]";
            }
            if (type == "AP") {
                return "SELECT ac.[" + indMov + "] as codigo, count(ac.[" + indMov + "]) as conteo\n            FROM ? ac group by [" + indMov + "]";
            }
            if (type == "AT") {
                return "SELECT ac.[" + indMov + "] as codigo, count(ac.[" + indMov + "]) as conteo\n            FROM ? ac group by [" + indMov + "]";
            }
        };
        this.getIndexFromFile = function (type) {
            if (type == "AC") {
                return {
                    "cups": 6
                };
            }
            if (type == "AM") {
                return {
                    "med": 5
                };
            }
            if (type == "AP") {
                return {
                    "cups": 7
                };
            }
            if (type == "AT") {
                return {
                    "cups": 3
                };
            }
        };
        this.readFiles = new readFile_1.ReadFiles();
    }
    return RipsController;
}());
exports.RipsController = RipsController;
