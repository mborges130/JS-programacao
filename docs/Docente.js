import User from "./User.js";

export default class Docente extends User {
    constructor(nome, email, nascimento, role = "docente", ativo = true) {
        super(nome, email, nascimento, role, ativo);
        this.role = "admin";
    }

    aprovarEstudante(estudante, curso) {
        return `Estudante ${estudante.nome} aprovado no curso de ${curso}, responsável: ${this.nome}`;
    }
};

const novoDocente = new Docente('Ana', 'a@a.com', '2024-01-01');
//console.log(novoDocente);
//console.log(novoDocente.aprovarEstudante({ nome: 'Carlos' }, 'JavaScript')); // Ana, Estudante Carlos aprovado no curso de Matemática, responsável: Ana

