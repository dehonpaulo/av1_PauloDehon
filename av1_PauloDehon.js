function microondas(opcao, tempo) {
    let tempoPadrao = 0;
    prato = "";
    let mensagem;
    
    switch(opcao) {
        case 1:
            prato = "Pipoca";
            tempoPadrao=10;
            break;
        case 2:
            prato = "Macarrão";
            tempoPadrao = 8;
            break;
        case 3:
            prato = "Carne";
            tempoPadrao = 15;
            break;
        case 4:
            prato = "Feijão";
            tempoPadrao = 12;
            break;
        case 5:
            prato = "Brigadeiro";
            tempoPadrao = 8;
            break;
        default:
            console.log("Prato inexistente\n");
            return;
    }

    if(tempo >= 3*tempoPadrao) {
        console.log("kabumm\n");
        return;
    }

    if(tempo < tempoPadrao) {
        console.log("Tempo insuficiente");
    }

    if(tempo > 2*tempoPadrao) {
        console.log("Comida queimou");
    }

    console.log("Prato pronto, bom apetite!!!\n");
    return;
}

microondas(2, 7);
microondas(2, 24);
microondas(2, 17);
microondas(10, 15);
microondas(2, 8);