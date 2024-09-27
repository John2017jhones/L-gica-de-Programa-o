nomeHeroi = input("Digite o nome do herói: ")
xpHeroi = int(input("Digite a quantidade de xp do seu herói: "))

if xpHeroi<=1000:
    print(f"O herói de nome {nomeHeroi} está no nível de {xpHeroi}XP e caracteriza-se Ferro")

elif xpHeroi>1000 and xpHeroi<=2000:
    print(f"O herói de nome {nomeHeroi} está no nível de {xpHeroi}XP e caracteriza-se Bronze")

elif xpHeroi>2000 and xpHeroi<=6000:
    print(f"O herói de nome {nomeHeroi} está no nível de {xpHeroi}XP e caracteriza-se Prata")

elif xpHeroi>6000 and xpHeroi<=7000:
    print(f"O herói de nome {nomeHeroi} está no nível de {xpHeroi}XP e caracteriza-se Ouro")

elif xpHeroi>7000 and xpHeroi<=8000:
    print(f"O herói de nome {nomeHeroi} está no nível de {xpHeroi}XP e caracteriza-se Platina")

elif xpHeroi>8000 and xpHeroi<=9000:
    print(f"O herói de nome {nomeHeroi} está no nível de {xpHeroi}XP e caracteriza-se Ascendente")

elif xpHeroi>9000 and xpHeroi<10000:
    print(f"O herói de nome {nomeHeroi} está no nível de {xpHeroi}XP e caracteriza-se Imortal")

else:
    print(f"O herói de nome {nomeHeroi} está no nível de {xpHeroi}XP e caracteriza-se Radiante")


