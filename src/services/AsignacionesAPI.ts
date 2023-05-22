import * as express from 'express';
import { Request, Response } from 'express';
import { obtenerAsignaciones, insertarAsignacion } from '../BD/ConsAsignaciones';

export class serviceAsignaciones{

    public router : express.Router = express.Router();

    constructor(){
        this.initRutas();
    }
    private initRutas(){
        this.router.get('/asignaciones', this.Asignaciones);
        this.router.post('/insertarAsignacion', this.insertarAsignacion);
    }

    private async Asignaciones(req: Request, res: Response ){
        obtenerAsignaciones ((error, resultados) =>{
            if(error){
                res.status(400).send('Error al obtener los datos'+ error);
                return;
            }
            res.status(200).send(resultados);
        })
    }
    private async insertarAsignacion(req: Request, res: Response){
        console.log(req.body);
        const  datos = req.body;
        insertarAsignacion(datos, (error)=>{
            if(error){
                res.status(500).json({error: "Error de insersion"  + error});
                return;
            }
            res.json({mensaje: "datos insertados"});
        })
        
    }
}