const fetch = require('node-fetch');


async function checkStatus(arrURLs) {
    const arrStatus = await Promise.all(arrURLs.map(async url => {
        const res = await fetch(url)
        return res.status;
    }))
    return arrStatus;
}

function generateArrLinks(arrayLinks){
    //fazer loop para iterar cada objeto
    // Object.values(objeto)  // retorna valor de cada objto(chave:valor)
    return arrayLinks.map(objetoLink => Object.values(objetoLink).join());  // join tita do array e transforma em string
}

async function validaUrls(arrayLinks) {
    const links = generateArrLinks(arrayLinks);
    const statusLinks = await checkStatus(links);
    return statusLinks;
}

module.exports = validaUrls;