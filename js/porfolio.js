

//Porfolio

$(document).ready(function () {
    $('.content-file').hide();
    $("#img1").click(function () {
        $('#div_img').css('margin-bottom', '2em');
        $('.content-file').fadeOut(500);
        $('.content-file').fadeIn(1000);
        $('#img22').animate({ width: 'hide' }, 500);
        $('#img33').animate({ width: 'hide' }, 500);
        $('#img44').animate({ width: 'hide' }, 500);
        $('#img55').animate({ width: 'hide' }, 500);
        $('#img11').animate({ width: 'toggle' }, 1000);
        $("#name_web").text("Dental Brenes");
        $("#enlace_web").attr('href', "https://dentalbrenes.es").html('pincha aqui');
        $("#tipo_web").text("Corporativa");
        $("#fecha_web").text("02/01/2020");
        $("#colabo_web").text("HTML / CSS / JavaScript");

    });
    $("#img2").click(function () {
        $('#div_img').css('margin-bottom', '2em')
        $('.content-file').fadeOut(500);
        $('.content-file').fadeIn(1000);
        $('#img11').animate({ width: 'hide' }, 500);
        $('#img33').animate({ width: 'hide' }, 500);
        $('#img44').animate({ width: 'hide' }, 500);
        $('#img55').animate({ width: 'hide' }, 500);
        $('#img22').animate({ width: 'toggle' }, 1000);
        $("#name_web").text("Arias&Carbajo");
        $("#enlace_web").attr('href', "https://clinicadentalariascarbajo.com").html('pincha aqui');;
        $("#tipo_web").text("Corporativa");
        $("#fecha_web").text("01/02/2019");
        $("#colabo_web").text("HTML / CSS / JavaScript");

    });
    $("#img3").click(function () {
        $('#div_img').css('margin-bottom', '2em')
        $('.content-file').fadeOut(500);
        $('.content-file').fadeIn(1000);
        $('#img11').animate({ width: 'hide' }, 500);
        $('#img22').animate({ width: 'hide' }, 500);
        $('#img44').animate({ width: 'hide' }, 500);
        $('#img55').animate({ width: 'hide' }, 500);
        $('#img33').animate({ width: 'toggle' }, 1000);
        $("#name_web").text("rmRecambios");
        $("#enlace_web").attr('href', 'https://rmcrecambios.com').html('pincha aqui');;
        $("#tipo_web").text("E-Commerce");
        $("#fecha_web").text("22/04/2017");
        $("#colabo_web").text("HTML / CSS / JavaScript");

    });
    $("#img4").click(function () {
        $('#div_img').css('margin-bottom', '2em')
        $('.content-file').fadeOut(500);
        $('.content-file').fadeIn(1000);
        $('#img11').animate({ width: 'hide' }, 500);
        $('#img33').animate({ width: 'hide' }, 500);
        $('#img22').animate({ width: 'hide' }, 500);
        $('#img55').animate({ width: 'hide' }, 500);
        $('#img44').animate({ width: 'toggle' }, 1000);
        $("#name_web").text("Sevilla Futból Club");
        $("#enlace_web").attr('href', 'https://www.sevillafc.es').html('pincha aqui');;
        $("#tipo_web").text("Corporativa , E-Commerce");
        $("#fecha_web").text("18/10/17");
        $("#colabo_web").text("HTML / CSS / JavaScript");
    });
    $("#img5").click(function () {
        $('#div_img').css('margin-bottom', '2em')
        $('.content-file').fadeOut(500);
        $('.content-file').fadeIn(1000);
        $('#img11').animate({ width: 'hide' }, 500);
        $('#img33').animate({ width: 'hide' }, 500);
        $('#img44').animate({ width: 'hide' }, 500);
        $('#img22').animate({ width: 'hide' }, 500);
        $('#img55').animate({ width: 'toggle' }, 1000);
        $("#name_web").text("Mi Proyecto");
        $("#enlace_web").attr('href', '#').html('pincha aqui');;
        $("#tipo_web").text("blog");
        $("#fecha_web").text("15/04/2020");
        $("#colabo_web").text("HTML / CSS / JavaScript");
    });

});
