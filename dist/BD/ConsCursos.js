"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertarCursos = exports.obtenerCursos = void 0;
const conexion_1 = __importDefault(require("./conexion"));
function obtenerCursos(callback) {
    conexion_1.default.query('SELECT * FROM Curso', (err, results) => {
        if (err) {
            callback(err);
            return;
        }
        callback(null, results);
        return;
    });
}
exports.obtenerCursos = obtenerCursos;
function insertarCursos(datos, callback) {
    const data = datos;
    console.log(data);
    conexion_1.default.query('INSERT INTO Curso SET ?', [data], err => {
        if (err) {
            callback(err);
            return;
        }
        callback(null);
    });
}
exports.insertarCursos = insertarCursos;
//# sourceMappingURL=ConsCursos.js.map