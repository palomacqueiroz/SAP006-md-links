// linha de comando
const getFile = require('./index')

const path = process.argv;   // metodo node pega o que foi passado na linha de comando

console.log(getFile(path[2]))   // caminho do arquivo fica no indice 2