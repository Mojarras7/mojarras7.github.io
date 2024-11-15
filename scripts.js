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
        const url = "http://127.0.0.1:5000/activar_lectura"; // Cambia <IP_Raspberry_Pi>
        const data = { activar: true };

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();
            if (response.ok) {
                alert(result.message);
            } else {
                alert("Error: " + result.message);
            }
        } catch (error) {
            alert("Error de conexión: " + error.message);
        }
    }
});
