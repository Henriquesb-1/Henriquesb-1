let user = document.querySelector('.user')
let res = document.querySelector('.res')
let formula = document.querySelector('.formula')
let erro = document.querySelector('.erro')
let botaoResultado = document.querySelector(".botaoResultado")


let checkCampo = (hipotenusa, cateto) => hipotenusa == "" || cateto == "" ? true : false

let valorAoQuadrado = (valorASerSomado) => valorASerSomado ** 2

let mostrarResultado = () => {
    let valor1 = Number(document.querySelector('.hipo_cate').value)
    let cateto = Number(document.querySelector('.catetob').value)

    if(!checkCampo(valor1, cateto)) {
        erro.textContent = ""
        let calculo1 = valorAoQuadrado(valor1)
        let calculo2 = valorAoQuadrado(cateto)
        let valorFinal = Math.sqrt(calculo1 + calculo2)

        user.innerHTML = `Hipotenusa ou Cateto B : ${valor1} || Cateto C: ${cateto}`
        formula.innerHTML = `${valor1}² + ${cateto}² = x² <br> <br>
        ${calculo1} + ${calculo2} = x² <br> <br>
        x =  √${calculo1 + calculo2}`
        res.innerHTML = `x: ${valorFinal.toFixed(2)}`
    }
    else {
        erro.innerHTML = "* Por favor, preencha todos os dados antes de continuar *"
        user.textContent = ""
        formula.textContent = ""
        res.textContent = ""
    }
}

botaoResultado.addEventListener('click', mostrarResultado)