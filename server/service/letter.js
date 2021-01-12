//Aqui estamos importando o repositório de cartas
const letter = require('../repository/letter');

//Método que busca todas as cartas
async function getAll () {
  var letters = await letter.getAll();
  
  // Caso de algum problema vamos retornar o status code 400 com a mensagem Erro ao buscar as cartas
  if (!letters) {
    return {
      statusCode: 400,
      msg: 'Erro ao buscar as Cartas'
    };
  }

  //Aqui retornamos as cartas encontradas no banco
  return letters;
}

async function get (id) {
  // Aqui estamos buscando uma carta pelo id
  var ltr = await letter.get(id);

  // Aqui validamos se conseguimos encontrar a carta pelo id que foi informado
  if (!ltr) {
    return {
      statusCode: 400,
      msg: 'Erro: carta não encontrada'
    };
  }

  //Aqui retornamos a carta encontrado no banco
  return ltr;
}

async function post (p) {
  // Aqui estamos chamando o método que irá adicionar uma nova carta
  var ltr = await letter.post(p);

  //Logo após a incerção validamos se ocorreu tudo certo 
  if (!ltr) {
    return {
      statusCode: 400,
      msg: 'Erro: ao inserir a carta ' + p.tittle
    };
  }

  return ltr;
}

async function put (p) {
  // Aqui estamos chamando o metodo que irá editar uma carta informada
  var ltr = await letter.put(p);

  //Logo após a incerção validamos se ocorreu tudo certo 
  if (!ltr) {
    return {
      statusCode: 400,
      msg: 'Erro: carta não encontrada'
    };
  }

  return ltr;
}

async function del (id) {
  // Aqui estamos chamando o método que irá deletar uma carta através do Id informado
  var ltr = await letter.del(id);

  //Aqui estamos validando se a carta realmente foi deletado
  if (!ltr) {
    return {
      statusCode: 400,
      msg: 'Erro: carta não encontrada'
    };
  }

  return ltr;
}
//Aqui estamos exportando todos os métodos que criamos para que consigamos acessar eles de outros arquivos
module.exports = { getAll, get, post, put, del };