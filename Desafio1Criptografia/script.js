const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");
const btnCopiar = document.querySelector(".mensagem");


function btnEncriptar () {
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
}

function encriptar (stringEncriptada) {
    let matrizCodigo = [["e", "en"] , ["i" , "is"] , ["a" , "al"] , ["o" , "otys"] , ["u" , "unv"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0] , matrizCodigo[i][1]);
        }
    }

    return stringEncriptada;
}

function btnDesencriptar () {
    const textoDesencriptado = desencriptar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = "";
}

function desencriptar (stringDesencriptada) {
    let matrizCodigo = [["e", "en"] , ["i" , "is"] , ["a" , "al"] , ["o" , "otys"] , ["u" , "unv"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1] , matrizCodigo[i][0]);
        }
    }

    return stringDesencriptada;
}



let btn = document.querySelector('#btn-copiar')

btn.addEventListener('click', function(e){
    let textArea = document.querySelector('.mensagem')
    navigator.clipboard.writeText(textArea.value);
    btn.textContent = "Copiar"
    
    alert("Texto copiado com sucesso!");
});
