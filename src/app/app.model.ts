export enum TipoUsuario{
    Professor = 'PROFESSOR',
    Aluno = 'ALUNO',
}

export class Usuario{
    userId: number;
    cursosId: number[];
    username: string;
    nome: string;
    cpf: number;
    nascimento: Date;
    tipo: TipoUsuario;

    constructor(userId: number, cursosId: number[], username: string, nome: string, cpf: number, nascimento: Date, tipo: TipoUsuario) {
        this.userId = userId;
        this.cursosId = cursosId;
        this.username = username;
        this.nome = nome;
        this.cpf = cpf;
        this.nascimento = nascimento;
    }
}

export class Curso{
    cursoId: number;
    titulo: string;
    descricao: string;

    constructor(cursoId: number, titulo: string, descricao: string) {
        this.cursoId = cursoId;
        this.titulo = titulo;
        this.descricao = descricao;
    }
}


export class Aula{
    aulaId: number;
    cursoId: number;
    titulo: string;
    duracao: number;
    exercicio: string;

    constructor(aulaId: number, cursoId: number, titulo: string, duracao: number,exercicio: string) {
        this.aulaId = aulaId;
        this.cursoId = cursoId;
        this.titulo = titulo;
        this.duracao = duracao;
        this.exercicio = exercicio;
    }
}