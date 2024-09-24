const fs = require('fs')

const registrar = (nombre, edad, animal, color, enfermedad) => {
  fs.readFile('citas.json', 'utf8', (err, data) => {
    if (err) throw err
    const citas = JSON.parse(data)
    const existe = citas.some(cita => cita.nombre === nombre && cita.animal === animal)
    if (existe) {
      console.log('Error: Ya existe una cita para este animal')
      return
    }
    citas.push({ nombre, edad, animal, color, enfermedad })
    fs.writeFile('citas.json', JSON.stringify(citas), (err) => {
      if (err) throw err
      console.log('Cita registrada exitosamente')
    })
  })
}

const leer = () => {
  fs.readFile('citas.json', 'utf8', (err, data) => {
    if (err) throw err
    const citas = JSON.parse(data)
    console.log(citas)
  })
}

module.exports = { registrar, leer }
