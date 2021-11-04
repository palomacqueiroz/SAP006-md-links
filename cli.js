// linha de comando
const chalk = require('chalk');
const getFile = require('./index');
const validaUrls = require('./http-validation');

const path = process.argv;   // metodo node pega o que foi passado na linha de comando (array)

async function processText(pathFile) {
    const result = await getFile(pathFile[2]);
    if(path[3] === "validar" ) {
        console.log(chalk.yellow('valid links'), validaUrls(result));
    } else{
        console.log(chalk.blue('list of links'), result);
    }
}
processText(path);

// console.log(getFile(path[2]))   // caminho do arquivo fica no indice 2


// caminho absoluto(completo desde home/pd/desktop....)) e relativo (./readme.md)