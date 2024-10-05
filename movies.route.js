import express from "express";
import { 
    MovieCreate, 
    MovieDelete, 
    MovieIndex, 
    MovieUpdate
} from "../Controllers/movie.controller.js";


const router = express.Router();
// CRUD FUNCTIONALITY of movies

// /movies/movies
//R- for reading 
router.get('/', MovieIndex);

// C- for creating movies
router.post('/', MovieCreate);

// U- for update movie
router.put('/:id', MovieUpdate);

// D- for delete movie
router.delete('/:id', MovieDelete);

export default router;