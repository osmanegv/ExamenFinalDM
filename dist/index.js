"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const routes_1 = require("./routes/routes");
const app = express();
app.use(express.json());
const port = 5000;
app.use('', routes_1.router);
app.listen(port, () => {
    console.log('El server está levantado en el puerto 5000');
});
//# sourceMappingURL=index.js.map