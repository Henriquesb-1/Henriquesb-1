let checkCamp = (valorDoVeiculo, vezParcelado, entrada) => {
    if(valorDoVeiculo == "" || vezParcelado == "") {
        return "Por favor, informe o valor do veículo e o número de parcelas desejadas para continuar"
    }
    else if(valorDoVeiculo == entrada) {
        return "Atenção: O valor da entrada não pode ser igual ao valor do veiculo"
    }
    else if(valorDoVeiculo < entrada) {
        return "Atenção: O valor da entrada não pode ser maior ao valor do veiculo"
    }
    else if(vezParcelado > 72) {
        return "<br> Atenção: A grande maioria dos bancos aceitam no máximo 72 vezes."
    }
}

document.querySelector(".calcButton").addEventListener('click', function() {
    const valorveiculo = Number(document.querySelector('.valor-veiculo').value)
    const entrada = Number(document.querySelector ('.valor-entrada').value)
    const vezes = Number(document.querySelector('.vezes').value)
    let valor_financiado = document.querySelector('.valor_financiado')
    let valor_parcelas = document.querySelector('.valor_parcelas')
    let total_sem_entrada = document.querySelector('.total_sem_entrada')
    let total_com_entrada = document.querySelector('.total_com_entrada')
    let aviso_final = document.querySelector('.aviso_final')
    let erro = document.querySelector('.erro')
    let totalJuros = document.querySelector(".totalJuros")

    if(!checkCamp(valorveiculo, vezes, entrada)) {
        let vf = valorveiculo - entrada
        let totalSemEntrada = (valorFinanciado) =>  valorFinanciado + (valorFinanciado * 90/100)
        let parcela = (veze) => totalSemEntrada(vf) / veze
        let totalComEntrada = (entrada2) => totalSemEntrada(vf) + entrada2

        let totalSemEntrada2 = totalSemEntrada(vf)
        let valorDasParcelas = parcela(vezes)
        let totalComEntrada2 = totalComEntrada(entrada)
        erro.textContent = ""

        valor_financiado.innerHTML = `Valor Financiado: <br> <strong> R$${vf} </strong>`
        valor_parcelas.innerHTML = `Valor das parcelas em ${vezes} vezes: <br> <strong> R$${ valorDasParcelas.toFixed(2) } </strong>`
        
        if(entrada != 0) {
            total_sem_entrada.innerHTML = `Valor total pago sem a entrada de R$${entrada}: <br>
            <strong> R$ ${ totalSemEntrada2.toFixed(2) } </strong>`
            total_com_entrada.innerHTML = `Valor total pago em ${vezes} vezes de R$${valorDasParcelas.toFixed(2)} e com a entrada de R$${entrada}: <br>
            <strong> R$ ${ totalComEntrada2.toFixed(2) } </strong>`
        }
        else {
            total_com_entrada.textContent = ""
            total_sem_entrada.innerHTML = `Valor total pago ao fim do financiamento: <br>
            <strong>R$${totalSemEntrada2.toFixed(2)}</strong>`
            aviso_final.innerHTML = " *Isso é somente uma simulação, os valores podem variar dependendo das condições do seu banco* "
        }
        totalJuros.innerHTML = `Total de juros pago ao fim do financiamento: <br>
        <strong> R$${totalComEntrada2 - valorveiculo} </strong>`
    }
    else{
        erro.innerHTML = checkCamp(valorveiculo, vezes, entrada)
        valor_financiado.textContent = ""
        valor_parcelas.textContent = ""
        total_sem_entrada.textContent = ""
        total_com_entrada.textContent = ""
        aviso_final.textContent = ""
        totalJuros.textContent = ""
    }
})
