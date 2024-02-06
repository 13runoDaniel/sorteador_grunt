document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('form_sorteador').addEventListener('submit', function(evento){
        evento.preventDefault();
        let numeroMaximo = document.getElementById('numero_maximo').value;
        numeroMaximo = parseInt(numeroMaximo);

        let numeroAleatorio = Math.random() * numeroMaximo
        // numeroAleatorio = Math.round(numeroAleatorio + 1);
        // numeroAleatorio = Math.ceil(numeroAleatorio + 1);
        numeroAleatorio = Math.floor(numeroAleatorio + 1);

        document.getElementById('resultado_valor').innerText = numeroAleatorio;
        document.querySelector('.resultado').style.display = "block";
    });
});