const mongoose = require('mongoose');

const usersSchema = require('../schemas/usersSchema');

const User = mongoose.model('User', usersSchema);

module.exports = User;
