export enum TipoUsuario{
    Professor = 'PROFESSOR',
    Aluno = 'ALUNO',
}


export enum CategoriaCurso{
    desenvolvimento = 'DESENVOLVIMENTO',
    negocios = 'NEGOCIOS',
    financas = 'FINANCAS',
    produtividade = 'DESIGN'
}


export class Usuario{
    usuarioId: number;
    cursosId: number[];
    usuario: string;
    nome: string;
    cpf: number;
    nascimento: Date;
    tipo: TipoUsuario;

    constructor(usuarioId: number, cursosId: number[], usuario: string, nome: string, cpf: number, nascimento: Date, tipo: TipoUsuario) {
        this.usuarioId = usuarioId;
        this.cursosId = cursosId;
        this.usuario = usuario;
        this.nome = nome;
        this.cpf = cpf;
        this.nascimento = nascimento;
    }
}


export class Curso{
    cursoId: number;
    titulo: string;
    descricao: string;
    categoria: CategoriaCurso;

    constructor(cursoId: number, titulo: string, descricao: string, categoria: CategoriaCurso) {
        this.cursoId = cursoId;
        this.titulo = titulo;
        this.descricao = descricao;
        this.categoria = categoria;
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