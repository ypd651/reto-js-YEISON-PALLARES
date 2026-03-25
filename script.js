const formulario = document.getElementById("formulario")
const resultado = document.getElementById("resultado")
const nombre = document.getElementById("input1")
const certamen1= document.getElementById("input2")
const certamen2 = document.getElementById("input3")
const certamen3 = document.getElementById("input4")

formulario.addEventListener("submit", function(e){
    e.preventDefault();

    const usuario = {
        nombre: nombre.value,
        certamen1: certamen1.value,
        certamen2: certamen2.value,
        certamen3: certamen3.value,
        fechaRegistro: new Date().toLocaleString(),
    };

    const media = (c1 + c2 + c3)/3

    resultado.innerHTML = `
    <h2>INFORMACIÓN DE ESTUDIANTES:</h2>
    <p><strong>Nombre</strong>${nombre}</p>
    <p><strong>c1: </strong>${certamen1}</p>
    <p><strong>c2:  2</strong>${certamen2}</p>
    <p><strong>c3:  3</strong>${certamen3}</p>
    <p><strong>PROMEDIO</strong>${media}</p>
    <p><strong>JSON</strong>${usuariosJSON}</p>`
})