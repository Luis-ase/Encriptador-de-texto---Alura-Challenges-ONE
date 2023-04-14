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
            }
            textoencriptado= textoencriptado + texto[index]
        }
        console.log(textoencriptado)
        return textoencriptado
    }

}
const Desencriptar = () => {
    return console.log("hola")

}

function Capturar(){
    const textocampturado = document.getElementById("textoDeEntrada").value;
    const etiquetaP = document.getElementById("resultado")
    etiquetaP.innerHTML = Encriptar(textocampturado)
}

let actionEn = document.getElementById("encriptarButton");
let actionDes = document.getElementById("desencriptarButton");
let actionCopi= document.getElementById("Copiar-texto");

actionCopi.addEventListener("click", () => {
    let textoaCopiar= document.getElementById("resultado").textContent
    navigator.clipboard.writeText(textoaCopiar)
        .then(() => {
            console.log("Texto copiado al portapapeles!");
        })
        .catch((error) => {
            console.error("Error al copiar el texto:", error);
        });
});
 
 
 actionEn.onclick = Capturar;
 actionDes.onclick = Desencriptar;


