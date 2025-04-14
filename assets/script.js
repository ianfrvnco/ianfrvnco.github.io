function mouseCima() {
    var foto;
    foto = window.document.getElementById("perfil");
    foto.style.transform = "rotate(360deg)";
}

function mouseFora() {
    var foto;
    foto = window.document.getElementById("perfil");
    foto.style.transform = "rotate(-360deg)";
}

function mouseCimaScale(element) {
    element.style.transform = "scale(1.1)";
}
function mouseForaScale(element) {
    element.style.transform = "scale(1)";
}

