
    let verificar = document.querySelector('#intentar');
    let intentos = 1;
    let listaNumeroSorteados = [];
    let numeroMaximo =10;

    function asignarTextoElemento (elemento, texto) {
        let ElementoHTML = document.querySelector(elemento);
        ElementoHTML.innerHTML = texto;
    }

    verificar.addEventListener ("click", function(){
        let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
        if (numeroUsuario == numeroSecreto){
            asignarTextoElemento('p',`¡Acertaste el número en ${intentos} ${(intentos===1) ?'vez' :'veces'}!`);
            document.getElementById('reiniciar').removeAttribute('disabled');
        } else if (numeroUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
            intentos++;
            limpiarCaja();
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
            intentos++;
            limpiarCaja();
        }
        return;
    })

    function limpiarCaja() {
        document.querySelector('#valorUsuario').value = '';
    }

    function generarNumeroSecreto() {
        let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
        //Se verifica que aún hayan números para jugar
        if (listaNumeroSorteados.length == numeroMaximo) {
                asignarTextoElemento('p','Ya se sortearon todos los número posibles');
        } else {
                    //verifica si el número generado ya fue utilizado, si ya fue utilizado genera un número nuevo.
                if (listaNumeroSorteados.includes(numeroGenerado)){
                    return generarNumeroSecreto();
                    //si el número no fue utilizado se agrega al array y se continúa el juego.
                } else {
                    listaNumeroSorteados.push(numeroGenerado);
                    return numeroGenerado;
                }
            }
        }

        function condicionesIniciales() {
            asignarTextoElemento('h1','Juego del número secreto!');
            asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
            numeroSecreto = generarNumeroSecreto();
            intentos = 1;
            console.log(numeroSecreto);
        }

        function reiniciarJuego() {
            //limpiar caja
            limpiarCaja();
            //Indicar mensaje de intervalo de números 
            //Generar el número aleatorio
            //Inicializar el número intentos
            condicionesIniciales();
            //Deshabilitar el botón de nuevo juego
            document.querySelector('#reiniciar').setAttribute('disabled','true');
            
        }
    

    condicionesIniciales();

  

    
    