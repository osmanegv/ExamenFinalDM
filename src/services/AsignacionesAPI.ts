import * as express from 'express';
import { Request, Response } from 'express';
import { obtenerAsignaciones, insertarAsignacion, buscarAsignacion, eliminarAsignacion, actualizarAsignacion } from '../BD/ConsAsignaciones';

export class serviceAsignaciones{

    public router : express.Router = express.Router();

    constructor(){
        this.initRutas();
    }
    private initRutas(){
        this.router.get('/asignaciones', this.Asignaciones);
        this.router.get('/asignaciones/:Carnet', this.buscarAsignacion);
        this.router.post('/asignaciones', this.insertarAsignacion);
        this.router.put('/asignaciones/:Carnet', this.actualizarAsignacion);
        this.router.delete('/asignaciones/:Carnet', this.eliminarAsignacion);
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
    private async buscarAsignacion(req: Request, res:Response){
        const carnet = req.params.Carnet
        buscarAsignacion(carnet, (error, resultados)=>{
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

    private async actualizarAsignacion(req: Request, res: Response){
        const carnet = req.params.Carnet
        const datos = req.body
        actualizarAsignacion(carnet, datos, (error)=>{
            if(error){
                res.status(400).json({error: "Error de actualizacion" + error});
            }
            res.json({mensaje: "datos actualizados"});
        })
    }
    private eliminarAsignacion(req: Request, res:Response){
        const carnet = req.params.Carnet
        eliminarAsignacion(carnet, (error)=>{
            if(error){
                res.status(500).json({error: 'Error de eliminacion'+ error});
            }
            res.status(200).json({Mensaje: "Datos eliminados"});
        })
    }
}
export default serviceAsignaciones;
