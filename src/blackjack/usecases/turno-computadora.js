import { pedirCarta, valorCarta, crearCartaHTML } from "."; // No se indica la carpeta por que es la mmisma y no se indica el archivo por que es el index.js


/**
 * Turno de juego de la computadora
 * @param {Number} puntosMinimos Puntos necesarios por la computadora para ganar
 * @param {HTMLElement} puntosHTML Elemento HTML para mostar los puntos
 * @param {HTMLElement} divCartasComputadora Elemento HTML para mostar las cartas de la computadora
 * @param {Number} puntosMinimos Puntos necesarios pordivCartasComputadora la computadora para ganar
 * @param {Array<String>} deck Baraja de cartas francesa como Array de String
 */
export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck = [] ) => {

    if( !puntosMinimos ) throw new Error('Son necesarios los puntos mínimos a superar');
    if( !puntosHTML ) throw new Error('Son necesarios puntosHTML');
    if( !divCartasComputadora ) throw new Error('Es necesario divCartasComputadora');

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta( deck );

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        const imgCarta = crearCartaHTML( carta );
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}