const cambiar = {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat",
}
const Encriptar = (texto) => {
    
    if (!texto){
        return false
    }else{
        let textoencriptado ="";
        for (let index = 0; index < texto.length; index++) {
            if(cambiar[texto[index]]){
            textoencriptado = textoencriptado + cambiar[texto[index]]
            }else{
                textoencriptado= textoencriptado + texto[index]
            }
        }
        console.log(textoencriptado)
        return textoencriptado
    }

}
const Desencriptar = (text) => {
    let textodesencriptado = "";

    let index = 0

    while(index < text.length){
        let letra = text[index]
        let valueObjtpalabra = cambiar[letra]

        if(!valueObjtpalabra){
            index++
        }else{
             let objtpalabra = text
                .substring(index, index + valueObjtpalabra.length)
        
            if(objtpalabra === valueObjtpalabra){
                index += valueObjtpalabra.length 
              
            }else {
                index++
            }
        }
        
        textodesencriptado += letra
    }
    console.log(textodesencriptado)
    return textodesencriptado

}

function inputEncriptar(){
    const textocampturado = document.getElementById("textoDeEntrada").value;
    const etiquetaP = document.getElementById("resultado")
    etiquetaP.innerHTML = Encriptar(textocampturado);
    
}
function inputDesencriptar(){
    const textocampturado = document.getElementById("textoDeEntrada").value;
    const etiquetaP = document.getElementById("resultado")
    etiquetaP.innerHTML = Desencriptar(textocampturado);
    
}

let actionEn = document.getElementById("encriptarButton");
let actionDes = document.getElementById("desencriptarButton");
let actionCopi= document.getElementById("Copiar-texto");

actionCopi.addEventListener("click", () => {
    let textoaCopiar= document.getElementById("resultado").textContent
    navigator.clipboard.writeText(textoaCopiar)
        .then(() => {
            alert("texto copiado")
            console.log("Texto copiado al portapapeles!");
        })
        .catch((error) => {
            console.error("Error al copiar el texto:", error);
        });
});
 
 
 actionEn.onclick = inputEncriptar;
 actionDes.onclick = inputDesencriptar;


