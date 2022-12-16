import _ from 'underscore';
// En la instrucción de abajo se importa la exportación por defecto crearDeck pero al ser por defecto se puede indicar cualquier nombre para utiliar en este archivo
//import tarari from './usecases/crear-deck';
// En la instrucción de abajo se importa la exportación indeppendiente tiposCarta indicando que en este archivo se llamara 'cartas'
//import { tiposCartas as cartas} from './usecases/crear-deck';
// En esta importación se obtiene la esportación por defecto crearDeck y la importación independiente tiposcartas ( como se ha vistp se podrian poner otros nombres para utilizaar en este archivo)
//import crearDeck, { tiposCartas } from './usecases/crear-deck';
//import { pedirCarta } from './usecases/pedir-carta,js';
//import { valorCarta } from './usecases/valor-carta';

// Para no llenar el arhcivo con muchos imports se crea un archivo de barril
// en este caso es el archivo barril es './usecases/indes.js' 
// en ese archivo se exportan todas las importaciones que queremes importar aquí
import { crearDeck, pedirCarta, valorCarta, turnoComputadora, crearCartaHTML } from './usecases' // No se inddica el arhcivo index.js por que es el archivo por defecto


/**
 * 2C = Two of Clubs
 * 2D = Two of DiamondsS
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

let deck         = [];
const tipos      = ['C','D','H','S'];
const especiales = ['A','J','Q','K'];

let puntosJugador = 0,
    puntosComputadora = 0;

// Referencias del HTML
const btnPedir   = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo   = document.querySelector('#btnNuevo');

const divCartasJugador     = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');

const puntosHTML = document.querySelectorAll('small');



deck = crearDeck( tipos, especiales );

// Eventos
btnPedir.addEventListener('click', () => {

    const carta = pedirCarta( deck );
    
    puntosJugador = puntosJugador + valorCarta( carta );
    puntosHTML[0].innerText = puntosJugador;
    
    // <img class="carta" src="assets/cartas/2C.png">
    const imgCarta = crearCartaHTML( carta );
    divCartasJugador.append( imgCarta );

    if ( puntosJugador > 21 ) {
        console.warn('Lo siento mucho, perdiste');
        btnPedir.disabled   = true;
        btnDetener.disabled = true;
        turnoComputadora( puntosJugador, puntosHTML[1], divCartasComputadora, deck );

    } else if ( puntosJugador === 21 ) {
        console.warn('21, genial!');
        btnPedir.disabled   = true;
        btnDetener.disabled = true;
        turnoComputadora( puntosJugador, puntosHTML[1], divCartasComputadora, deck );
    }

});


btnDetener.addEventListener('click', () => {
    btnPedir.disabled   = true;
    btnDetener.disabled = true;

    turnoComputadora( puntosJugador, puntosHTML[1], divCartasComputadora, deck );
});

btnNuevo.addEventListener('click', () => {

    console.clear();
    deck = [];
    deck = crearDeck( tipos, especiales );

    puntosJugador     = 0;
    puntosComputadora = 0;
    
    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;

    divCartasComputadora.innerHTML = '';
    divCartasJugador.innerHTML = '';

    btnPedir.disabled   = false;
    btnDetener.disabled = false;

});
