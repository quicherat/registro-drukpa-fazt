import app from './app.js';
import {dbConnection} from './db.js';
import 'dotenv/config'

dbConnection();
app.listen(process.env.PORT)
console.log(`El servidor en la puerta ${process.env.PORT}`);