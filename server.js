
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ limit: '200mb', extended: true }));
app.use(express.json({ limit: '200mb', extended: true }));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/dbApartments', {
    useNewUrlParser: true,
    useFindAndModify: false
})

app.use(require('./routes/index.js'));

app.listen(PORT, function () {
    console.log(`Now listening on port: 3001`);
});