var escondido = false;
var not_liked = true;
var likes = 0

var saludos = ["Holaaaaaaa", "estoy chato de la cuarentena :(", "¿Qué pasa pioje?", "Dime porfa que te gustó mi página", "Dame un like con el botón de corazón!", "¡Hola Mundo!", "Lorem Ipsum", "No sé si esto funciona en Internet Explorer", "Con ese botón obtienes un título aleatorio ;)"]

$(document).ready(function(){
    $.getJSON("https://api.countapi.xyz/get/avello.cl/web0_pv_likes", function(response) {
        likes = response.value;
        if(likes==1){
            $("#like_text").text(`${likes} me gusta`);
        }
        else if(likes>1){
            $("#like_text").text(`${likes} me gustas`);
        };
    });

    $("#img_button").click(function(){
        if(escondido == true) {
            $("#imagen_fondo").show();
            escondido = false;
        }
        else {
            $("#imagen_fondo").hide();
            escondido = true;
        }
    });

    $("#like_button").mouseenter(function(){
        if(not_liked) {
            $("#like_svg_bg").css("fill","#B5B3BD")
        };
    });
    $("#like_button").mouseleave(function(){
        if(not_liked) {
            $("#like_svg_bg").css("fill","white")
        };
    });
    
    $("#like_button").click(function(){
        not_liked = false
        console.log("Liked!")
        $("#like_svg_line").css("fill","none")
        $("#like_svg_bg").css("fill","red")
        $.getJSON("https://api.countapi.xyz/get/avello.cl/web0_pv_likes");
        likes++
        if (likes == 1){
            $("#like_text").text(`${likes} me gusta`)
        }
        else if (likes > 1){
            $("#like_text").text(`${likes} me gustas`)
        }
    });

    $("#magic_button").click(function(){
        console.log("Magic!")
        $("#titulo").text(saludos[Math.floor(Math.random() * saludos.length)])
    });

});

