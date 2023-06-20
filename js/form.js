

function valFor() {
    var contador = 0;
    //validar nombre
    if (presupuesto.nombre.value.length == '') {
        alert('El nombre no es valido');
        return false;
    } else {
        contador++;
    }

    //validar apellidos
    if (presupuesto.apellidos.value.length == '') {
        alert('los apellidos no son validos');
        return false;
    } else {
        contador++;
    }

    //validar telefono
    if ((presupuesto.telefono.value.length != 9) || (isNaN(presupuesto.telefono.value))) {
        alert('El numero de telefono no es valido');
        return false;
    } else {
        contador++;
    }

    //validar Email
    listacar = /^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,3})$/;
    if (!listacar.test(document.getElementById('email').value)) {
        alert('El email no es valido');
        return false;
    } else {
        contador++;
    }

    //plazo de entrega
    if ((presupuesto.meses.value.length == 0) || (isNaN(presupuesto.meses.value))) {
        alert('Debe indicar el plazo de entrega en meses')
        return false;
    } else {
        contador++;
    }

    if (document.getElementById('elige').selected) {
        alert('Debe seleccionar una opcion de tipo de pagina web')
        return false;
    } else {
        contador++;
    }

    if (presupuesto.privacidad.checked == false) {
        alert("Debes aceptar los terminos y condiciones");
        presupuesto.privacidad.focus();
        return true;
    }

    if (contador === 6) {
        alert('El formulario se ha rellenado correctamente en breve nos pondremos en contacto con usted');
        document.getElementById('form_contac').submit();
    }
}
var tipo_web = 0;
var plazo = 0;
var seccion = 0;
var elecciones = 0;


//descuento de plazo de entrega
function descuento() {
    var meses = parseFloat(document.getElementById('meses').value);

    switch (meses) {

        case 1:
            plazo = 5;
            break;

        case 2:
            plazo = 10;
            break;

        case 3:
            plazo = 15;
            break;

        case 4:
            plazo = 20;
            break;

        default:

            break;
    }
}

//select del tipo de pagina
function tipoWeb() {
    switch ((document.getElementById('tipo').value)) {

        case 'blog':
            tipo_web = 600;
            break;
        case 'e-commerce':
            tipo_web = 700;
            break;
        case 'corporativa':
            tipo_web = 800;
            break;
        case 'personal':
            tipo_web = 900;
            break;
        case 'foro':
            tipo_web = 1000;
            break;

        default:
            alert('Debe elegir un tipo de web')
            break;
    }
};




//contador para checkbox
function sd() {
    var total = 0;
    $("input:checkbox").each(function () {
        if ($(this).is(':checked')) {
            total++;
            seccion = total * 400;
        } else if (total < 1) {
            seccion = 0;
        }
    });
}


//funcion para el precio final
function preFinal() {
    var sDescuento = (tipo_web + seccion) * plazo;
    var prefinal = sDescuento / 100;
    presupuesto.pre.value = tipo_web + seccion - prefinal;
}




function valFor1() {
    var contador = 0;
    //validar nombre
    if (form_contac.nombre.value.length == '') {
        alert('El nombre no es valido');
        return false;
    } else {
        contador++;
    }

    //validar apellidos
    if (form_contac.apellidos.value.length == '') {
        alert('los apellidos no son validos');
        return false;
    } else {
        contador++;
    }

    //validar telefono
    if ((form_contac.telefono.value.length != 9) || (isNaN(form_contac.telefono.value))) {
        alert('El numero de telefono no es valido');
        return false;
    } else {
        contador++;
    }

    //validar Email
    //validar Email
    listacar = /^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,3})$/;
    if (!listacar.test(document.getElementById('mail').value)) {
        alert('El email no es valido');
        return false;
    } else {
        contador++;
    }
    //checkbox Terminos y condiciones
    if (form_contac.privacidad.checked == false) {
        alert("Debes aceptar los terminos y condiciones");
        form_contac.privacidad.focus();
        return true;
    }
    //Envio del formulario
    if (contador === 4) {
        alert('El formulario se ha rellenado correctamente en breve nos pondremos en contacto con usted')
        document.getElementById('form_contac').submit();
    }
}

//login

$(document).ready(function(){
    $("#enviar").click(function () {
        var user=$("#user").val();
        var pass=$("#password").val();

        var datos=$("#form_login").serialize();

        var url ="verificar.php"
        var dataType="html";

            $.$.ajax({
                type: "post",
                url: url,
                data: datos,
                
                success: function (data) {
                    if (data==0) {
                        $("respuesta").html("Usuario o contraseña incorrecto");
                    } else {
                        $(location).attr('href', 'index.html');
                    }
                    
                },
                dataType: dataType,
            });
    })
});




