import mysql  from 'mysql2'

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'pass',
    database: 'BDFinal'
    
    });
    
    conexion.connect((err)=>{
        if(err){
            console.log('error de conexion', err);
            return;
        }
        
            console.log('conectado');
            
    });
    export default conexion