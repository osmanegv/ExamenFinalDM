const express =require('express');
import { router } from "./routes/routes";

const app = express();
app.use(express.json());
const port = 5000;
app.use('', router);


app.listen(port, ()=>{
	console.log('El server está levantado en el puerto 5000');
});