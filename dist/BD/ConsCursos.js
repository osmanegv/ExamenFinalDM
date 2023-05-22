"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminarCurso = exports.actualizarCurso = exports.insertarCursos = exports.buscarCurso = exports.obtenerCursos = void 0;
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
function buscarCurso(codigo, callback) {
    const query = "SELECT * FROM Curso WHERE CodigoCurso =?";
    conexion_1.default.query(query, [codigo], (err, results) => {
        if (err) {
            callback(err);
            return;
        }
        callback(null, results);
        return;
    });
}
exports.buscarCurso = buscarCurso;
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
function actualizarCurso(codigoCurso, datos, callback) {
    const data = datos;
    console.log(codigoCurso, data);
    conexion_1.default.query('UPDATE Curso SET ? WHERE CodigoCurso = ?', [data, codigoCurso], err => {
        if (err) {
            callback(err);
            return;
        }
        callback(null);
    });
}
exports.actualizarCurso = actualizarCurso;
function eliminarCurso(codigoCurso, callback) {
    console.log(codigoCurso);
    conexion_1.default.query('DELETE FROM Curso WHERE CodigoCurso = ?', [codigoCurso], (err) => {
        if (err) {
            callback(err);
            return;
        }
        callback(null);
    });
}
exports.eliminarCurso = eliminarCurso;
//# sourceMappingURL=ConsCursos.js.map