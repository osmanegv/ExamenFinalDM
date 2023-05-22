export interface PostEstudiante {
    CarnetEstudiante?: number;
    Nombre: string;
    Carrera: string;
    Correo: string;
    Telefono: string;
    Genero: string;
    FechaIngreso: string;
}

export interface PostAsignaciones{
    CarnetEstudiante: number;
    CodigoCurso: number;
    Seccion: string;
    FechaAsignacion: string;
    Semestre: number;
    Año: Number;
}
export interface PostCursos{
    CodigoCurso: number;
    NombreCurso: string;
    Semestre: number;
    CreditosOtorga: number;
}