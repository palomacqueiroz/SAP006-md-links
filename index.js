const chalk = require('chalk');
const fs = require('fs'); // lib que acessa arquivos
const path = require('path');

function tratarErro(erro) {
  throw new Error(chalk.red(erro.code, 'Verificar o caminho do arquivo'));
}

async function getFile (pathFile) {
  const encoding = 'utf-8'
  try{
  const text = await fs.promises.readFile(pathFile, encoding)
  console.log(chalk.yellow(text)) // recebe conteúdo do arquivo - sempre passar por parametro
  } catch(erro){
    tratarErro(erro)
  }
  }

  getFile('./README.md');

/* function getFile (pathFile) {
  const encoding = 'utf-8'
  fs.promises.readFile(pathFile, encoding)
  .then((text) => console.log(chalk.yellow(text))) // recebe conteúdo do arquivo - sempre passar por parametro
  .catch((erro) => tratarErro(erro))
} */

/* function pegaArquivo (caminhoArquivo) {
  const encoding = 'utf-8'
  fs.readFile(caminhoArquivo, encoding, (erro, texto) => {
    if(erro) {
      tratarErro(erro);
    }
    console.log(chalk.yellow(texto));
  })
} */

/*  
regex dentro de uma const
se diretório - promise para ver se é arquivo md ou não
vi q a diferença deles é q o exec busca string e retorna o array, o match retorna uma string com regex 
 console.log(chalk.blue("bin")) 
///fs.readFile(file, [encoding], [callback]); 

function texto(string) {
    return string;
}
*/