"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertarEstudiate = exports.obtenerDatos = void 0;
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
//# sourceMappingURL=ConsEstudiante.js.map