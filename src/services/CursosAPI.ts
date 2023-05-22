import * as express from 'express';
import { Request, Response } from 'express';
import { obtenerCursos, insertarCursos, buscarCurso, actualizarCurso, eliminarCurso } from '../BD/ConsCursos';

export class ServiceCursos{

    public router : express.Router = express.Router();

    constructor(){
        this.initRutas();
    }
    private initRutas(){
        this.router.get('/cursos', this.Curso);
        this.router.get('/cursos/:codigoCurso', this.buscarCurso);
        this.router.post('/cursos', this.insertarCurso);
        this.router.put('/cursos/:codigoCurso', this.actualizarCurso);
        this.router.delete('/cursos/:codigoCurso', this.eliminarCurso);
    }

    private async Curso(req: Request, res: Response ){
        obtenerCursos ((error, resultados) =>{
            if(error){
                res.status(400).send('Error al obtener los datos'+ error);
                return;
            }
            res.status(200).send(resultados);
        })
    }
    private async buscarCurso(req: Request, res:Response){
        const codigo = req.params.codigoCurso
        buscarCurso(codigo, (error, resultados)=>{
            if(error){
                res.status(400).send('Error al obtener los datos'+ error);
                return;
            }
            res.status(200).send(resultados);
        })
    }
    private async insertarCurso(req: Request, res: Response){
        console.log(req.body);
        const  datos = req.body;
        insertarCursos(datos, (error)=>{
            if(error){
                res.status(500).json({error: "Error de insersion"  + error});
                return;
            }
            res.json({mensaje: "datos insertados"});
        })
        
    }
    private async actualizarCurso(req: Request, res: Response){
        const codigo = req.params.codigoCurso
        const datos = req.body
        actualizarCurso(codigo, datos, (error)=>{
            if(error){
                res.status(400).json({error: "Error de actualizacion" + error});
            }
            res.json({mensaje: "datos actualizados"});
        })
    }
    private eliminarCurso(req: Request, res:Response){
        const codigo = req.params.codigoCurso
        eliminarCurso(codigo, (error)=>{
            if(error){
                res.status(500).json({error: 'Error de eliminacion'+ error});
            }
            res.status(200).json({Mensaje: "Datos eliminados"});
        })
    }
}
export default ServiceCursos