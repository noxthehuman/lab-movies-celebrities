const Celebrity = require("../models/Celebrity.model");

const router = require("express").Router();

// all your routes here
router.get('/celebrities/create', (req, res, next) => {
    res.render('celebrities/new-celebrity')
}) 

router.post('/celebrities/create', async (req, res, next) => {
    try {
        const celebToCreate = req.body
        await Celebrity.create(celebToCreate)

        res.redirect('/celebrities')
    }
    catch {
        res.redirect('/celebrities/new-celebritiy')
    }
})

router.get('/celebrities', async (req, res, next) => {
    try {
        const celebrities = await Celebrity.find()
        res.render('celebrities/celebrities', {celebrities} )
    }
    catch(error) {
        console.error(error)
    }
})


module.exports = router;