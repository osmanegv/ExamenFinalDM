"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminarEstudiante = exports.actualizarEstudiante = exports.insertarEstudiate = exports.buscarEstudiante = exports.obtenerDatos = void 0;
const conexion_1 = __importDefault(require("./conexion"));
function obtenerDatos(callback) {
    conexion_1.default.query('SELECT * FROM Estudiante', (err, results) => {
        if (err) {
            callback(err);
            return;
        }
        callback(null, results);
        return;
    });
}
exports.obtenerDatos = obtenerDatos;
function buscarEstudiante(carnet, callback) {
    conexion_1.default.query('SELECT * FROM Estudiante WHERE CarnetEstudiante = ?', [carnet], (err, results) => {
        if (err) {
            callback(err);
            return;
        }
        callback(null, results);
        return;
    });
}
exports.buscarEstudiante = buscarEstudiante;
function insertarEstudiate(datos, callback) {
    const data = datos;
    console.log(data);
    conexion_1.default.query('INSERT INTO Estudiante SET ?', [data], err => {
        if (err) {
            callback(err);
            return;
        }
        callback(null);
    });
}
exports.insertarEstudiate = insertarEstudiate;
function actualizarEstudiante(carnet, datos, callback) {
    const data = datos;
    console.log(carnet, data);
    conexion_1.default.query('UPDATE Estudiante SET ? WHERE CarnetEstudiante = ?', [data, carnet], err => {
        if (err) {
            callback(err);
            return;
        }
        callback(null);
    });
}
exports.actualizarEstudiante = actualizarEstudiante;
function eliminarEstudiante(carnet, callback) {
    console.log(carnet);
    conexion_1.default.query('DELETE FROM Estudiante WHERE CarnetEstudiante = ?', [carnet], (err) => {
        if (err) {
            callback(err);
            return;
        }
        callback(null);
    });
}
exports.eliminarEstudiante = eliminarEstudiante;
//# sourceMappingURL=ConsEstudiante.js.map