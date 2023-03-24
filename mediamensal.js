//Entrada de dados pra media
alert("Aqui voce vai falar os dias no mes de marco  que tiveram faturamento da sua empresa \n Se tiver dias que nao teve furamento pode colocar 0")
var valormes = [];
var soma;
var media;
for (let i = 0; i <= 30  ; i++) {
     valormes[i] = parseInt(prompt(" Digite aqui o valor do faturmento do " + ( i + 1) + " dia"))
}  

//Calculado de tudo minimo maxiimo e media

const pergunta = prompt("Para saber o menos faturamento da sua empresa digite menor \n digite maior para saber o maior \n digite  media para saber os dias que o foi maior que a media mensal")

switch (pergunta) {
    case "menor":
        for (let i= 0; i < valormes.length; i++) {      
        const min = Math.min(valormes[i])
        alert("valor minimo é " + min)
        }
        break;
        
    case "maior":
        for (let i= 0; i < valormes.length; i++) {      

        const max = Math.max(valormes[i])
        alert("valor maximo é " + max)
        }
        break;
// aqui nao conseguir fazer que os 0 nao conte
// Desculpe ainda estou no segundo semestre nao dominei tudo 
// Porem vou tentar fazer denovo ate conseguir
    case "media":
        for (let i = 0; i < valormes.length; i++) {
            if (valormes[i] > 0 ) {
                soma += valormes[i]
                const calculo = soma / (valormes.length)
                alert(" Sua média foi " + calculo)
                
            } else {
                console.log(valormes[i])

            }
            }
            break;

        }
      