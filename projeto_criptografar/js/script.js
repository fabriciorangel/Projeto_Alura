const texto_entrada = document.querySelector('#txte')
const texto_saida = document.getElementById('txts')
const criptografar = document.getElementById('criptografar')
const descriptografar = document.getElementById('descriptografar')
const copiar = document.getElementById('copiar')
//******************************************************************** */

texto_entrada.addEventListener("keypress", function(letra){//Criar o evento e depois criar a verificação das letras
    if(!checkCaractere(letra)){
        letra.preventDefault()
    }
})

criptografar.addEventListener('click', function(){
    if(!texto_entrada.value){
        alert("Erro! Campo Vazio")
    }else{
        let textoEntrada = texto_entrada.value
        let textoParaCrip = textoEntrada.split("")

        for(let i = 0; i <= textoParaCrip.length;i++){
            if(textoParaCrip[i] == "a"){
                textoParaCrip[i] = 'enter'
            }
            if(textoParaCrip[i] == "e"){
                textoParaCrip[i] = 'imes'
            }
            if(textoParaCrip[i] == "i"){
                textoParaCrip[i] = 'ai'
            }
            if(textoParaCrip[i] == "o"){
                textoParaCrip[i] = 'ober'
            }
            if(textoParaCrip[i] == "u"){
                textoParaCrip[i] = 'ufat'
            }
        }
        limparsaida() 
        texto_saida.value = textoParaCrip.join("")
    }
})

descriptografar.addEventListener("click", function(){
    textoEntrada = texto_entrada.value

    textoEntrada = textoEntrada.replace(/enter/g,'a')
    textoEntrada = textoEntrada.replace(/imes/g,'e')
    textoEntrada = textoEntrada.replace(/ai/g,'i')
    textoEntrada = textoEntrada.replace(/ober/g,'o')
    textoEntrada = textoEntrada.replace(/ufat/g,'u')
    limparsaida()
    texto_saida.value = textoEntrada
})

copiar.addEventListener('click', function(){
    const texto_entrada = document.querySelector('#txte').value=''
    //**********************************/
    let textocopiado = document.getElementById("txts")
    textocopiado.select()
    textocopiado.setSelectionRange(0, 99999)
    navigator.clipboard.writeText(textocopiado.value)
    //**********************************/
    const sair = document.getElementById('back-saida')
    sair.classList.toggle('hide')
    texto_saida.classList.toggle("hide")
    copiar.classList.toggle("hide")
})

function checkCaractere(letra){//Verificação das letras
    const carac = String.fromCharCode(letra.keyCode)
    const pattern = new RegExp('[a-z- ]')
    const bool = pattern.test(carac)
    if(!bool) {
        alert("[ERRO] Apenas letras minusculas e sem acento")
    }
    return bool
}


function limparsaida(){
    const sair = document.getElementById('back-saida')
    sair.classList.toggle('hide')
    texto_saida.classList.toggle("hide")
    copiar.classList.toggle("hide")
}
