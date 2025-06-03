class   Prato {
    titulo: string
    descricao: string
    imagem: string
    tipoCulinaria?: string
    categoria?: string
    nota?: string
    id:number

    constructor(   
        titulo: string,
        descricao: string,
        imagem: string,
        tipoCulinaria: string,
        categoria: string,
        nota: string,
        id: number
    ) {
        this.id = id
        this.nota = nota
        this.categoria = categoria
        this.descricao = descricao
        this.imagem = imagem
        this.tipoCulinaria = tipoCulinaria
        this.titulo = titulo
    }
} 

export default Prato