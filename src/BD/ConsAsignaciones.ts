import conexion from "./conexion";
import { PostAsignaciones } from "../interfaces/Interfaces";

export function obtenerAsignaciones(callback:(error: Error | null, Resultados?: any) => void){
    const query= "SELECT t2.Nombre, t1.*  from Asignacion t1 join Estudiante t2 on t1.CarnetEstudiante = t2.CarnetEstudiante ";
    conexion.query (query, (err, results)=>{
        if(err){
            callback(err);
        }
        callback(null, results);
        return;
    })
}
export function buscarAsignacion(carnet:any, callback:(err: Error | null, resultados?: any) => void){
    const query= "SELECT t2.Nombre, t1.*  from Asignacion t1 join Estudiante t2 on t1.CarnetEstudiante = t2.CarnetEstudiante WHERE t1.CarnetEstudiante =?";
    conexion.query(query,[carnet], (err, results)=>{
        if(err){
            callback(err);
            return;
        }
        callback(null, results);
        return;
    })
    } 
export function insertarAsignacion(datos:any, callback: (error: Error | null) => void){
    const data: PostAsignaciones = datos;
    console.log(data);
    conexion.query('INSERT INTO Asignacion SET ?', [data], err=>{
        if (err) {
            callback(err);
            return;
          }
          callback(null);
    })   
}
export function actualizarAsignacion(carnet:any, datos: any, callback:(error:Error | null)=> void){
    const data: PostAsignaciones = datos;
    console.log (carnet, data); 
    conexion.query('UPDATE Asignacion SET ? WHERE CarnetEstudiante = ?',[data, carnet], err=>{
        if(err){
            callback(err);
            return
        }
        callback(null);
        });
    
}

export function eliminarAsignacion(carnet: any, callback:(error:Error | null)=> void){
    console.log(carnet);
    conexion.query('DELETE FROM Asignacion WHERE CarnetEstudiante = ?', [carnet], (err)=>{
        if(err){
            callback(err);
            return 
        }
        callback(null);
    } )
}