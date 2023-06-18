// console.log("Hello world!");

//Fazer umn função - retornar um console.log dizendo "dentro da função"

//pesquisar como fazer requisição com js
//fazer a requisição com js para o endpoind da api
//Retornar pelo log o resultado da requisição
//Retornar pelo log apenas os graus c°

// function ola() {
//     const nomeA = "Rafael"
//     const nomeB = "Paulo"
//     //console.log (nomea + " " + nomeb)
//     //console.log (`${nomeA} e ${nomeB}`)
// }

// //ola()

function weather(cidade) {
  const apiKey = "5386ea7712884ed4b9c02055231806"
  const options = {
    headers: {
      mode: "cors",
    },
  }
  fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cidade}`, options)
    .then((data) => {
      return data.json();
    })
    .then((result) => {
      console.log(result.location.name)
      console.log(`${result.current.temp_c}°`)
    })
}

weather("São Paulo");

