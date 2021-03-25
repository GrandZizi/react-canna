const express = require('express')
const StrainModel = require('../models/StrainModel')
const router = express.Router()

router.get('/', (req,res,next) => {
    StrainModel.find({})
        .then(strains => {
            res.json(strains)
        })
        .catch(next)
})

module.exports = router