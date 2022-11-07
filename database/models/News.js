const mongoose = require('mongoose');

const news = new mongoose.Schema({
    titulo: {
        type: String,
        required: true,
        trim: true,
    },
    subtitulo: {
        type: String,
        required: true,
        trim: true,
    },
    cuerpo: {
        type: String,
        required: true,
    },
    imagen: {
        type: String,
    },
    url: {
        type: String,
    },
    fecha: { type: Date, default: Date.now }
},
    {
        timestamps: false,
        versionKey: false,
    })

module.exports = mongoose.model('News', news)