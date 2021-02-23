//Boilerplate code for a node-express server, using a Mongo database
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ limit: '200mb', extended: true }));
app.use(express.json({ limit: '200mb', extended: true }));

//configuration for the mongoose database; when hosted on Heroku, using process.env, using a local storage when in development
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/dbApartments', {
    useNewUrlParser: true,
    useFindAndModify: false
})

app.use(require('./routes/index.js'));

//Initiates server, either from process.env when hosted on Heroku, or using a local port in development.
app.listen(PORT, function () {
    console.log(`Now listening on port: 3001`);
});