import express from 'express'
import { createEmployee,deleteEmployee,getAllEmployees } from '../controller/employeeController.js';

const router = express.Router();


router.route('/').get(getAllEmployees).post(createEmployee)
router.route('/:id').delete(deleteEmployee)


export default router;