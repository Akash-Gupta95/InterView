import express from 'express';
import {  GetSingleQBank, QBank, addSubquestions } from '../controllers/BankController.js';
const router = express.Router();



router.get('/getallSubject', QBank)

router.post('/getBySubject/:subject', GetSingleQBank)

// router.post('/add-Question', addQuestion)
router.post('/add-subquestions', addSubquestions)



export default router;
