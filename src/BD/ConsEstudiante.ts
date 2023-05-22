import conexion  from "./conexion";
import { PostEstudiante } from "../interfaces/Interfaces";


export function obtenerDatos(callback:(err: Error | null, resultados?: any) => void){
conexion.query('SELECT * FROM Estudiante', (err, results)=>{
    if(err){
        callback(err);
        return;
    }
    callback(null, results);
    return;
})
} 

export function insertarEstudiate(datos:any, callback: (error: Error | null) => void){
    const data: PostEstudiante = datos;
    console.log(data);
    conexion.query('INSERT INTO Estudiante SET ?', [data], err=>{
        if (err) {
            callback(err);
            return;
          }
          callback(null);
    })
    
    
}


