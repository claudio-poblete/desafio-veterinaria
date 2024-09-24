const { registrar, leer } = require('./operaciones')

const [,, operacion, nombre, edad, animal, color, enfermedad] = process.argv

if (operacion === 'registrar') {
  registrar(nombre, edad, animal, color, enfermedad)
}

if (operacion === 'leer') {
  leer()
}
