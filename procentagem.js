var sp = (67.836,43)
var rj = (36.678,66)
var mg = (29.229,88)
var es =(27.165,48)
var outro = (19.849, 53)
//Soma do total
var soma = sp + rj + mg + es + outro
var pergunta = prompt("Digite qual estado voce quer saber o percentual \n sp \n rj \n mg \n es \n outro")
//Calculo de tudo
switch (pergunta) {
    case "sp":
        const percen = (sp / soma) * 100
        alert("O percentual do estado é " + percen.toFixed(2) + "%")
        break;
    case "rj":
        const percen2 = (rj / soma) * 100
        alert("O percentual do estado é " + percen2.toFixed(2) + "%")
        break;
    case "mg":
        const percen3 = (mg / soma) * 100
        alert("O percentual do estado é " + percen3.toFixed(2) + "%")
        break;
    case "es":
        const percen4 = (es / soma) * 100
        alert("O percentual do estado é " + percen4.toFixed(2) + "%")

        break;
    case "outro":
        const percen5 = (outro / soma)* 100
        alert("O percentual do outro é " + percen5.toFixed(2) + "%")
        break;

    default:
        break;
}