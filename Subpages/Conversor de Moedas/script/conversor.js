document.querySelector(".calcbutton").addEventListener('click', calcularResultado = () => {
    let variaveis = {
        moeda1 : document.getElementById('moeda1').options[moeda1.selectedIndex].text,
        moeda2 : document.getElementById('moeda2').options[moeda2.selectedIndex].text,
        convertido : document.querySelector(".convertido"),
        erro : document.querySelector(".erro"),
        valor : Number(document.querySelector(".valor").value)
    }
    
    let CampCheck = {
        moedasIguais : (moedaOne, moedaTwo) => moedaOne == moedaTwo ? true : false,
        campoVazio : (input) => input == "" ? true : false
    }
    
    let conversores = {
        real_dolar : (real_ou_dolar) => {
            if (variaveis.moeda1 == "$ - Dólar" && variaveis.moeda2 == "R$ - Real") {
                return real_ou_dolar * 5.09
            }
            else if(variaveis.moeda1 == "R$ - Real" && variaveis.moeda2 == "$ - Dólar") {
                return real_ou_dolar / 5.09
            }
        }
        ,
        real_euro : (real_ou_euro) => {
            if(variaveis.moeda1 == "€ - Euro" && variaveis.moeda2 == "R$ - Real") {
                return real_ou_euro * 5.34
            }
            else if(variaveis.moeda1 == "R$ - Real" && variaveis.moeda2 == "€ - Euro") {
                return real_ou_euro / 5.34
            }
        }
        ,
        dolar_euro : (dolar_ou_euro) => {
            if(variaveis.moeda1 == "€ - Euro" && variaveis.moeda2 == "$ - Dólar") {
                return dolar_ou_euro * 1.05
            }
            else if(variaveis.moeda1 == "$ - Dólar" && variaveis.moeda2 == "€ - Euro") {
                return dolar_ou_euro / 1.05
            }
        }    
    }

    if(!CampCheck.moedasIguais(variaveis.moeda1, variaveis.moeda2) && !CampCheck.campoVazio(variaveis.valor)) {
        let dolarANDreal = conversores.real_dolar(variaveis.valor)
        let realANDeuro = conversores.real_euro(variaveis.valor)
        let dolarANDeuro = conversores.dolar_euro(variaveis.valor)
    
        switch (variaveis.moeda1) {                
            case ("$ - Dólar") :
                switch (variaveis.moeda2) {
                    case ("R$ - Real"):
                            variaveis.convertido.innerHTML = `$${variaveis.valor} dólares, equivale a <strong> R$${ dolarANDreal.toFixed(2) }</strong> Reais`
                    break
                
                    case ("€ - Euro"):
                        variaveis.convertido.innerHTML = `$${variaveis.valor} dólares, equivale a <strong> €${ dolarANDeuro.toFixed(2) } </strong> Euros`
                    break 
                }
            break        

            case ("R$ - Real") :
                switch (variaveis.moeda2) {
                    case ("$ - Dólar") : 
                        variaveis.convertido.innerHTML = `R$${variaveis.valor} reias, equivale a <strong> $${ dolarANDreal.toFixed(2) } </strong> dólares`
                    break
                    case ("€ - Euro") :
                        variaveis.convertido.innerHTML = `R$${variaveis.valor} reias, equivale a <strong> €${ realANDeuro.toFixed(2) } </strong> euros`
                    break
                }
            break    
            
            case ("€ - Euro"):
                switch(variaveis.moeda2) {
                    case ("$ - Dólar") : 
                        variaveis.convertido.innerHTML = `€${variaveis.valor} euros, equivale a $${ dolarANDeuro.toFixed(2) } dólares.`
                    break    
                    case ("R$ - Real") :
                        variaveis.convertido.innerHTML = `€${variaveis.valor} euros, equivale a R$${ realANDeuro.toFixed(2) } reais.`
                    break
                }
            break 
            }
    variaveis.erro.textContent = ""
    }

    else if(CampCheck.moedasIguais(variaveis.moeda1, variaveis.moeda2)) {
        variaveis.erro.innerHTML = "* Por favor, selecione duas moedas diferentes para continuar.*"
        variaveis.convertido.textContent = ""
    }

    else if(CampCheck.campoVazio(variaveis.valor)) {
        variaveis.erro.innerHTML = "* Por favor, insira um valor antes de continuar.*"
        variaveis.convertido.textContent = ""
    }
})