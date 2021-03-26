const database = require('../db/connection');
const Schema = database.Schema;

const StrainSchema = new Schema({
	name: String,
	race: String,
	desc: String,
	effects: Object,
});

const Strain = database.model('Strain', StrainSchema);

module.exports = Strain;
