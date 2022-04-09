const lista = document.querySelector("ul")
const cartas = []
let contador = 0;

    do {        
         ncartas = prompt ("Com quantas cartas você deseja jogar?")
    }while((ncartas  % 2) === 1 || ncartas < 4 || ncartas > 14)

    if ((ncartas % 2) === 0 && ncartas >= 4 && ncartas <=14){
        while (contador < ncartas){
            cartas.push('OLÁ')
            lista.innerHTML += `<li> ${cartas[contador]} </li>`
            contador++;
        }
    }

    



 







    
//     while ((ncartas % 2) !== 0){
//         alert ("nao")
//         let ncartas = prompt("Com quantas cartas você deseja jogar?")
//     }
//     if((ncartas % 2) === 0){
//         alert("ok")
//     }

