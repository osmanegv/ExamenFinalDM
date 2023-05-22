"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminarAsignacion = exports.actualizarAsignacion = exports.insertarAsignacion = exports.buscarAsignacion = exports.obtenerAsignaciones = void 0;
const conexion_1 = __importDefault(require("./conexion"));
function obtenerAsignaciones(callback) {
    const query = "SELECT t2.Nombre, t1.*  from Asignacion t1 join Estudiante t2 on t1.CarnetEstudiante = t2.CarnetEstudiante ";
    conexion_1.default.query(query, (err, results) => {
        if (err) {
            callback(err);
        }
        callback(null, results);
        return;
    });
}
exports.obtenerAsignaciones = obtenerAsignaciones;
function buscarAsignacion(carnet, callback) {
    const query = "SELECT t2.Nombre, t1.*  from Asignacion t1 join Estudiante t2 on t1.CarnetEstudiante = t2.CarnetEstudiante WHERE t1.CarnetEstudiante =?";
    conexion_1.default.query(query, [carnet], (err, results) => {
        if (err) {
            callback(err);
            return;
        }
        callback(null, results);
        return;
    });
}
exports.buscarAsignacion = buscarAsignacion;
function insertarAsignacion(datos, callback) {
    const data = datos;
    console.log(data);
    conexion_1.default.query('INSERT INTO Asignacion SET ?', [data], err => {
        if (err) {
            callback(err);
            return;
        }
        callback(null);
    });
}
exports.insertarAsignacion = insertarAsignacion;
function actualizarAsignacion(carnet, datos, callback) {
    const data = datos;
    console.log(carnet, data);
    conexion_1.default.query('UPDATE Asignacion SET ? WHERE CarnetEstudiante = ?', [data, carnet], err => {
        if (err) {
            callback(err);
            return;
        }
        callback(null);
    });
}
exports.actualizarAsignacion = actualizarAsignacion;
function eliminarAsignacion(carnet, callback) {
    console.log(carnet);
    conexion_1.default.query('DELETE FROM Asignacion WHERE CarnetEstudiante = ?', [carnet], (err) => {
        if (err) {
            callback(err);
            return;
        }
        callback(null);
    });
}
exports.eliminarAsignacion = eliminarAsignacion;
//# sourceMappingURL=ConsAsignaciones.js.map