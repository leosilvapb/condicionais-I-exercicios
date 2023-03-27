const cadastro = (idade, ensinoMédio, faculdade) => {
    if (idade >= 18) {
        console.log("É maior de idade")
    }
    else {
        console.log("Não é maior de idade")
    }

    if (ensinoMédio === true) {
        console.log("Terminou o ensino médio")
    }
    else {
        console.log("Não terminou o ensino médio")
    }

    if (faculdade === true) {
        console.log("É aluno em uma faculdade")
    }
    else {
        console.log("Não é aluno de uma faculdade")
    }

}

cadastro(23, true, true)