import conexion  from "./conexion";
import { PostCursos } from "../interfaces/Interfaces";


export function obtenerCursos(callback:(err: Error | null, resultados?: any) => void){
conexion.query('SELECT * FROM Curso', (err, results)=>{
    if(err){
        callback(err);
        return;
    }
    callback(null, results);
    return;
})
} 

export function insertarCursos(datos:any, callback: (error: Error | null) => void){
    const data: PostCursos = datos;
    console.log(data);
    conexion.query('INSERT INTO Curso SET ?', [data], err=>{
        if (err) {
            callback(err);
            return;
          }
          callback(null);
    })
    
    
}