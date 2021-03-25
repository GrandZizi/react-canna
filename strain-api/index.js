const express = require('express');
const app = express();
const cors = require('cors');
const controller = require('./controllers/StrainRoutes')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/strains', controller)


app.listen(420, () => {
	console.log('connected to strainAPI');
});
