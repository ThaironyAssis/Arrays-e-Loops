const disjuntores = [false, false, true, false, false, true, false, false];

for (let numDisjuntor = 0; numDisjuntor < disjuntores.length; numDisjuntor++ ) {
    if (disjuntores[numDisjuntor] === true){
        console.log(numDisjuntor);
    }
}