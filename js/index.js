
//Carga del contenido

$(document).ready(function() {
    $.ajax({
        type: "POST",
        url: "index.php",
        success: function () {
            $("#container_index").load("index0.php");
                $('#botonen0').removeClass('botoncolor');
                $('#botonen1').addClass('botoncolor');
                $('#botonen2').addClass('botoncolor');
                $('#botonen3').addClass('botoncolor');
                $('#botonen4').addClass('botoncolor');
                $('#botonen5').addClass('botoncolor');
        }
    });


    $('#botonen0').click(function (e) { 
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "index0.php",
            success: function () {
                $("#container_index").load("index0.php");
                
        },
        });
    });
    $('#botonen1').click(function (e) { 
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "porfolio.php",
            success: function () {
                $("#container_index").load("porfolio.php");
        },
        });
    });

    $('#botonen2').click(function (e) { 
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "presupuesto.php",
            success: function () {
                $("#container_index").load("presupuesto.php");
        },
        });
    });
    $('#botonen3').click(function (e) { 
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "contacto.php",
            success: function () {
                $("#container_index").load("contacto.php");
        },
        });
    });
    $('#botonen4').click(function (e) { 
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "login.php",
            success: function () {
                $("#container_index").load("login.php");
        },
        });
    });
    $('#botonen5').click(function (e) { 
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "enlace_privado.php",
            success: function () {
                $("#container_index").load("enlace_privado.php");
        },
        });
    });

})

//Cambio de clase botones
$("#botonen0").click(function () {
    $('#botonen0').removeClass('botoncolor');
    $('#botonen1').addClass('botoncolor');
    $('#botonen2').addClass('botoncolor');
    $('#botonen3').addClass('botoncolor');
    $('#botonen4').addClass('botoncolor');
    $('#botonen5').addClass('botoncolor');
});

$("#botonen3").click(function () {
    $('#botonen3').removeClass('botoncolor');
    $('#botonen0').addClass('botoncolor');
    $('#botonen1').addClass('botoncolor');
    $('#botonen2').addClass('botoncolor');
    $('#botonen4').addClass('botoncolor');
    $('#botonen5').addClass('botoncolor');
});

$("#botonen2").click(function () {
    $('#botonen2').removeClass('botoncolor');
    $('#botonen0').addClass('botoncolor');
    $('#botonen1').addClass('botoncolor');
    $('#botonen3').addClass('botoncolor');
    $('#botonen4').addClass('botoncolor');
    $('#botonen5').addClass('botoncolor');
});

$("#botonen1").click(function () {
    $('#botonen1').removeClass('botoncolor');
    $('#botonen0').addClass('botoncolor');
    $('#botonen2').addClass('botoncolor');
    $('#botonen3').addClass('botoncolor');
    $('#botonen4').addClass('botoncolor');
    $('#botonen5').addClass('botoncolor');
});



$("#botonen4").click(function () {
    $('#botonen4').removeClass('botoncolor');
    $('#botonen1').addClass('botoncolor');
    $('#botonen2').addClass('botoncolor');
    $('#botonen3').addClass('botoncolor');
    $('#botonen0').addClass('botoncolor');
    $('#botonen5').addClass('botoncolor');
});

$("#botonen5").click(function () {
    $('#botonen5').removeClass('botoncolor');
    $('#botonen1').addClass('botoncolor');
    $('#botonen2').addClass('botoncolor');
    $('#botonen3').addClass('botoncolor');
    $('#botonen0').addClass('botoncolor');
    $('#botonen4').addClass('botoncolor');
});