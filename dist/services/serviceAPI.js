"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceGET = void 0;
const express = __importStar(require("express"));
const consultas_1 = require("../BD/consultas");
class serviceGET {
    constructor() {
        this.router = express.Router();
        this.initRutas();
    }
    initRutas() {
        this.router.get('/estudiante', this.estudiante);
        this.router.post('/insertEstudiante', this.insertarEstudiante);
    }
    estudiante(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, consultas_1.obtenerDatos)((error, resultados) => {
                if (error) {
                    res.status(400).send('Error al obtener los datos' + error);
                    return;
                }
                res.status(200).send(resultados);
            });
        });
    }
    insertarEstudiante(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //const datos = JSON.stringify(req.body);
            console.log(req.body);
            // const {carrera, correo, telefono, genero, fecha_ingreso} = req.body;
            // const {carnet_estudiante} = req.params
            const datos = req.body;
            (0, consultas_1.insertarEstudiate)(datos, (error) => {
                if (error) {
                    res.status(500).json({ error: "Error de insersion" + error });
                    //res.json('error' + error)
                    return;
                }
                res.json({ mensaje: "datos insertados" });
                //res.json('datos insertados')
            });
        });
    }
}
exports.serviceGET = serviceGET;
exports.default = serviceGET;
//# sourceMappingURL=serviceAPI.js.map