document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const loginContainer = document.getElementById('login-container');
    const inventoryContainer = document.getElementById('inventory-container');
    const loginError = document.getElementById('login-error');
    const activateModeBtn = document.getElementById('activate-mode-btn'); // Botón de activar modo

    // Evento para el formulario de inicio de sesión
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Validación básica
        if (username === "admin" && password === "1234") {
            loginContainer.style.display = 'none';
            inventoryContainer.style.display = 'block';
            activateModeBtn.style.display = 'inline-block'; // Mostrar el botón
        } else {
            loginError.textContent = "Usuario o contraseña incorrectos";
        }
    });

    // Evento para el botón "Enviar número"
    document.getElementById('send-number-btn').addEventListener('click', async function() {
        const numero = Math.floor(Math.random() * 100);  // Generar un número aleatorio entre 0 y 99
        document.getElementById('number-output').textContent = "Número enviado: " + numero;

        const url = "http://10.43.126.172:5000/enviar_numero";  // Dirección de tu Raspberry Pi

        const data = { numero: numero };  // Datos que vamos a enviar

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();  // Convertir la respuesta en formato JSON
            if (response.ok) {
                alert(result.message);  // Mostrar mensaje de éxito
            } else {
                alert("Error: " + result.message);  // Mostrar mensaje de error
            }
        } catch (error) {
            alert("Error de conexión: " + error.message);  // Si hay error de conexión
        }
    });

    // Función para activar el modo de lectura (opcional en esta etapa)
    async function activarModoLectura() {
        const url = "http://10.43.126.172:5000/activar_lectura";  // Dirección de tu Raspberry Pi
        const data = { activar: true };

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();  // Convertir la respuesta en formato JSON
            if (response.ok) {
                alert(result.message);  // Mostrar mensaje de éxito
            } else {
                alert("Error: " + result.message);  // Mostrar mensaje de error
            }
        } catch (error) {
            alert("Error de conexión: " + error.message);  // Si hay error de conexión
        }
    }
});
