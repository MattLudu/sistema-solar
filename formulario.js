const nombre = document.getElementById('nombre')
const apellido = document.getElementById('apellido')
const email = document.getElementById('email')
const formulario = document.getElementById('formulario')
const val = document.getElementById('val')

formulario.addEventListener('submit', e=>{
    e.preventDefault()
    if(nombre.value.length <3){
        alert('Nombre muy corto')
    }
})

formulario.addEventListener('submit', e=>{
    e.preventDefault()
    if(apellido.value.length <5){
        alert('Apellido muy corto')
    }
})


<form action="https://formspree.io/f/mleyayzn" method="POST">
  <label for="nombre">Nombre:</label>
  <input type="text" name="nombre" id="nombre">
  <label for="email">Email:</label>
  <input type="email" name="email" id="email">
  <label for="mensaje">Mensaje:</label>
  <textarea name="mensaje" id="mensaje"></textarea>
  <button type="submit">Enviar</button>
</form>


formulario.addEventListener('submit', e=>{
    e.preventDefault()
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formulario.email.value))
    {
      return (true)
    }
      alert("Email invalido")
      return (false)
})
