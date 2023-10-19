const nombre = document.getElementById('nombre')
const apellido = document.getElementById('apellido')
const email = document.getElementById('email')
const formulario = document.getElementById('formulario')
const val = document.getElementById('val')

formulario.addEventListener('submit', e => {
    e.preventDefault()
    if (nombre.value.length < 3) {
        alert('Nombre muy corto')
    }
})

formulario.addEventListener('submit', e => {
    e.preventDefault()
    if (apellido.value.length < 5) {
        alert('Apellido muy corto')
    }
})



formulario.addEventListener('submit', e => {
    e.preventDefault()
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formulario.email.value)) {
        return (true)
    }
    alert("Email invalido")
    return (false)
})

const $form = document.querySelector('#formulario')
$form.addEventListener('submit, handlesubmit')

async function handlesubmit(event) {
    event.preventDefault()
    const form = new FormData(this)
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        Headers: {
            'Accept': 'application/json'
        }
    })

    if (response.ok){
        alert('Gracias por contarnos! Pronto responderemos tu consulta :) ')
    }
}