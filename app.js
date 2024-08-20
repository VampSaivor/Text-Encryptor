const textArea = document.querySelector(".textareaUno");
const mensaje = document.querySelector(".textareaDos");
const botonCopiar = document.querySelector(".botonCopiador");
const logo = document.querySelector(".logo");

let paletaActual = 0;
const n = 5; // numero de paletas de colores disponibles

logo.addEventListener("click", cambiarPaleta);
botonCopiar.addEventListener("click", copiarTexto);

asignarTextoElementoById('subtituloInfo','ⓘ Solo letras minúsculas y sin acentos');
asignarTextoElementoById('campo1','INGRESA EL TEXTO AQUI',true);
asignarTextoElementoById('campo2', '💀 NINGUN MENSAJE ENCONTRADO !!! ⚠️ᴵⁿᵍʳᵉˢᵃ ᵉˡ ᵗᵉˣᵗᵒ ᑫᵘᵉ ᵈᵉˢᵉᵉˢ ᵉⁿᶜʳᶦᵖᵗᵃʳ ᵒ ᵈᵉˢᵉⁿᶜʳᶦᵖᵗᵃʳ', true);

function cambiarPaleta ()

{
    paletaActual = (paletaActual + 1) % n; // aqui cambio entre 0 y n-1

    if (paletaActual===0) {
                document.documentElement.style.setProperty('--color-primario', '#2f4858');
                document.documentElement.style.setProperty('--color-secundario', '#0f110c');
                document.documentElement.style.setProperty('--color-terciario', '#FF007F');
                document.documentElement.style.setProperty('--color-septenario', '#1F1F1F');
                document.documentElement.style.setProperty('--color-cuaternario', '#33658a');
                document.documentElement.style.setProperty('--color-quinario', '#FFD700');
                document.documentElement.style.setProperty('--color-senario', '#E0FFFF');
            } else if (paletaActual === 1) {
                document.documentElement.style.setProperty('--color-primario', '#fefee3');
                document.documentElement.style.setProperty('--color-secundario', '#780116');
                document.documentElement.style.setProperty('--color-terciario', '#ffc300');
                document.documentElement.style.setProperty('--color-septenario', '#ffaa00');
                document.documentElement.style.setProperty('--color-cuaternario', '#faf0ca');
                document.documentElement.style.setProperty('--color-quinario', '#ff8800');
                document.documentElement.style.setProperty('--color-senario', '#ff7b00');
            } else if (paletaActual === 2) {
                document.documentElement.style.setProperty('--color-primario', '#38040e');
                document.documentElement.style.setProperty('--color-secundario', '#ad2831');
                document.documentElement.style.setProperty('--color-terciario', '#38040e');
                document.documentElement.style.setProperty('--color-septenario', '#ec9f05');
                document.documentElement.style.setProperty('--color-cuaternario', '#800e13');
                document.documentElement.style.setProperty('--color-quinario', '#eff6e0');
                document.documentElement.style.setProperty('--color-senario', '#250902');
            } else if (paletaActual === 3) {
                document.documentElement.style.setProperty('--color-primario', '#140f2d');
                document.documentElement.style.setProperty('--color-secundario', '#ebebd3');
                document.documentElement.style.setProperty('--color-terciario', '#f4d35e');
                document.documentElement.style.setProperty('--color-septenario', '#f95738');
                document.documentElement.style.setProperty('--color-cuaternario', '#083d77');
                document.documentElement.style.setProperty('--color-quinario', '#f22b29');
                document.documentElement.style.setProperty('--color-senario', '#ee964b');
            } else if (paletaActual === 4) {
                document.documentElement.style.setProperty('--color-primario', '#240046');
                document.documentElement.style.setProperty('--color-secundario', '#b185db');
                document.documentElement.style.setProperty('--color-terciario', '#5a189a');
                document.documentElement.style.setProperty('--color-septenario', '#d2b7e5');
                document.documentElement.style.setProperty('--color-cuaternario', '#815ac0');
                document.documentElement.style.setProperty('--color-quinario', '#f72585');
                document.documentElement.style.setProperty('--color-senario', '#dec9e9');
            } else {
                console.log('Paleta no definida');
            }
};

function iniciarCambioPaleta() {
    intervaloId = setInterval(cambiarPaleta, 140);
}
function detenerCambioPaleta() {
    clearInterval(intervaloId);
}
logo.addEventListener('dblclick', function() {
    iniciarCambioPaleta();
    setTimeout(detenerCambioPaleta, 9000);
});


function asignarTextoElementoById(elementoById, texto, miPlaceholder = false) {
    let elementoHTML = document.getElementById(elementoById);
    if (elementoHTML){
        if (miPlaceholder){
            elementoHTML.placeholder = texto;
        }else{
    elementoHTML.innerHTML = texto;
            }
    }else{
        console.error(`no se encuentra el elemento con el ID ${elementoById}`);
    }    
}

function funcionEncriptadora(){
    const  textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value= "";
    mensaje.style.backgroundImage = "none";
 };

function funcionDesencriptadora(){
    const  textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value= "";
    mensaje.style.backgroundImage = "none";
};

function encriptar(stringEncriptada){

    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i=0; i < matrizCodigo.length; i++)
        {
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])

            };
        };
        return stringEncriptada;
};

function desencriptar(stringDesencriptada){

    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    
    stringDesencriptada = stringDesencriptada.toLowerCase();
    
    for (let i=0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1] , matrizCodigo[i][0])
    
            };
        };
        return stringDesencriptada;
    };
    
function copiarTexto() {
        /*mensaje.select();
        document.execCommand("copy");
        dice la pagina w3school que esta en desuso, aunque es mas practica 'opinion personal'*/

        navigator.clipboard.writeText(mensaje.value)
        .then(() => {
            console.log("Texto copiado al portapapeles!");
        })
        .catch(err => {
            console.error("Error al copiar al portapapeles: ", err);
        });


        textArea.value = mensaje.value;// aunque no lo pide la logica me parece mas practico y util debido a que no debo estar pegando el contenido continuamente al textarea
        //alert("Texto copiado al portapapeles!");
    };





