const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true
})
    .then(db => console.log('BD concectado'))
    .catch(err => console.error(err));

