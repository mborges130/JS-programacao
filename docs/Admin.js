import User from "./User.js";

export default class Admin extends User {
    constructor(nome, email, nascimento, role = "admin", ativo = true) {
        super(nome, email, nascimento, role, ativo);
        this.role = "admin";
    }

    criarCurso(nomeCurso, vagas) {
        return `Curso de ${nomeCurso} criado com ${vagas} vagas`;
    }
   
}

const novoAdmin = new Admin('Mateus', 'm@m.com', '2024-01-01');
//console.log(novoAdmin.exibirInfos()); // Mateus,
//console.log(novoAdmin.exibirNome()); // Olá, meu nome é Mateus
//console.log(novoAdmin.criarCurso('JavaScript', 20)); // Mateus,
