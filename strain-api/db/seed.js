const seedData = require('./seed.json')
const StrainModel = require('../models/StrainModel')

StrainModel.deleteMany({})
    .then(() => {
        StrainModel.insertMany(seedData)
            .then(strain => {
                console.log(strain)
                process.exit()
            })
    })
    .catch(err => console.error)