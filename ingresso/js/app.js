function comprar() {
    let tipoIngresso = document.getElementById("tipo-ingresso");

    let quantidade = parseInt(document.getElementById("qtd").value);
    
    if (tipoIngresso.value == "inferior"){
        comprarInferior(quantidade);
    }
    
    else if (tipoIngresso.value == "superior"){
        comprarSuperior(quantidade);
    }

    else {
        comprarPista(quantidade);
    }
}

function comprarInferior(quantidade) {
    let qtdInferior = parseInt(document.getElementById("qtd-inferior").textContent);

    if (quantidade > qtdInferior)
        alert("Não possui essa quantidade para as Cadeiras Inferiores.")
    
    else{
        alert("Compra realizada.")
        qtdInferior = qtdInferior - quantidade;
        document.getElementById("qtd-inferior").textContent = qtdInferior;
        
    }
}

function comprarSuperior(quantidade) {
    let qtdSuperior = parseInt(document.getElementById("qtd-superior").textContent);

    if (quantidade > qtdSuperior)
        alert("Não possui essa quantidade para as Cadeiras Supreiores.")
    
    else{
        alert("Compra realizada.")
        qtdSuperior = qtdSuperior - quantidade;
        document.getElementById("qtd-superior").textContent = qtdSuperior;
        
    }
}

function comprarPista(quantidade) {
    let qtdPista = parseInt(document.getElementById("qtd-pista").textContent);

    if (quantidade > qtdPista)
        alert("Não possui essa quantidade para a Pista.")
    
    else{
        alert("Compra realizada.")
        qtdPista = qtdPista - quantidade;
        document.getElementById("qtd-pista").textContent = qtdPista;
        
    }
}

