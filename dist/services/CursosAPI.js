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
exports.ServiceCursos = void 0;
const express = __importStar(require("express"));
const ConsCursos_1 = require("../BD/ConsCursos");
class ServiceCursos {
    constructor() {
        this.router = express.Router();
        this.initRutas();
    }
    initRutas() {
        this.router.get('/cursos', this.Curso);
        this.router.get('/cursos/:codigoCurso', this.buscarCurso);
        this.router.post('/cursos', this.insertarCurso);
        this.router.put('/cursos/:codigoCurso', this.actualizarCurso);
        this.router.delete('/cursos/:codigoCurso', this.eliminarCurso);
    }
    Curso(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, ConsCursos_1.obtenerCursos)((error, resultados) => {
                if (error) {
                    res.status(400).send('Error al obtener los datos' + error);
                    return;
                }
                res.status(200).send(resultados);
            });
        });
    }
    buscarCurso(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const codigo = req.params.codigoCurso;
            (0, ConsCursos_1.buscarCurso)(codigo, (error, resultados) => {
                if (error) {
                    res.status(400).send('Error al obtener los datos' + error);
                    return;
                }
                res.status(200).send(resultados);
            });
        });
    }
    insertarCurso(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            const datos = req.body;
            (0, ConsCursos_1.insertarCursos)(datos, (error) => {
                if (error) {
                    res.status(500).json({ error: "Error de insersion" + error });
                    return;
                }
                res.json({ mensaje: "datos insertados" });
            });
        });
    }
    actualizarCurso(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const codigo = req.params.codigoCurso;
            const datos = req.body;
            (0, ConsCursos_1.actualizarCurso)(codigo, datos, (error) => {
                if (error) {
                    res.status(400).json({ error: "Error de actualizacion" + error });
                }
                res.json({ mensaje: "datos actualizados" });
            });
        });
    }
    eliminarCurso(req, res) {
        const codigo = req.params.codigoCurso;
        (0, ConsCursos_1.eliminarCurso)(codigo, (error) => {
            if (error) {
                res.status(500).json({ error: 'Error de eliminacion' + error });
            }
            res.status(200).json({ Mensaje: "Datos eliminados" });
        });
    }
}
exports.ServiceCursos = ServiceCursos;
exports.default = ServiceCursos;
//# sourceMappingURL=CursosAPI.js.map