const verificarNacionalidade = () => {
    const nacionalidade = prompt("Informe sua nacionalidade").toLowerCase()

    if (nacionalidade === "brasileira") {
        console.log("Sua nacionalidade é Brasileira ")
    }
    else if (nacionalidade === "argentina") {
        console.log("Sua nacionalidade é Argentina ")
    }

    else if (nacionalidade === "uruguaia") {
        console.log("Sua nacionalidade é Uruguaia ")
    }

    else if (nacionalidade === "chilena") {
        console.log("Sua nacionalidade é Chilena ")
    }

    else if (nacionalidade === "colombiana") {
        console.log("Sua nacionalidade é Colombiana ")
    }

    else {
        console.log("Nacionalidade não encontrada ")
    }

    return nacionalidade
}

verificarNacionalidade()