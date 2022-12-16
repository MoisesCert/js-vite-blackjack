// En la instrucción de abajo se importa la exportación por defecto crearDeck pero al ser por defecto se puede indicar cualquier nombre para utiliar en este archivo
//import tarari from './usecases/crear-deck';
// En la instrucción de abajo se importa la exportación indeppendiente tiposCarta indicando que en este archivo se llamara 'cartas'
//import { tiposCartas as cartas} from './usecases/crear-deck';
// En esta importación se obtiene la esportación por defecto crearDeck y la importación independiente tiposcartas ( como se ha vistp se podrian poner otros nombres para utilizaar en este archivo)
//import crearDeck, { tiposCartas } from './usecases/crear-deck';
export { crearDeck } from './crear-deck';
export { pedirCarta } from './pedir-carta,js';
export { valorCarta } from './valor-carta';
export{ turnoComputadora } from './turno-computadora.js';
export { crearCartaHTML } from "./crear-carta-html.js";