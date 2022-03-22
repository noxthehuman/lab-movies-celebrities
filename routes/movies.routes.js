const Celebrity = require('../models/Celebrity.model')
const Movie = require('../models/Movie.model')
const router = require("express").Router()

// all your routes here
router.get('/movies/create', async (req, res, next) => {
    const celebrities = await Celebrity.find()
    res.render('movies/new-movie', {celebrities})
})

router.post('/movies/create', async (req, res, next) => {
    try {
        const movieToCreate = req.body
        await Movie.create(movieToCreate)

        res.redirect('/movies')
    }
    catch {
        res.redirect('movies/new-movie')
    }
})

router.get('/movies', async (req, res, next) => {
    try {
        const movies = await Movie.find()
        res.render('movies/movies', {movies})
    }
    catch(error) {
        console.error(error)
    }
})

router.get('/movies/:id', async (req, res, next) => {
    try {

    const id = req.params.id
    const movie = await Movie.findById(id).populate("cast")

    res.render('movies/movie-details', {movie})
    }
    catch(error) {
        console.error(error)
    }
})

router.post('/movies/:id/delete', async (req, res, next) => {
    try {

    const id = req.params.id
    await Movie.findByIdAndDelete(id)

    res.redirect('/movies')
    }
    catch(error) {
        console.error(error)
    }
})

module.exports = router;