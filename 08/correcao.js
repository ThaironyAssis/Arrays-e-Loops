const numeros = [3, 4, 1, 8, 11, 7, 5];

let maiorAteAgora = numeros[0];

for (let numero of numeros) {
    if (numero > maiorAteAgora) {
        maiorAteAgora = numero;
    }
}
console.log(maiorAteAgora);