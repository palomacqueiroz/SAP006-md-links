// linha de comando
const chalk = require('chalk');
const getFile = require('./index')

const path = process.argv;   // metodo node pega o que foi passado na linha de comando (array)

async function processText (pathFile) {
    const result = await getFile(pathFile[2])
    console.log(chalk.yellow('list of links'), result);
}

processText(path);

// console.log(getFile(path[2]))   // caminho do arquivo fica no indice 2


// caminho absoluto(completo desde home/pd/desktop....)) e relativo (./readme.md)