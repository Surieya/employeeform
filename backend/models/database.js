import pg from "pg"
import dotenv from 'dotenv'
dotenv.config();

const Pool = pg.Pool;


// const pool = new Pool({
//     port: process.env.PG_PORT,
//     host: process.env.PG_HOST,
//     database: process.env.PG_DATABASE,
//     password: process.env.PG_PASSWORD,
//     user: process.env.PG_USER,
// })

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL + "?sslmode=require",
})

const createConnection =async () => {
    try {
        const connection = await pool.connect();
        console.log('DB CONNECTED');
        connection.release();
    
    } catch (error) {
        console.log(error);
        console.log("DB ERROR");
    }
}

export { createConnection };
export default pool;