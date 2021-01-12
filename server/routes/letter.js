const express = require('express');
//importando o controller de cartas
const letter = require('../controller/letter');

const router = express.Router();

//Rota para buscar todos as cartas cadastradas
router.route('/').get(letter.getAll);

//Rota para buscar uma carta por ID 
router.route('/:id').get(letter.get);

//Rota para cadastrar uma carta
router.route('/').post(letter.post);

//Rota para editar uma carta 
router.route('/').put(letter.put);

//Rota para Deletar uma carta
router.route('/:id').delete(letter.del);

module.exports = router;