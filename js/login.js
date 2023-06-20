//Carga de login con AJAX


$(document).ready(function () {

  $("#nombre").focusout(function () {
      var datos = 'nombre=' +$("#nombre").val();
      var url = "php/validar.php";
      var dataType = "html";

      $.ajax({
          type: "POST",
          url: url,
          data: datos,

          success: function(data){
            if (data === 0) {

                $( '#error_user' ).html("El nombre de usuario no esta disponible");

            }else{

                $(  '#error_user' ).html("El nombre de usuario  esta disponible");
            }

          },
      });
  });    
});