import * as express from 'express';
import { Request, Response } from 'express';
import { obtenerCursos, insertarCursos } from '../BD/ConsCursos';

export class ServiceCursos{

    public router : express.Router = express.Router();

    constructor(){
        this.initRutas();
    }
    private initRutas(){
        this.router.get('/cursos', this.Curso);
        this.router.post('/insertarCurso', this.insertarCurso);
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
}