import { Router } from "express";
import {serviceEstudiante } from "../services/EstudianteAPI"
import { serviceAsignaciones } from "../services/AsignacionesAPI";
import { ServiceCursos } from "../services/CursosAPI";


const router = Router();
const stundent = new serviceEstudiante ();
const asignaciones = new serviceAsignaciones();
const cursos = new ServiceCursos();

router.use('/service', stundent.router);
router.use('/service',asignaciones.router );
router.use('/service',cursos.router)
export {router};

