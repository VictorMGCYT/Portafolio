

document.getElementById('about').addEventListener('click', function () {
    document.getElementById('target').scrollIntoView({
        behavior: 'smooth', // Hace el desplazamiento suave
        block: 'center'      // Alinea la parte superior del elemento con la parte superior de la ventana
    });
})