const numero = (num) => {
    if (num === 0) {
        console.log("Esse numero é neutro")
    }
    else if (num % 2 === 0) {
        alert("O numero é par")
    }
    else {
        console.log("Esse número é impar")
    }
    return numero
}

numero(Number(prompt("Digite um numero")))