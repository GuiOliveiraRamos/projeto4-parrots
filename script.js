let message = prompt("Escolha o número de cartas para jogar");
let numeroCartas = Number(message);

if (numeroCartas % 2 == 0 && numeroCartas >= 4 && numeroCartas <= 14) {
    alert("Você pode jogar");

}
else {
    alert("Escolha uma quantidade valida");

}



