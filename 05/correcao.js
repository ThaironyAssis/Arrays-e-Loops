const original = [1, 4, 12, 21, 53, 88, 112];
let pares = []
for (let numero of original) {
    if (numero % 2 === 0) {
        pares.push(numero); // insere no array de pares
    }
}

console.log(pares);