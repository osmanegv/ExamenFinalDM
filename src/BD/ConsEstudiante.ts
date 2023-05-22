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
export function buscarEstudiante(carnet:any, callback:(err: Error | null, resultados?: any) => void){
    conexion.query('SELECT * FROM Estudiante WHERE CarnetEstudiante = ?',[carnet], (err, results)=>{
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
export function actualizarEstudiante(carnet:any, datos: any, callback:(error:Error | null)=> void){
    const data: PostEstudiante = datos;
    console.log (carnet, data); 
    conexion.query('UPDATE Estudiante SET ? WHERE CarnetEstudiante = ?',[data, carnet], err=>{
        if(err){
            callback(err);
            return
        }
        callback(null);
        });
    
}

export function eliminarEstudiante(carnet: any, callback:(error:Error | null)=> void){
    console.log(carnet);
    conexion.query('DELETE FROM Estudiante WHERE CarnetEstudiante = ?', [carnet], (err)=>{
        if(err){
            callback(err);
            return 
        }
        callback(null);
    } )
}


