const mongoose = require('mongoose')



module.exports = (async () => {
    try {
        const db = await mongoose.connect("mongodb://127.0.0.1:27017/PaginaNoticias");
        console.log("Database connected to ", db.connection.name);
    } catch (error) {
        console.error(error);
    }
    });