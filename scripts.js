document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const loginContainer = document.getElementById('login-container');
    const inventoryContainer = document.getElementById('inventory-container');
    const loginError = document.getElementById('login-error');
    const activateModeBtn = document.getElementById('activate-mode-btn'); // Botón de activar modo

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

    document.getElementById('send-number-btn').addEventListener('click', function() {
        const number = "Borrar";
        document.getElementById('number-output').textContent = "Número enviado: " + number;
    });

    async function activarModoLectura() {
        const url = "http://10.43.126.172:5000/activar_lectura"; // Dirección IP de tu Raspberry Pi
    
        const data = { activar: true }; // Datos que vamos a enviar
    
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });
    
            const result = await response.json();  // Convertimos la respuesta en formato JSON
            if (response.ok) {
                alert(result.message);  // Mostramos el mensaje de éxito
            } else {
                alert("Error: " + result.message);  // En caso de error, mostramos el mensaje de error
            }
        } catch (error) {
            alert("Error de conexión: " + error.message);  // Si hay un error en la conexión
        }
    }
    
});
