//Validacion formulario

document.addEventListener('DOMContentLoaded', function () {
  const contactForm = document.getElementById('contact-form');

  contactForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const fullName = document.querySelector('input[name="full_name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    if (fullName.trim() === '') {
      alert('Por favor, ingresa tu nombre.');
      return;
    }

    if (email.trim() === '') {
      alert('Por favor, ingresa tu dirección de correo electrónico.');
      return;
    }

    if (message.trim() === '') {
      alert('Por favor, ingresa un mensaje.');
      return;
    }

    alert('Mensaje enviado correctamente. Responderemos a la brevedad');
  });
});

//Consultar API 

document.addEventListener('DOMContentLoaded', function () {
  const apiUrl = 'https://criptoya.com/api/dolar';

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const oficial = data.oficial;
      const solidario = data.solidario;
      const blue = data.blue;

      const cotizacionElement = document.getElementById('cotizacion');
      cotizacionElement.innerHTML += `
        Dolar oficial: $${oficial}<br>
        Dolar solidario: $${solidario}<br>
        Dólar Blue: $${blue}
      `;
    })
    .catch(error => {
      console.error('Error al cargar la cotización del dólar:', error);
    });

  //Funcion para imprimir la fecha actual
  function obtenerFechaActual() {
    const fecha = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return fecha.toLocaleDateString('es-ES', options);
  }

  // Obtenemos el elemento donde mostraremos la fecha
  const fechaElement = document.getElementById('fecha');

  // Mostramos la fecha actual
  fechaElement.textContent = obtenerFechaActual();
});