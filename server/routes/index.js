const express = require('express');
// Importando a rota de cartas.
const letter = require('./letter');
const router = express.Router();

//Rota para validarmos se a api está atualizada.
router.get('/api-status', (req, res) =>
  res.json({
    status: "ok"
  })
);


//Configurando e mapeando a rota de usuarios. 
router.use('/letter', letter);

module.exports = router;