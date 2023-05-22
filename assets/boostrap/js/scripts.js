$(document).ready(function () {
    if ($(window).width() < 767) {
        $("#idComu").hide();
        $("#idRese").hide();

        $("#enlaceComu").click(function () {
            $("#idComu").show();
            $("#idRese").hide();
        });
        $("#enlaceRese").click(function () {
            $("#idRese").show();
            $("#idComu").hide();
        });
    }
    $("#btnComu").click(function (e) {
        var nombre = $('#nombreComu').val();
        var correo = $('#correoComu').val();
        var telefono = $('#telefonoComu').val();
        var motivo = $('#motivoComu option:selected').val();

        if (nombre == '') {
            alert("El campo 'Nombre' es obligatorio");
            e.preventDefault();
        }
        if (correo == '') {
            alert("El campo 'Correo' es obligatorio");
            e.preventDefault();
        }
        if (telefono == '') {
            alert("El campo 'Télefono' es obligatorio");
            e.preventDefault();
        }
        if (nombre != '' && correo != '' && telefono != '') {
            alert('Muchas gracias ' + nombre + ' hemos recibido su sugerencia y enviaremos una pronta respuesta al correo ' + correo);
            $("#btnComu").submit();
            $('#correo').val('');
            $('#telefono').val('');
            $('#nombreComu').val('');
            $('#motivoComu').val($(this).find('option:first').val());
        }
    });

    $("#btnRese").click(function (e) {
        var nombre = $('#nombre').val();
        var correo = $('#correo').val();
        var telefono = $('#telefono').val();
        var fecha = $('#fecha').val();
        var hora = $('#hora').val();
        var cantidad = $('#cantidad').val();


        if (nombre == '') {
            alert("El campo 'Nombre' es obligatorio");
            e.preventDefault();
        }
        if (correo == '') {
            alert("El campo 'Correo' es obligatorio");
            e.preventDefault();
        }
        if (telefono == '') {
            alert("El campo 'Télefono' es obligatorio");
            e.preventDefault();
        }
        if (fecha == '') {
            alert("El campo 'Fecha' es obligatorio");
            e.preventDefault();
        }
        if (hora == '') {
            alert("El campo 'Hora' es obligatorio");
            e.preventDefault();
        }
        if (cantidad == '') {
            alert("El campo 'Cantidad' es obligatorio");
            e.preventDefault();
        }
        if (nombre != '' && correo != '' && telefono != '' && fecha != '' && hora != '' && cantidad != '') {
            alert('Estimado(a) ' + nombre + ' agradecemos por reservar con nosotros. Hemos registrado ' + cantidad + ' asistentes. Se ha enviado el codigo de confirmación al correo ' + correo + '\nGracias por preferirnos');
            $("#btnRese").submit();
            $('#correo').val('');
            $('#telefono').val('');
            $('#nombreComu').val('');
            $('#fecha').val('');
            $('#hora').val('');
            $('#cantidad').val('');

        }
    });

    var modal = document.getElementById("myModal");
    var modal2 = document.getElementById("myModal2");
    var modal3 = document.getElementById("myModal3");
    var body = document.getElementsByTagName("body")[0];

    $("#card1").click(function () {
        modal.style.display = "block";
        body.style.position = "static";
        body.style.height = "100%";
        body.style.overflow = "hidden";
    });
    $("#card2").click(function () {
        modal2.style.display = "block";
        body.style.position = "static";
        body.style.height = "100%";
        body.style.overflow = "hidden";
    });
    $("#card3").click(function () {
        modal3.style.display = "block";
        body.style.position = "static";
        body.style.height = "100%";
        body.style.overflow = "hidden";
    });
    $("#close2").click(function () {
        modal2.style.display = "none";
        body.style.position = "inherit";
        body.style.height = "auto";
        body.style.overflow = "visible";
    });
    $("#close1").click(function () {
        modal.style.display = "none";
        body.style.position = "inherit";
        body.style.height = "auto";
        body.style.overflow = "visible";
    });
    $("#close3").click(function () {
        modal3.style.display = "none";
        body.style.position = "inherit";
        body.style.height = "auto";
        body.style.overflow = "visible";
    });


    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
            body.style.position = "inherit";
            body.style.height = "auto";
            body.style.overflow = "visible";
        }
        if (event.target == modal2) {
            modal2.style.display = "none";
            body.style.position = "inherit";
            body.style.height = "auto";
            body.style.overflow = "visible";
        }
        if (event.target == modal3) {
            modal3.style.display = "none";
            body.style.position = "inherit";
            body.style.height = "auto";
            body.style.overflow = "visible";
        }
    }

});
