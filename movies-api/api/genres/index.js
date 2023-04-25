import uniqid from 'uniqid'
import express from 'express';
import { movies, movieGenres, movieDetails } from './moviesData';


const router = express.Router(); 

router.get('/', (req, res) => {
    res.json(movies);
});

router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if (movieDetails.id == id) {
        res.status(200).json(movieDetails);
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
    if (movieGenres.id == id) {
        res.status(200).json(movieGenres);
        
    } else {
        res.status(404).json({
            message: 'The resource you requested could not be found.',
            status_code: 404
        });
    }
});

router.post('/:id/genres', (req, res) => {
    const id = parseInt(req.params.id);

    if (movieGenres.id == id) {
        req.body.created_at = new Date();
        req.body.updated_at = new Date();
        req.body.id = uniqid();
        movieGenres.results.push(req.body); //push the new genre onto the list
        res.status(201).json(req.body);
    } else {
        res.status(404).json({
            message: 'The resource you requested could not be found.',
            status_code: 404
        });
    }
});

export default router;
