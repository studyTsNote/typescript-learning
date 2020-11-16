import express from 'express';
const router = express.Router();

import apiController from '../controller/api';

router.post('/file_upload', async (req, res, next) => {
    try {
        await apiController.upload(req);
        res.send('success');
    } catch (error) {
        res.send('error');
    }
});

router.get('/list', async (req, res, next) => {
    try {
        const list = await apiController.getList(req);
        res.send(list);
    } catch (error) {
        res.send('error');
    }
});

export default router;
