"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql2_1 = __importDefault(require("mysql2"));
const conexion = mysql2_1.default.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'pass',
    database: 'BDFinal'
});
conexion.connect((err) => {
    if (err) {
        console.log('error de conexion', err);
        return;
    }
    console.log('conectado');
});
exports.default = conexion;
//# sourceMappingURL=conexion.js.map