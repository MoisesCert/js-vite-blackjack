
/**
 * Funcion que obtiene el valor de una carta de la baraa francesa
 * @param {String} carta String con una carta de la baraja francesa
 * @returns {Number} Devuelve el valor de la carta como Number
 */
export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}