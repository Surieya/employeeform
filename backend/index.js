import express from 'express';
import { createConnection } from './models/database.js';
import employeeRoutes from './routes/employeeRoutes.js'
import cors from 'cors'


const PORT = 8000;
const app = express();

createConnection();


app.use(express.json());
app.use(cors({
    origin:['http://localhost:5173','https://employeeform-three.vercel.app']
}))

app.use('/api/employees',employeeRoutes)



app.listen(PORT, () => {
    console.log('backend running successfully at port ' + PORT);
})