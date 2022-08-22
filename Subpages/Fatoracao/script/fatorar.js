document.querySelector(".calcButton").addEventListener('click', function(){
    let numeroFatorar = Number(document.querySelector('.valorRecibido').value)
    while(numeroFatorar > 1) {
        let table = document.querySelector(".tableBody")
        let Resultado = table.appendChild(document.createElement("tr"))
        let resumo = document.querySelector(".resumo")

        let divisor = (numero) => {
            if(numero % 2 == 0) {
                return 2
            }
            else if(numero % 3 == 0) {
                return 3
            }
            else if(numero % 5 == 0) {
                return 5
            }
            else if(numero % 7 == 0) {
                return 7
            }
        }

        Resultado.innerHTML = 
            `
                <td> ${numeroFatorar} </td>
                <td> ${divisor(numeroFatorar)} </td>
            `
            document.querySelector(".calcButton").addEventListener('click', function(){
                Resultado.textContent = ""
            }) 
            numeroFatorar /= divisor(numeroFatorar)
            resumo.innerHTML += `  ${divisor(numeroFatorar)}` 
        }
})
