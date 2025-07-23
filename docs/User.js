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
    get nome() {
        return this.#nome;
    }
    get email() {
        return this.#email;
    }       
    get nascimento() {
        return this.#nascimento;
    }   
    get role() {
        return this.#role;
    }
    get ativo() {
        return this.#ativo;
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
