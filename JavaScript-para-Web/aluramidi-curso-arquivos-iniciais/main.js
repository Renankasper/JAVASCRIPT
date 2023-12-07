function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    } 
    else {
         //alert ('Elemento não econtrado');
        console.log('Elemento não encontrado ou seletor inválido');
    }

    //document.querySelector(seletorAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');
//enquanto (verdadeira ou falsa) while 
for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //templete string

    //console.log(idAudio);
    
    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {
        if (evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }
        
    }
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
    
    //console.log(evento.code)
    //contador = contador + 1;
    //console.log(contador);
}
