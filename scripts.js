// Contenido del archivo scripts.js

document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('login-error');

    if (username === "admin" && password === "1234") {
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('inventory-container').style.display = 'block';
    } else {
        errorMessage.textContent = "Usuario o contraseña incorrectos";
    }
});

document.getElementById('send-number-btn').addEventListener('click', function() {
    const number = "Borrar";
    document.getElementById('number-output').textContent = "Número enviado: " + number;
});

//modo lectura
async function activarModoLectura() {
    const url = "http://<IP_Raspberry_Pi>:5000/activar_lectura"; // Cambia <IP_Raspberry_Pi>
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
