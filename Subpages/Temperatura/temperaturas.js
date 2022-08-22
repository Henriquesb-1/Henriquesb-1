document.querySelector(".calcButton").addEventListener('click', function() {
    let select = document.getElementById('select-temp')
    let select_number = select.options[select.selectedIndex].text;

    let first_temp = Number(document.querySelector(".to-convert").value)

    let temp_title1 = document.querySelector(".temp-title1")
    let formula1 = document.querySelector(".formula1")
    let temp1 = document.querySelector(".temp1")

    let temp_title2 = document.querySelector(".temp-title2")
    let formula2 = document.querySelector(".formula2")
    let temp2 = document.querySelector(".temp2")

    //Leia do if para o nome da funcao (ex: select_number == "Fahrenheit" converte para Celsius)
    let Celsius = (valorTemperatura) => {
        if(select_number == "Fahrenheit") {
            return (valorTemperatura - 32) / 1.8
        }
        else if(select_number == "Kelvins") {
            return valorTemperatura - 273
        }
    }

    let Fahrenheit = (valorTemperatura2) => {
        if(select_number == "Celsius") {
            return (valorTemperatura2 * 1.8) + 32
        }
        else if(select_number == "Kelvins") {
            return (valorTemperatura2 - 273) * 1.8 + 32
        }
    }

    let Kelvins = (valorTemperatura3) => {
        if(select_number == "Fahrenheit") {
            return (valorTemperatura3 - 32) * 5/9 + 273
        }
        else if(select_number == "Celsius") {
            return valorTemperatura3 + 273
        }
    }

    switch(select_number) {
        case("Fahrenheit"):
            var fahrenheitparaCelsius = Celsius(first_temp).toFixed(0)
            let fahrenheitparaKelvins = Kelvins(first_temp).toFixed(0)

            temp_title1.innerHTML = "Para Celsius:"
            formula1.innerHTML = `F° = (${first_temp}°C - 32) / 1.8`
            temp1.innerHTML = `${first_temp}° Fahrenheit corresponde a ${fahrenheitparaCelsius}° Celsius`

            temp_title2.innerHTML = "Para Kelvins:"
            formula2.innerHTML = `K° = (${first_temp.toFixed(0)}°F - 32) * 5/9 + 273`
            temp2.innerHTML = `${first_temp.toFixed(0)}° Fahrenheit corresponde a ${fahrenheitparaKelvins}° Kelvins`
        break    

        case("Celsius"):
            var celsiusparaFahrenheit = Fahrenheit(first_temp).toFixed(0)
            let celsiusparaKelvins = Kelvins(first_temp).toFixed(0)

            temp_title1.innerHTML = "Para Fahrenheit:"
            formula1.innerHTML = `C° = ${first_temp} - 32 / 1.8 `
            temp1.innerHTML = `${first_temp}° Celsius corresponde a ${celsiusparaFahrenheit}° Fahrenheit`

            temp_title2.innerHTML = "Para Kelvins:"
            formula2.innerHTML = `C° = ${first_temp} + 273`
            temp2.innerHTML = `${first_temp}° Celsius corresponde a ${celsiusparaKelvins}° Kelvins`
        break
        
        case("Kelvins"):
            var KelvinsparaCelsius = Celsius(first_temp).toFixed(0)
            let Kelvinsparafahrenheit = Fahrenheit(first_temp).toFixed(0)

            temp_title1.innerHTML = "Para Fahrenheit:"
            formula1.innerHTML = `F° = (${first_temp} - 273) * 1.8 + 32`
            temp1.innerHTML = `${first_temp}° Kelvins corresponde a ${Kelvinsparafahrenheit}° Fahrenheit`

            temp_title2.innerHTML = "Para Celsius:"
            formula2.innerHTML = `C° = ${first_temp} - 273`
            temp2.innerHTML = `${first_temp}° Kelvin corresponde a ${KelvinsparaCelsius}° Celsius`
        break
    }

    if(Celsius(first_temp) < 10) {
        document.body.style.background = "url('imgs/cold.jpg') no-repeat center rgba(20, 20, 230, 0.5)"
    }
    else if(Celsius(first_temp) >= 10 && Celsius(first_temp) <= 24) {
        document.body.style.background = "url('imgs/amena.jpg') no-repeat center rgba(20, 20, 230, 0.5)"
    }
})