import express from 'express';
const router = express.Router();

import apiController from '../controller/api';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/upload', (req, res, next) => {
    res.render('upload');
});

router.get('/list', async (req, res, next) => {
    try {
        const fileList = await apiController.getList(req);
        res.render('list', { fileList });
    } catch (error) {
        res.send('error');
    }
});

export default router;
