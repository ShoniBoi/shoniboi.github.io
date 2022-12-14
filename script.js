document.querySelector("#encriptar").onclick = encriptar
document.querySelector("#desencriptar").onclick = desencriptar
document.querySelector("#boton-copiar").onclick = copiarAlPortapapeles

function encriptar (event) {
	event.preventDefault()
	const $formulario = document.querySelector("#texto-para-encriptar");
	const texto = $formulario["texto-ingresado"].value;

	if (validador(texto) && texto !="") {
		const nuevoTexto = texto
		.split("")
		.map(letra => letra === "a" ? letra = "ai" : letra === 'e' ? letra = 'enter': letra === 'i' ? letra = 'imes' : letra === 'o' ? letra = 'ober' : letra === 'u' ? letra = 'ufat' : letra)
        .join('');
        mostrarBotonCopiar()
        imprimirResultado(nuevoTexto)
        setTimeOut(() => {

        	ocultarBotonCopiar()
        	reiniciar()
        },15000);
	}

	else if (texto === "") {
		sinSeñal()
        setTimeout(() => {
            señal()
        }, 2000);
    }
    else {
        sinSeñal()
        setTimeout(() => {
            señal()
        }, 2000);
    }
}

function desencriptar(event){
    event.preventDefault();
    const $formulario = document.querySelector('#texto-para-encriptar');
    let texto = $formulario['texto-ingresado'].value;
    if(validador(texto) && texto !=''){
    	let textoEncriptado = texto
    	.replaceAll(/imes/igm, "i")
    	.replaceAll(/ai/igm, "a")
    	.replaceAll(/enter/igm, "e") 
    	.replaceAll(/ober/igm, "o")
    	.replaceAll(/ufat/igm, "u")
    	mostrarBotonCopiar()
    	imprimirResultado(textoEncriptado) 
    	setTimeout(() => {       
       		ocultarBotonCopiar()
        	reiniciar()
    	}, 15000);
    }
    else if (textoEncriptado === ''){
        sinSeñal()
        setTimeout(() => {
            señal()
        }, 2000);

    }
    else {
        sinSeñal()
        setTimeout(() => {
            señal()
        }, 2000);
    }
        
}
function copiarAlPortapapeles(){
    const $textoResultado = document.querySelector('#mensaje2').textContent;
    navigator.clipboard.writeText($textoResultado).then(() => {  
    }, () => {    
    });
}

function validador(texto){
    if(/([^a-z\ñ\s])/g.test(texto) === false) {
        return true
    }
    else{
        return false
    }
}
function reiniciar(){
    document.querySelector('#señal').classList.remove('hiden')
    document.querySelector('#mensaje1').classList.remove('hiden');
    document.querySelector('#mensaje2').textContent = 'Ingresa el texto que desees encriptar o desencriptar.';
    document.querySelector('#texto-ingresado').value =''
}
function sinSeñal(){
    document.querySelector('#señal').src="img/sin-señal.png";
    document.querySelector('#mensaje2').classList.add('hiden');
    document.querySelector('#mensaje1').textContent = "Ingresa solo minusculas...";
    document.querySelector('#mensaje1').classList.add('alerta-texto');
    document.querySelector('#alerta-minusculas').classList.add('alerta-fondo');
}
function Señal(){
    document.querySelector('#señal').src="img/señal.png";
    document.querySelector('#mensaje2').classList.remove('hiden');
    document.querySelector('#mensaje1').textContent = "Ningún mensaje fue encontrado";
    document.querySelector('#mensaje1').classList.remove('alerta-texto');
    document.querySelector('#alerta-minusculas').classList.remove('alerta-fondo');
    document.querySelector('#texto-ingresado').value =''
}
function sinSeñalVacio(){
    document.querySelector('#señal').src="img/sin-señal.png";
    document.querySelector('#mensaje2').classList.add('hiden');
    document.querySelector('#mensaje1').textContent = "No ingresaste nada!!!";
    document.querySelector('#mensaje1').classList.add('alerta-texto');
}

function imprimirResultado(texto){
    document.querySelector('#señal').classList.add('hiden')
    document.querySelector('#mensaje1').classList.add('hiden');
    document.querySelector('#mensaje2').textContent = texto;
    
}
function mostrarBotonCopiar(){
    document.querySelector('#boton-copiar').classList.remove('hiden')
    document.querySelector('#texto-resultado').classList.add('resultado');
}

function ocultarBotonCopiar(){
    document.querySelector('#boton-copiar').classList.add('hiden')
    document.querySelector('#texto-resultado').classList.remove('resultado'); 
}