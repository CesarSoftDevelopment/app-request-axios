

let divPrincipal = document.getElementById('divPrincipal');

const endpointHeroku = "https://pizzaria-facul.herokuapp.com";
 
window.addEventListener("load" , () => {
  const form = document.getElementById('form');
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let data = new FormData(form);
    let nomeCliente = data.get("nome");
    let usuarioCliente = data.get("usuario");
    let senhaCliente = data.get("senha");
    let emailCliente = data.get("email");
    let sexoCliente = data.get("sexo");
    const obj = {
      nome: nomeCliente,
      usuario: usuarioCliente,
      senha: senhaCliente,
      email: emailCliente,
      sexo: sexoCliente
    }
    axios({
      method: "post",
      url: `${endpointHeroku}/cadastrar`,
      data: obj,
    })
    .then(function(response) {
      let span = document.createElement('span');
      let text = document.createTextNode("Dados foram inseridos");
      span.appendChild(text);
      divPrincipal.appendChild(span);
    console.log(response);
    })
    .catch(function (error) {
      let span = document.createElement('span');
      let text = document.createTextNode(error);
      span.appendChild(text);
      divPrincipal.appendChild(span);
      console.log(error);
    });             
  })
})



// form.onload = function() {
//     let nomeCliente = document.querySelector('input[name=nome]').value;
//     let userCliente = document.querySelector('input[name=usuario]').value;
//     let senhaCliente = document.querySelector('input[name=senha]').value;
//     let emailCliente = document.querySelector('input[name=email]').value;
//     let sexoCliente = document.querySelector('input[name=sexo]').value;

//     axios.post(`${endpointHeroku}/cadastrar`, {
//         nome: nomeCliente,
//         usuario: userCliente,
//         senha: senhaCliente,
//         email: emailCliente,
//         sexo: sexoCliente

//       })
//       .then(function(response) {
//           let span = document.createElement('span');
//           let text = document.createTextNode(response);
//           span.appendChild(text);
//           divPrincipal.appendChild(span);
//         console.log(response);
//       })
//       .catch(function (error) {
//         let span = document.createElement('span');
//         let text = document.createTextNode(error);
//         span.appendChild(text);
//         divPrincipal.appendChild(span);
//         console.log(error);
//       });
// }

