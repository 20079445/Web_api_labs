import express from 'express';
import { genres } from './genresData';
import uniqid from 'uniqid'


const router = express.Router(); 

router.get('/', (req, res) => {
    res.json(genres);
});

router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if (genres.id == id) {
        res.status(200).json(genres);
    } else {
        res.status(404).json({
            message: 'The resource you requested could not be found.',
            status_code: 404
        });
    }
});

router.get('/:id/genres', (req, res) => {
    const id = parseInt(req.params.id);
    // find genres in list
    if (genres.id == id) {
        res.status(200).json(genres);
        
    } else {
        res.status(404).json({
            message: 'The resource you requested could not be found.',
            status_code: 404
        });
    }
});

router.post('/:id/genres', (req, res) => {
    const id = parseInt(req.params.id);

    if (genres.id == id) {
        req.body.created_at = new Date();
        req.body.updated_at = new Date();
        req.body.id = uniqid();
        genres.results.push(req.body); //push the new genre onto the list
        res.status(201).json(req.body);
    } else {
        res.status(404).json({
            message: 'The resource you requested could not be found.',
            status_code: 404
        });
    }
});

export default router;
