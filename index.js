/* module.exports = () => {
  // ...
}; */

const chalk = require('chalk');
const fs = require('fs'); // lib que acessa arquivos

function pegaArquivo (caminhoArquivo) {
  const encoding = 'utf-8'
  fs.readFile(caminhoArquivo, encoding, (_, texto) => {
    console.log(chalk.green(texto));
  })
}

pegaArquivo('./README.md');

/*  
 console.log(chalk.blue("bin")) 
///fs.readFile(file, [encoding], [callback]); 
function trataErro(erro) { throw new Error(chalk.red(erro.code, 'Não há arquivo no caminho')); } 
function pegaArquivo (caminhoArquivo) { const encoding = 'utf-8' fs.readFile(caminhoArquivo, encoding, (erro, texto) => { if (erro) { trataErro(erro); } console.log(chalk.green(texto)) }) } 
pegaArquivo("./SAP006-md-links/arquivos/teste.md") 

console.log(chalk.blue("que que há velhinho"));

const paragrafo = 'Testo retornado por uma função'

function texto(string) {
    return string;
}

console.log(texto(paragrafo)); */