const mongoose = require("mongoose");
const axios = require("axios");
const News = require("../database/models/News");
const url =
  "https://newsapi.org/v2/top-headlines?country=ar&pageSize=10&apiKey=56a089a877194de3a7adc913adab5f1c";
module.exports = {
  index: (req, res) => {
    axios
      .get(url)
      .then((response) => {
        let noticias = response.data.articles;
        res.render("index", { noticias: noticias });
      })
      .catch(function (err) {
        console.log("Unable to fetch -", err);
      });
  },
  noticia: async (req, res) => {
    let nota = await News.findOne({url: req.params.titulo}).exec()
    let noticias = await News.find();
    res.render("noticia",{data:[
      {nota:nota}, {noticias:noticias}
    ]});
  },
  crud: async (req, res) => {
    let nota = await News.find();
    res.render("crud", { nota: nota });
  },
  crearNota: async (req, res) => {
    let url = req.body.tituloCrud.trim()
    let urlFinal = url.replace(/ /g, "-");
    let infoParaGuardar = {
      titulo: req.body.tituloCrud,
      subtitulo: req.body.subtituloCrud,
      cuerpo: req.body.cuerpo,
      imagen: req.file.filename,
      url: urlFinal,
    };
    let nota = News(infoParaGuardar);

    let notaGuardada = await nota.save();
    res.redirect('/noticia/' + urlFinal)
  },
  eliminarNota: async (req, res) => {
    await News.findOneAndDelete({url: req.params.titulo }).exec()
    res.redirect('/crud')
  },
  doc: (req,res) => {
    res.render("doc")
  }
};
