const mongoose = require("mongoose");
const axios = require('axios');
const url =
  "https://newsapi.org/v2/top-headlines?country=ar&pageSize=10&apiKey=56a089a877194de3a7adc913adab5f1c";
module.exports = {
  index: (req, res) => {
    axios.get(url)
      .then((response) => {
        let noticias = response.data.articles
        res.render('index',{noticias:noticias})
      })
      .catch(function (err) {
        console.log("Unable to fetch -", err);
      });
    
  },
};
