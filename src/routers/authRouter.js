import express from 'express';
import login from '../controllers/auth/login';

const router = express.Router()


router.post('/login', ()=>{}), 
router.post('/logout', ()=>{}),
router.post('refresh-token', ()=>{})