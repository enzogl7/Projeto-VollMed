$(document).ready(function() {
    $("#loginForm").on("submit", function(event) {
        event.preventDefault();
        var dados = {
            login: $("#email").val(),
            senha: $("#senha").val()
        }

        $.ajax({
            url: "/login/efetuarLogin",
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify(dados),
            success: function(response) {
                if (response.token) {
                    window.location.href = '/home';
                } else {
                    Swal.fire({
                        icon: "error",
                        title: "Erro",
                        text: "Login/senha inválidos.",
                    });
                }
            },
            error: function() {
                Swal.fire({
                    icon: "error",
                    title: "Erro",
                    text: "Ocorreu um erro.",
                });
            }
        });
    });
});