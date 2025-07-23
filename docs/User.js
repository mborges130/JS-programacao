export default class User {
    constructor(nome, email, nascimento, role, ativo) {
        this.nome = nome;
        this.email = email;
        this.nascimento = nascimento;
        this.role = role || "estudante";
        this.ativo = ativo;
    }

    exibirInfos() {
        return `${this.nome}, ${this.email}, ${this.role}, ${this.ativo}`;
    }
}

//const novoUser = new User('Juliana', 'j@j.comm', '2024-01-01', 'estudante', true);
//console.log(novoUser);
//console.log(novoUser.exibirInfos()); // Juliana,

//console.log(User.prototype.isPrototypeOf(novoUser)); // Exibe o protótipo da classe User
