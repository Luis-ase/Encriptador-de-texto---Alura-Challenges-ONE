const cambiar = {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat",
}
const Encriptar = (texto) => {
    let textoencriptado = "";
    
    for (let index = 0; index < texto.length; index++) {
        if(cambiar[texto[index]]){
        textoencriptado = textoencriptado + cambiar[texto[index]]
        }
        textoencriptado= textoencriptado + texto[index]
    }

    return textoencriptado

}
const Desencriptar = () => {
    return

}

 let textocampturado = document.querySelector("textarea");
 let actionEn = document.getElementById("encriptarButton")
 let actionDes = document.getElementById("desencriptarButton")
 let valor = textocampturado.value;
 
 let saveTexto = Encriptar(valor);
 actionEn.onclick = saveTexto;
 actionDes.onclick = Desencriptar;


 console.log()
