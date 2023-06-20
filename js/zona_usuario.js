

$('#btm_submit').click(function (e) { 
    e.preventDefault();
    let user = $('#usuario').val();
    let pass = $('#password').val();
    let datos = $('#formLogin').serialize();
    //alert(datos);
    let url = "procesar_login.php";
    let dataType = "html";

        $.ajax({
            type: "POST",
            url: url,
            data: datos,
            dataType: dataType,
            success: function (data) {
                if (data == false) {
                    $("#respuesta").html("usuario incorrecto");
                }else{
                    $(location).attr('href','index.php');
                }
            },
            dataType: dataType
        });
    
});




/*
$(document).ready(function() {
    let data = "";
    $.ajax({
        type: "POST",
        url: "./php/procesar_login.php",
        data: '',
        success: function (data) {
            $("#container_index").load("enlace_logueado.php");
        }
    });

});
     
$(document).ready(function() {
            //$('#contenido').hide();
            $('#form_login').submit(function(e){
                e.preventDefault();
                $('#container_index').load("enlace_logueado.php");
        return false;              
    }); 
});
   
*/