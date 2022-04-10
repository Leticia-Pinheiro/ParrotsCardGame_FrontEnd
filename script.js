const lista = document.querySelector("ul")
const cartas = []
let contador = 0;
let ncartas;
let parrot;

let primeiraCarta, segundaCarta;


function imagem(){
    if (contador === 0 || contador === 1){
        parrot = "/images/bobrossparrot.gif"
    }
    if (contador === 2 || contador === 3){
        parrot = "/images/explodyparrot.gif"
    }
    if (contador === 4 || contador === 5){
        parrot = "/images/fiestaparrot.gif"
    }
    if (contador === 6 || contador === 7){
        parrot = "/images/metalparrot.gif"
    }
    if (contador === 8 || contador === 9){
        parrot = "/images/revertitparrot.gif"
    }
    if (contador === 10 || contador === 11){
        parrot = "/images/tripletsparrot.gif"
    }
    if (contador === 12 || contador === 13){
        parrot = "/images/unicornparrot.gif"
    }
}


    do {        
         ncartas = prompt ("Com quantas cartas você deseja jogar?")
    }while((ncartas  % 2) === 1 || ncartas < 4 || ncartas > 14)

    if ((ncartas % 2) === 0 && ncartas >= 4 && ncartas <=14){
        while (contador < ncartas){
            imagem()
            cartas.push(`
            <li> 
                <div class="carta">
                <img class = "frente" src="images/front.png" alt="">
                <img class = "verso" src=${parrot} alt=""></img>
                </div>
            </li>`)
            lista.innerHTML += cartas[contador]; 
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

