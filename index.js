const chalk = require('chalk');
const fs = require('fs');                             // lib que acessa arquivos



function extractLinks(text) {
  const regex =  /\[([^\]]*)\]\((https?:\/\/[^*$#\s].[^\s]*)\)/gm;
  const arrResults = []
  let temp;                                           // a cada laço de repetição pegar resultado do exec e guardar na variável // valor array

  while((temp = regex.exec(text)) !== null)  {
    arrResults.push({ 
      [temp[1]]:temp[2]                                // key deve estar dentro de [] para conseguir usar como key
    })
  }
  
  return arrResults;
}

function handleError(erro) {
  throw new Error(chalk.red(erro.code, 'Verificar o caminho do arquivo'));
}

async function getFile (pathFile) {
  const encoding = 'utf-8'
  try{
  const text = await fs.promises.readFile(pathFile, encoding)
  console.log(extractLinks(text)) // recebe conteúdo do arquivo - sempre passar por parametro
  } catch(erro){
    handleError(erro)
  } finally {
    console.log(chalk.yellow('operação concluída'));
  }
}

  // getFile('./README.md');

  module.exports = getFile;



  /* const mdlinks = (directoryPath) => {
    const extension = path.extname(directoryPath);
    (extension === '.md') ? readFile(directoryPath) : readDirectory(directoryPath);
  }
  
  const readDirectory = (directoryPath) => {
    return new Promise((resolved, rejected) => {
      fs.readdir(directoryPath, (err, files) => {
        if (err) {
          rejected("Error");
        }
  
        const filesMd = files.filter((file) => {
          const extension = path.extname(file);
          if (extension === '.md') {
            resolved(readFile(file));
            return file;
          }
        })
  
        if (filesMd.length === 0) {
          resolved("Não há arquivos do tipo MarkDown nesse diretório:", directoryPath);
        }
      })
    })
  }
  
  function readFile(file) {
    return new Promise((resolved, rejected) => {
      const readFile = fs.readFile(file, 'utf-8', function (err, data) {
        if (err) {
          rejected(err);
        }
        const regexLink = /\[([^\]]*)\]+\((https?:\/\/[^\[\s\)]*)/gm;
        const matches = data.match(regexLink);
        const result = matches.map((str) => {
          const strLink = str.replace('[', '').replace('\n', '');
          const strToArray = strLink.split('](');
          const objt = {
            text: strToArray[0],
            href: strToArray[1],
            file
          }
          return log(objt);
        })
  
      })
    })
  }
  
  module.exports = mdlinks;
  

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