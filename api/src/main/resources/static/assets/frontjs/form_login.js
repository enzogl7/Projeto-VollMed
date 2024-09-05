$(document).ready(function() {
    $("#loginForm").on("submit", function(event) {
        event.preventDefault();
        var dados = {
            login: $("#email").val(),
            senha: $("#senha").val()
        };

        $.ajax({
            url: "/login/efetuarLogin",
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify(dados),
            success: function(response) {
                console.log(response)
                if (response.token) {
                    console.log(response.token)
                    window.redirectUrl = "/home/homepage"
                    console.log("chamou homepage")
                } else {
                    Swal.fire({
                        icon: "error",
                        title: "Erro",
                        text: "Login/senha inválidos.",
                    });
                }
            },
            error: function(xhr, status, error) {
                Swal.fire({
                    icon: "error",
                    title: "Erro",
                    text: "Ocorreu um erro.",
                });
            }
        });
    });

    function getToken() {
        return localStorage.getItem('jwtToken');
    }

});
