function loginWithGoogle() {
    alert("Iniciando sesión con Google...");
    // Aquí iría la lógica para iniciar sesión con Google
}

function loginWithFacebook() {
    alert("Iniciando sesión con Facebook...");
    // Aquí iría la lógica para iniciar sesión con Facebook
}

document.getElementById("registroForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Registro exitoso. Redirigiendo...");
    // Aquí iría la lógica para enviar los datos del formulario al servidor
});
// Archivo js/Registro.js
document.getElementById('registroForm').addEventListener('submit', function(event) {
    const contraseña = document.getElementById('contraseña').value;
    const confirmarContraseña = document.getElementById('confirmar-contraseña').value;

    if (contraseña !== confirmarContraseña) {
        alert('Las contraseñas no coinciden. Por favor, verifica.');
        event.preventDefault(); // Evita que el formulario se envíe
    }
});
document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe

    // Obtener los valores del formulario
    const usuario = document.getElementById('usuario').value;
    const correo = document.getElementById('correo').value;
    const contraseña = document.getElementById('contraseña').value;
    const confirmarContraseña = document.getElementById('confirmar-contraseña').value;

    // Validar que las contraseñas coincidan
    if (contraseña !== confirmarContraseña) {
        alert('Las contraseñas no coinciden. Por favor, verifica.');
        return;
    }

    // Crear un objeto con los datos del usuario
    const usuarioData = {
        usuario: usuario,
        correo: correo,
        contraseña: contraseña
    };

    // Guardar los datos en localStorage
    localStorage.setItem('usuarioRegistrado', JSON.stringify(usuarioData));

    // Mostrar mensaje de éxito
    alert('Registro exitoso. Ahora puedes iniciar sesión.');

    // Redirigir a la página de inicio de sesión
    window.location.href = 'inicio-sesion.html';
});