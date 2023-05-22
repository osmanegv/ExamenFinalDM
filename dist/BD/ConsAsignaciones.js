"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertarAsignacion = exports.obtenerAsignaciones = void 0;
const conexion_1 = __importDefault(require("./conexion"));
function obtenerAsignaciones(callback) {
    const query = "SELECT t2.Nombre, t1.*  from Asignacion t1 join Estudiante t2 on t1.CarnetEstudiante = t2.CarnetEstudiante";
    conexion_1.default.query(query, (err, results) => {
        if (err) {
            callback(err);
        }
        callback(null, results);
        return;
    });
}
exports.obtenerAsignaciones = obtenerAsignaciones;
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
//# sourceMappingURL=ConsAsignaciones.js.map