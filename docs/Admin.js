import User from "./User.js";

class Admin extends User {
    constructor(nome, email, nascimento, role = "admin", ativo = true) {
        super(nome, email, nascimento, role, ativo);
        this.role = "admin";
    }
}

const novoAdmin = new Admin('Mateus', 'm@m.com', '2024-01-01');
console.log(novoAdmin);
console.log(novoAdmin.exibirInfos()); // Mateus,
