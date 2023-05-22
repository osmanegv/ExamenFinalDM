"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const EstudianteAPI_1 = require("../services/EstudianteAPI");
const AsignacionesAPI_1 = require("../services/AsignacionesAPI");
const CursosAPI_1 = require("../services/CursosAPI");
const router = (0, express_1.Router)();
exports.router = router;
const stundent = new EstudianteAPI_1.serviceEstudiante();
const asignaciones = new AsignacionesAPI_1.serviceAsignaciones();
const cursos = new CursosAPI_1.ServiceCursos();
router.use('/service', stundent.router);
router.use('/service', asignaciones.router);
router.use('/service', cursos.router);
//# sourceMappingURL=routes.js.map