document.getElementById("openModalButton").addEventListener("click", function() {
    openModal();
});

// Función para abrir el modal
function openModal() {
    document.getElementById("modal-Login").style.display = "block";
}

// Función para cerrar el modal
function closeModal() {
    document.getElementById("modal-Login").style.display = "none";
}

function Login() {
    var user = {
        email: $("#email-login").val(),
        password: $("#password-login").val(),
    };

    fetch("https://localhost:8085/api/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Error al iniciar sesión.");
        }
        return response.json();
    })
    .then(data => {
        $("#form-modal-login").html("Ha iniciado sesión exitosamente.");
        localStorage.setItem('idUser', data.id);
        window.location.href = 'groups.html';
    })
    .catch(error => {
        $("#form-modal-login").html("Error al iniciar sesión. " + error.message);
    });
}

document.addEventListener("DOMContentLoaded", function () {
    var registerLink = document.getElementById("login-button-registrer");

    registerLink.addEventListener("click", function (event) {
      $('#modal-Login').modal('hide');
      
      $('#modal-Register').modal('show');

      event.preventDefault();
    });
  });