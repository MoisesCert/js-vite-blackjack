import _ from 'underscore'; 


export const tiposCartas = ['C','D','H','S'] // Está puesto en este archivo para ilustrar una exportación independiente

/**
 * Esta función crea un nuevo deck
 * @param {Array<String>} tiposDeCarta Ejemplo: ['C','D','H','S'] (Palos de baraja francesa)
 * @param {Array<String>} tiposEspeciales Ejemplo: ['A','J','Q','K'] (Figuras de la baraja)
 * @returns {Array<String>} retorna un array de cartas (deck)
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
// tiposDeCarta se refiere a ['C','D','H','S'] clubs, diamonds, hearts, spades (Palos de baraja francesa)
// tiposEspeciales se refiere a['A','J','Q','K'] las figuras de la baraja    

    if( !tiposCartas || tiposCartas.length === 0 ) throw new Error('tiposDeCarta es obligatorio')
    if( !tiposEspeciales || tiposEspeciales.length === 0 ) throw new Error('tiposDeCarta debe ser un array con al menos un elementos')

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }

    deck = _.shuffle( deck );
    return deck;
}


export default crearDeck;