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
    set nome(novoNome) {
        this.#nome = novoNome;
    }
    set email(novoEmail) {
        this.#email = novoEmail;
    }   
    set nascimento(novoNascimento) {
        this.#nascimento = novoNascimento;
    }
    set role(novoRole) {
        this.#role = novoRole;
    }
    set ativo(novoAtivo) {
        this.#ativo = novoAtivo;        
    }

    //exibirInfos() {
      //  return `${this.nome}, ${this.email}`;
   // }
   exibirInfos() {
    if (this.role === "estudante") {
        return `dados estudante: ${this.nome}, ${this.email}`;
    }   
    if (this.role === "admin") {
        return `dados admin: ${this.nome}, ${this.email}, ${this.role}`;
    }
    if (this.role === "docente") {
        return `dados docente: ${this.nome}, ${this.email}`;
    }
                };
    static exibirInfoGenericas(nome, email) {
        return `Nome: ${nome}, Email: ${email}`;
    }
}



//const novoUser = new User('Juliana', 'j@j.comm', '2024-01-01', 'estudante', true);
//console.log(novoUser);
//console.log(novoUser.exibirInfos()); // Juliana,

//console.log(User.prototype.isPrototypeOf(novoUser)); // Exibe o protótipo da classe User
