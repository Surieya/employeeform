// export pool from '../'
import pool from '../models/database.js'
import expressAsyncHandler from 'express-async-handler'



const getAllEmployees = expressAsyncHandler(async (req, res) => {

    const result = await pool.query('SELECT * FROM employees');

    return res.status(200).json(
        result.rows
    )

})


const createEmployee = expressAsyncHandler(async (req, res) => {
    const { name, age, dob, designation, salary, address } = req.body;
    const result = await pool.query('INSERT INTO employees(name,age,dob,designation,salary,address) VALUES($1,$2,$3,$4,$5,$6) RETURNING *', [name, age, dob, designation, salary, address]);

    return res.status(201).json(
        result.rows[0]
    )
})

const deleteEmployee = expressAsyncHandler(async (req, res) => {
    const { id } = req.params;
    const result = await pool.query('DELETE FROM employees WHERE id=$1 RETURNING *', [id]);
    return res.status(202).json(
        result.rows[0]
    )
})


export {
    getAllEmployees,
    createEmployee,
    deleteEmployee
}