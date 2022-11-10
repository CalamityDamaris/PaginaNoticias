var express = require('express');
var router = express.Router();
const upload = require('../middleware/multer')
var mainController = require('../controllers/mainController')
/* GET home page. */
router.get('/', mainController.index);
router.get('/noticia/:titulo',mainController.noticia)
router.get('/crud', mainController.crud);

router.post('/crearNota', upload.single('imagenCrud'),mainController.crearNota)
module.exports = router;
router.delete('/noticia/:titulo/eliminar',mainController.eliminarNota)
