const mongoose = require('mongoose')



module.exports = (async () => {
    try {
        const db = await mongoose.connect("mongodb://localhost:27017/PaginaNoticias");
        console.log("Database connected to ", db.connection.name);
    } catch (error) {
        console.error(error);
    }
    });