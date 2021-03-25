const database = require('../db/connection')
const Schema = database.Schema;

const StrainSchema = new Schema({
    name:String,
    race:String,
    desc:String,
    effects:{
        positive:Array,
        negative:Array,
        medical:Array
    }

})

const Strain = database.model('Strain',StrainSchema)

module.exports = Strain