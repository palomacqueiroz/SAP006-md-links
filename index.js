const chalk = require('chalk');
const fs = require('fs'); // lib que acessa arquivos
const path = require('path');

function pegaArquivo (caminhoArquivo) {
  const encoding = 'utf-8'
  fs.readFile(caminhoArquivo, encoding, (_, texto) => {
    console.log(chalk.yellow(texto));
  })
}

pegaArquivo('./README.md');

/*  
regex dentro de uma const
se diretório - promise para ver se é arquivo md ou não
vi q a diferença deles é q o exec busca string e retorna o array, o match retorna uma string com regex 
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