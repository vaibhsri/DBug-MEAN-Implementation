const mongoose = require('mongoose');
//create and deploy MongoDB database (DBug) before executing!
//will replace this with MLab cloud database <-------------------------------------------------------------------------------------------------------------------------------------------------
mongoose.connect('mongodb://localhost:27017/DBug', (err) => {
    if (!err)
        console.log('DBug connected successfully!');
    else
        console.log('DBug - Database connection failure! : '+JSON.stringify(err,undefined,2));
});

module.exports = mongoose;
//node db.js to execute, nodemon for auto update. 