let test = {
    deltaTeste : (valorDelta) => valorDelta < 0 ? true : false,
    VerificarCamposVazios : (inputA, inputB, inputC) => inputA == "" && inputB == "" & inputC == "" ? true : false,
    VerificarA : (A) => A == 0 ? true : false,
}

let delta = document.querySelector('.delta')
let x1 = document.querySelector('.x1')
let x2 = document.querySelector('.x2')
let erro = document.querySelector('.erroMessage')
let inputs = document.querySelector('.inputs')
let calcularButton = document.querySelector(".calcularButton")

calcularButton.addEventListener('click', function() {
    let a = Number(document.querySelector('.valor_a').value)
    let b = Number(document.querySelector('.valor_b').value)
    let c = Number(document.querySelector('.valor_c').value)
    let divBack = document.querySelector(".resultados")
    let deltaCalculo =  (b) ** 2 - 4 * a * c

    delta.innerHTML = `Delta = ${b}² - 4 * ${a} * ${c}: <br>
    <strong> ${deltaCalculo} </strong>`

    if(!test.deltaTeste(deltaCalculo) && !test.VerificarCamposVazios(a, b, c)) {
        erro.textContent = ""
        divBack.style.background = ""
        let valorX1 = (-b - Math.sqrt(deltaCalculo)) / (2 * a)
        let valorX2 = (-b + Math.sqrt(deltaCalculo)) / (2 * a)

        inputs.innerHTML = `A: ${a} | B: ${b} | C: ${c}`

        x1.innerHTML = `x' = -${b} - √${deltaCalculo} / 2 * ${a}: <br>
        <strong> ${valorX1.toFixed(2)}</strong>`

        x2.innerHTML = `x'' = -${b} +  √${deltaCalculo} / 2 * ${a}: <br>
        <strong> ${valorX2.toFixed(2)} </strong>`

            if(test.VerificarA(a)) {
                inputs.innerHTML = `A: ${a}  |  B: ${b}  |  C: ${c}`
                erro.innerHTML = `Quando a variavel "A" não possui um valor, a equação possui apenas um valor real, portanto x' e x'' serão igual a 0.` 
                x1.textContent = ""
                x2.textContent = ""
            }
        }
    else if(test.deltaTeste(deltaCalculo)){
        erro.innerHTML = `Delta: ${deltaCalculo} <br>
        Não é possível tirar raiz quadrada de um número negativo. <br>
        Por isso não é possivel calcular o valor de x' e x''.`
        divBack.style.background = ""
        delta.textContent = ""
        x1.textContent = ""
        x2.textContent = ""
        }
    else if(test.VerificarCamposVazios(a, b , c)) {
        divBack.style.background = "none"
        erro.innerHTML = " * Por favor, informe o valor de uma variavel para continuar *"
        inputs.textContent = ""
        delta.textContent = ""
        x1.textContent = ""
        x2.textContent = ""
    }
})