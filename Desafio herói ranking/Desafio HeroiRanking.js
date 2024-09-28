let numeroVitorias = 150
let numeroDerrotas = 80
let saldoVitorias = calcularVitorias(numeroVitorias, numeroDerrotas)
let nivel = classificarJogador(saldoVitorias)



function calcularVitorias(vitorias, derrotas) {
    calculoVitorias = vitorias-derrotas
    return calculoVitorias
}

function classificarJogador(numeroDeVitorias) {
    if (numeroDeVitorias<=10) {
        console.log(`O Herói tem saldo de ${numeroDeVitorias} e está no nível Ferro`)
    }

    else if (numeroDeVitorias>10 && numeroDeVitorias<=20) {
        console.log(`O Herói tem saldo de ${numeroDeVitorias} e está no nível Bronze`)
    }

    else if (numeroDeVitorias>20 && numeroDeVitorias<=50) {
        console.log(`O Herói tem saldo de ${numeroDeVitorias} e está no nível Prata`)
    }

    else if (numeroDeVitorias>50 && numeroDeVitorias<=80) {
        console.log(`O Herói tem saldo de ${numeroDeVitorias} e está no nível Ouro`)
    }

    else if (numeroDeVitorias>80 && numeroDeVitorias<=90) {
        console.log(`O Herói tem saldo de ${numeroDeVitorias} e está no nível Diamante`)
    }

    else if (numeroDeVitorias>90 && numeroDeVitorias<=100) {
        console.log(`O Herói tem saldo de ${numeroDeVitorias} e está no nível Lendário`)
    }

    else {
        console.log(`O Herói tem saldo de ${numeroDeVitorias} e está no nível Imortal`)
    }
}