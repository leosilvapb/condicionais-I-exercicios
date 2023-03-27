const verificarNacionalidade = (pais) => {
   
    if (pais === "brasileira") {
        console.log("Sua nacionalidade é Brasileira ")
    }
    else if (pais === "argentina") {
        console.log("Sua nacionalidade é Argentina ")
    }

    else if (pais === "uruguaia" ) {
        console.log("Sua nacionalidade é Uruguaia ")
    }

    else if (pais === "chilena") {
        console.log("Sua nacionalidade é Chilena ")
    }

    else if (pais === "colombiana") {
        console.log("Sua nacionalidade é Colombiana ")
    }

    else {
        console.log("Nacionalidade não encontrada ")
    }

    return pais
}

const nacionalidade = prompt("InformeSua nacionalidade").toLowerCase()
verificarNacionalidade(nacionalidade)