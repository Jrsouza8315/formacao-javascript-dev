const precoCombustivel = 5.50;

const kmPorLitros = 10;

const distanciaEmKm = 370;

const litrosConsumidos = distanciaEmKm / kmPorLitros;
const valorGasto = litrosConsumidos * precoCombustivel;
console.log(valorGasto);
