const numeros = [8, 11, 4, 1];

let maiorDif = number.MIN_VALUE;

for (let x of numeros) {
    for (let y of numeors ) {
        const difAtual = x - y;
        if (difAtual > maiorDif){
            maiorDif = difAtual
        }

    }
}