$(document).ready(function () {

    $('#datetimepicker4').datetimepicker({
        format: 'L'
    });

    listado_gastos()

    function listado_gastos() {
        $.ajax({
            url: "listado.php",
            type: 'GET'
        }).done(function (data) {

            var data = JSON.parse(data)
            let lista = ''
            data.forEach(function (element) {
                lista +=
                    `
                <tr>
                <td>${element.descripcion}</td>
                <td>${element.cantidad}</td>
                <td>${element.fecha}</td>
                </tr>
                `
            });

            $('.bodylistado').html(lista)


        })
    }



    $("#frmGastos").submit(function (e) {
        
       
        
        let namepost = $(this).serializeArray()
        $.ajax({
            url: "insert.php",
            type: 'POST',
            data: namepost
        }).done(function (data) {
            listado_gastos()
        }).fail(function (data) {
            alert("Ocurrio un error")
        });
    });

    
        $.validator.messages.required = '';

        $('#frmGastos').validate({
            
            rules: {
                descripcion: {
                    required: true
                },
                precio: {
                    required: true,
                    maxlength: 4
                },
                fecha: {
                    required: true

                },

            },
          


            highlight: function (element) {
                $(element).removeClass('is-valid').addClass('is-invalid');
            },
            unhighlight: function (element) {
                $(element).removeClass('is-invalid').addClass('is-valid');
            },
        });


    


});




