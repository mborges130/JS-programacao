export default class User {
    #nome;
    #email;
    #nascimento;
    #role;
    #ativo;
    constructor(nome, email, nascimento, role, ativo) {
        this.#nome = nome;
        this.#email = email;
        this.#nascimento = nascimento;
        this.#role = role || "estudante";
        this.#ativo = ativo;
    }

    #montaObjUser() {
        return ({
            nome: this.#nome,
            email: this.#email,
            nascimento: this.#nascimento,
            role: this.#role,
            ativo: this.#ativo,
        })
    }
    exibirInfos() {
        const objUser = this.#montaObjUser();
        return `${objUser.nome}, ${objUser.email}, ${objUser.role}, ${objUser.ativo}`;
    }
}

//const novoUser = new User('Juliana', 'j@j.comm', '2024-01-01', 'estudante', true);
//console.log(novoUser);
//console.log(novoUser.exibirInfos()); // Juliana,

//console.log(User.prototype.isPrototypeOf(novoUser)); // Exibe o protótipo da classe User
