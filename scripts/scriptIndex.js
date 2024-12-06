

document.getElementById('about').addEventListener('click', function () {
    document.getElementById('target').scrollIntoView({
        behavior: 'smooth', // Hace el desplazamiento suave
        block: 'center'      // Alinea la parte superior del elemento con la parte superior de la ventana
    });
})





const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'service_fcp6paq';
   const templateID = 'template_w47gskl';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Correo enviado';
      alert('¡Enviado!');
    }, (err) => {
      btn.value = 'Correo enviado';
      alert(JSON.stringify(err));
    });
});