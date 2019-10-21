
// Example starter JavaScript for disabling form submissions if there are invalid fields



$(document).ready(function () {

    var edit = false;

    $('#datetimepicker4').datetimepicker({
        format: 'D/M/Y',

    });

    $("#datetimepicker4").focusin(function () {
        $('.btnCalendar').click()
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
                <td>
                <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
                <button type="button" title="Editar" data-id="${element.idgastos}" class="btn btn-primary btnEditar">
                <i class="fa fa-edit"></i></button>
                <button type="button" title="Eliminar" data-id="${element.idgastos}" class="btn btn-danger btnEliminar">
                <i class="fa fa-times"></i></button>
                
                </div>
                
                </td>
                </tr>
                `
            });

            $('.bodylistado').html(lista)


        })
    }

    $('#frmGastos').submit(function (event) {
        event.preventDefault();
        if ($('#frmGastos')[0].checkValidity() === false) {
            event.stopPropagation();
        } else {
            let id = $('#idGasto').val()
            let namepost = $(this).serializeArray()
            namepost.push({ name: "id", value: id });
            const url = edit === false ? 'insert.php' : 'update.php';
            $.ajax({
                url: url,
                type: 'POST',
                data: namepost
            }).done(function (data) {
                edit = false;
                listado_gastos()
            }).fail(function (data) {
                alert("Ocurrio un error")
            });
        }
        $('#frmGastos').addClass('was-validated');
    });

    $('body').on('click', '.btnEditar', function () {
        var id = $(this).data("id")

        $.ajax({
            url: "getGasto.php",
            type: 'POST',
            data: { id }
        }).done(function (data) {
            var gasto = JSON.parse(data)
            $('#txtDescripcion').val(gasto[0].descripcion)
            $('#txtPrecio').val(gasto[0].cantidad)
            $('#idGasto').val(gasto[0].idgastos)
            $("#datetimepicker4").find("input").val(gasto[0].fecha);
            edit = true

        })


    })

    $('body').on('click', '.btnEliminar', function () {

        if (confirm('Esta seguro de eliminar')) {
            var id = $(this).data("id")

            $.ajax({
                url: "delete.php",
                type: "POST",
                data: { id }
            }).done(function (data) {
                listado_gastos()
            })
        }
    })

});




