$(document).ready(function() {
    $("#loginForm").on("submit", function(event) {
        event.preventDefault();
        var dados = {
            login: $("#email").val(),
            senha: $("#senha").val()
        }
        console.log(dados)

        $.ajax({
            url: "/login/efetuarLogin",
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify(dados),
            success: function(response) {
                if (response.token) {
                    alert("Login bem-sucedido!");
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