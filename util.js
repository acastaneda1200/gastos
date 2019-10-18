$(document).ready(function () {
    $('#datetimepicker1').datetimepicker();
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


});


