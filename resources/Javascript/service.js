const cambiar = {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat",
}
const Encriptar = () => {
    let texto = textocampturado.value;
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

 let textocampturado = document.querySelector("textarea");
 let actionEn = document.getElementById("encriptarButton")
 let actionDes = document.getElementById("desencriptarButton")
 
 const textoEncriptado = Encriptar();
 
 document.getElementById("resultado").innerHTML = textoEncriptado === false ? "": textoEncriptado;
 
 actionEn.onclick = Encriptar;
 actionDes.onclick = Desencriptar;


