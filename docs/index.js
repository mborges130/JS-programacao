import User from "./User.js";
import Admin from "./Admin.js"; 
import Docente from "./Docente.js";

const novoUser = new User('Juliana', ' j@j.com', '2024-01-01', 'estudante', true);
//console.log(novoUser.exibirInfos()); // Juliana,

//novoUser.#nome = 'Márcia';
//console.log(novoUser.exibirInfos()); // Juliana Silva,
//console.log(novoUser.nome); //

//console.log(novoUser.exibirInfos()); // { nome: 'Juliana', email: '
const novoAdmin = new Admin('Mateus', 'm@m.com', '2024-01-01');
console.log(novoAdmin.nome);
