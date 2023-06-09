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
exports.serviceAsignaciones = void 0;
const express = __importStar(require("express"));
const ConsAsignaciones_1 = require("../BD/ConsAsignaciones");
class serviceAsignaciones {
    constructor() {
        this.router = express.Router();
        this.initRutas();
    }
    initRutas() {
        this.router.get('/asignaciones', this.Asignaciones);
        this.router.get('/asignaciones/:Carnet', this.buscarAsignacion);
        this.router.post('/asignaciones', this.insertarAsignacion);
        this.router.put('/asignaciones/:Carnet', this.actualizarAsignacion);
        this.router.delete('/asignaciones/:Carnet', this.eliminarAsignacion);
    }
    Asignaciones(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, ConsAsignaciones_1.obtenerAsignaciones)((error, resultados) => {
                if (error) {
                    res.status(400).send('Error al obtener los datos' + error);
                    return;
                }
                res.status(200).send(resultados);
            });
        });
    }
    buscarAsignacion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const carnet = req.params.Carnet;
            (0, ConsAsignaciones_1.buscarAsignacion)(carnet, (error, resultados) => {
                if (error) {
                    res.status(400).send('Error al obtener los datos' + error);
                    return;
                }
                res.status(200).send(resultados);
            });
        });
    }
    insertarAsignacion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            const datos = req.body;
            (0, ConsAsignaciones_1.insertarAsignacion)(datos, (error) => {
                if (error) {
                    res.status(500).json({ error: "Error de insersion" + error });
                    return;
                }
                res.json({ mensaje: "datos insertados" });
            });
        });
    }
    actualizarAsignacion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const carnet = req.params.Carnet;
            const datos = req.body;
            (0, ConsAsignaciones_1.actualizarAsignacion)(carnet, datos, (error) => {
                if (error) {
                    res.status(400).json({ error: "Error de actualizacion" + error });
                }
                res.json({ mensaje: "datos actualizados" });
            });
        });
    }
    eliminarAsignacion(req, res) {
        const carnet = req.params.Carnet;
        (0, ConsAsignaciones_1.eliminarAsignacion)(carnet, (error) => {
            if (error) {
                res.status(500).json({ error: 'Error de eliminacion' + error });
            }
            res.status(200).json({ Mensaje: "Datos eliminados" });
        });
    }
}
exports.serviceAsignaciones = serviceAsignaciones;
exports.default = serviceAsignaciones;
//# sourceMappingURL=AsignacionesAPI.js.map