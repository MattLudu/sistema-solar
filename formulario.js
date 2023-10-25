
const $formulario = document.querySelector("[id='formulario']")

$formulario.addEventListener('submit',handlesubmit)

async function handlesubmit(event) {
    event.preventDefault()
    const formulario = new FormData(this)
    const response = await fetch(this.action, {
        method: this.method,
        body: formulario,
        headers: {
        'Accept': 'application/json'
        }
    })
}
document.getElementById("formulario").addEventListener("submit", function (e) {
    const nombreInput = document.getElementById("nombre");
    const nombreValue = nombreInput.value;
    const apellidoInput = document.getElementById("apellido");
    const apellidoValue = apellidoInput.value;

    if (nombreValue.length <= 3 && apellidoValue.length <= 5) {
      alert("Nombre o Apellido muy cortos");
      e.preventDefault();
    } else {
      alert('Gracias por contarnos! :)');
    }
  });