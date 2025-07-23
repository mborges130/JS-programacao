import User from "./User.js";
import Admin from "./Admin.js"; 
import Docente from "./Docente.js";

const novoUser = new User('Juliana', ' j@j.com', '2024-01-01', 'estudante', true);
console.log(novoUser.exibirInfos()); // Juliana Silva,

const dadosFicticios = User.exibirInfoGenericas('Cassio', 'c@c.com')
console.log(dadosFicticios); // Nome: Cassio, Email:

//const novoAdmin = new Admin('Mateus', 'm@m.com', '2024-01-01');
//console.log(novoAdmin.exibirInfos()); // Mateus,

//const novoDocente = new Docente('Ana', 'a@a.com', '2024-01-01');
//console.log(novoDocente.exibirInfos()); // Ana,




