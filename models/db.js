const mongoose = require('mongoose');

// connect to mongodb
var url = `mongodb+srv://angantic:210386ty@cluster0-c0ix8.mongodb.net/tutoriel?retryWrites=true&w=majority`;
mongoose.connect(url, { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('Connected to the DB :)') }
    else { console.log('Error in DB connection : ' + err) }
});

