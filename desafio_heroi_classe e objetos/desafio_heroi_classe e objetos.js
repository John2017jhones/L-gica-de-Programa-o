class heroi{
    constructor(nome, idade, tipo, ataque){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        this.ataque = ataque
    }    
    
    atacar(){
        if (this.tipo == "mago"){
            console.log(`O ${this.tipo} atacou usando ${this.ataque = "magia."}`)
        }
        
        else if (this.tipo == "guerreiro"){
            console.log(`O ${this.tipo} atacou usando ${this.ataque = "espada."}`)
        }

        else if (this.tipo == "monge"){
            console.log(`O ${this.tipo} atacou usando ${this.ataque = "artes marciais."}`)
        }

        else if (this.tipo == "ninja"){
            console.log(`O ${this.tipo} atacou usando ${this.ataque = "shuriken."}`)
        }  

        else{
            console.log(`Tipo ${this.tipo} não existe.`)
        }
    }
}

let caracteristicaHeroi = new heroi("Pedreiro", 48, "monge", "")
caracteristicaHeroi.atacar()