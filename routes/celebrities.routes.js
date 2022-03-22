const Celebrity = require("../models/Celebrity.model");

const router = require("express").Router();

// all your routes here
router.get('/celebrities/create', (req, res) => {
    res.render('celebrities/new-celebrity')
}) 

router.post('/celebrities/create', async (req, res) => {
    try {
        const celebToCreate = req.body
        await Celebrity.create(celebToCreate)

        res.redirect('/celebrities')
    }
    catch {
        res.redirect('/celebrities/new-celebritiy')
    }
})


module.exports = router;