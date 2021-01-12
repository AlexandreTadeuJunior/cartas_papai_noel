//importando o service de cartas 
const letter = require('../service/letter');

//Método que retorna todos as cartas
async function getAll (req, res) {
  return await letter
    .getAll()
    .catch(err => {
      res.status(err.statusCode || 500).send(err);
    })
    .then(q => {
      return res.status(200).send(q);
    });
}

//Método que retorna apenas uma carta de acordo com o id informado
async function get (req, res) {
  return await letter
    .get(req.params.id)
    .catch(err => {
      res.status(err.statusCode || 500).send(err);
    })
    .then(q => {
      return res.status(200).send(q);
    });
}

//Método que adiciona uma carta
async function post (req, res) {
  return await letter
    .post(req.body.letter)
    .catch(err => {
      res.status(err.statusCode || 500).send(err);
    })
    .then(q => {
      return res.status(200).send('Ok');
    });
}

//Método que edita uma carta
async function put (req, res) {
  return await letter
    .put(req.body.letter)
    .catch(err => {
      res.status(err.statusCode || 500).send(err);
    })
    .then(q => {
      return res.status(200).send('Ok');
    });
}

//Método que deleta uma carta
async function del (req, res) {
  return await letter
    .del(req.params.id)
    .catch(err => {
      res.status(err.statusCode || 500).send(err);
    })
    .then(q => {
      return res.status(200).send('Ok');
    });
}

//Aqui estamos exportando todos os métodos que criamos para que consigamos acessar eles de outros arquivos
module.exports = { getAll, get, post, put, del };