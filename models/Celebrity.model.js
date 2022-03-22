//  Add your code here
require('../db')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const celebrityModel = new Schema({
    name: String,
    occupation: String,
    catchPhrase: String
})

const Celebrity = mongoose.model('Celebrity', celebrityModel)

module.exports = Celebrity