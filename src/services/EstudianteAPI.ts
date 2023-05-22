import * as express from 'express';
import { Request, Response } from 'express';
import { obtenerDatos, insertarEstudiate, actualizarEstudiante, eliminarEstudiante, buscarEstudiante } from '../BD/ConsEstudiante';

export class serviceEstudiante {
    public router : express.Router = express.Router();

    constructor(){
        this.initRutas();
    }
    private initRutas(){
        this.router.get('/estudiante', this.Estudiante);
        this.router.get('/estudiante/:Carnet', this.buscarEstudiante);
        this.router.post('/estudiante', this.insertarEstudiante);
        this.router.put('/estudiante/:Carnet', this.actualizarEstudiante);
        this.router.delete('/estudiante/:Carnet', this.eliminarEstudiante);
    }


    private async Estudiante(req :Request, res:Response){   
        obtenerDatos ((error, resultados) =>{
            if(error){
                res.status(400).send('Error al obtener los datos'+ error);
                return;
            }
            res.status(200).send(resultados);
        })
    }
    private async buscarEstudiante(req: Request, res:Response){
        const carnet = req.params.Carnet
        buscarEstudiante(carnet, (error, resultados)=>{
            if(error){
                res.status(400).send('Error al obtener los datos'+ error);
                return;
            }
            res.status(200).send(resultados);
        })
    }

    private async insertarEstudiante(req: Request, res: Response){
        console.log(req.body);
        const  datos = req.body;
        insertarEstudiate(datos, (error)=>{
            if(error){
                res.status(500).json({error: "Error de insersion"  + error});
                return;
            }
            res.json({mensaje: "datos insertados"});
        })
    }
            
    private async actualizarEstudiante(req: Request, res: Response){
        const carnet = req.params.Carnet
        const datos = req.body
        actualizarEstudiante(carnet, datos, (error)=>{
            if(error){
                res.status(400).json({error: "Error de actualizacion" + error});
            }
            res.json({mensaje: "datos actualizados"});
        })
    }
    private eliminarEstudiante(req: Request, res:Response){
        const carnet = req.params.Carnet
        eliminarEstudiante(carnet, (error)=>{
            if(error){
                res.status(500).json({error: 'Error de eliminacion'+ error});
            }
            res.status(200).json({Mensaje: "Datos eliminados"});
        })
    }
}
export default serviceEstudiante 