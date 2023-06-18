// console.log("Hello world!");

//Fazer umn função - retornar um console.log dizendo "dentro da função"

function weather() {
  const options = {
    headers: {
      mode: "cors",
    },
  };
  //pesquisar como fazer requisição com js
  fetch(
    "http://api.weatherapi.com/v1/search.json?key=5386ea7712884ed4b9c02055231806&q=sao",
    options
  )
    .then((data) => {
      return data.json();
    })
    .then((post) => {
      console.log(post);
    });
}

weather();

//fazer a requisição com js para o endpoind da api

//Retornar pelo log o resultado da requisição

//Retornar pelo log apenas os graus c°
