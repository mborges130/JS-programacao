const user = {
    nome: 'Juliana',
    email: 'j@j.com',
    nascimento: '2024-01-01',
    role: 'estudante',
    ativo: true, 
    exibirInfos: function() {
        console.log(this.nome, this.email);
    }
};

const admin ={
    nome: 'Mariana',
    email: 'm@m.com',
    nascimento: '2024-01-01',
    role: 'admin',
    ativo: true, 
    criarCurso:function() {
        console.log(`Curso criado por ${this.nome}`);
    }
};

Object.setPrototypeOf(admin, user);
admin.criarCurso(); // Curso criado por Mariana
admin.exibirInfos(); // Mariana