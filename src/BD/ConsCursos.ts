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
export function buscarCurso(codigo:any, callback:(err: Error | null, resultados?: any) => void){
    const query= "SELECT * FROM Curso WHERE CodigoCurso =?";
    conexion.query(query,[codigo], (err, results)=>{
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
export function actualizarCurso(codigoCurso:any, datos: any, callback:(error:Error | null)=> void){
    const data: PostCursos = datos;
    console.log (codigoCurso, data); 
    conexion.query('UPDATE Curso SET ? WHERE CodigoCurso = ?',[data, codigoCurso], err=>{
        if(err){
            callback(err);
            return
        }
        callback(null);
        });
    
}

export function eliminarCurso(codigoCurso: any, callback:(error:Error | null)=> void){
    console.log(codigoCurso);
    conexion.query('DELETE FROM Curso WHERE CodigoCurso = ?', [codigoCurso], (err)=>{
        if(err){
            callback(err);
            return 
        }
        callback(null);
    } )
}

