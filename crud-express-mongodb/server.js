const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const usersRoute = require('./routes/users');

mongoose.connect(
	'mongodb://127.0.0.1:27017/db_crud-express-mongodb',
	{ useNewUrlParser: true },
	() => {
		console.log('MONGODB CONNECTED!');
	}
);

const app = express();

app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);

app.use('/users', usersRoute);

app.listen(3000, () => console.log('running on PORT 3000!'));
