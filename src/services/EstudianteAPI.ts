import * as express from 'express';
import { Request, Response } from 'express';
import { obtenerDatos, insertarEstudiate } from '../BD/ConsEstudiante';

export class serviceEstudiante {
    public router : express.Router = express.Router();

    constructor(){
        this.initRutas();
    }
    private initRutas(){
        this.router.get('/estudiante', this.Estudiante);
        this.router.post('/insertEstudiante', this.insertarEstudiante);
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
}
export default serviceEstudiante 