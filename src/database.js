const mongoose = require('mongoose');

// mongoose.connect(process.env.MONGODB_URI, {
//     useNewUrlParser: true
// })
//     .then(db => console.log('BD concectado'))
//     .catch(err => console.error(err));

(async () => {
    try{
        const db = await mongoose.connect(process.env.MONGODB_URI);
        console.log('BD concectado')
    } catch (error) {
        onsole.error(err)
    }
})();

