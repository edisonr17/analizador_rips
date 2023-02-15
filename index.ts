require('dotenv').config()
import { RipsController } from "./business/controllers/RipsController"; 





const express = require('express')
const app = express();
const port = 3001

app.get('/', (req:any, res:any) => {
    res.setHeader('Content-Type', 'application/json');
   
    res.send(JSON.stringify({key:"value"}));
})




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


let ripsController = new RipsController();
ripsController.readRips();
