$(document).ready(function () {
    $("#editProfessor").submit(function (event) {
        event.preventDefault();
        let professorId = $("#edit-form-submit").attr('pid');
        var requestConfig = {
            method: 'PUT',
            url: 'professors/' + professorId,
            contentType: 'application/json',
            data: JSON.stringify({
                professorName: $("#name").val(),
                department: $('#department').val(),
                introduction: $('#introduction').val()
            })
        };
        $.ajax(requestConfig).then(function () {
            alert('success');
            // hide doesn't work for whatever reason
            $('#professor-edit').modal('hide');
        });
    });

    $("#createProfessor").submit(function (event) {
        event.preventDefault();
        var requestConfig = {
            method: 'POST',
            url: 'professors',
            contentType: 'application/json',
            data: JSON.stringify({
                professorName: $("#name1").val(),
                department: $('#department1').val(),
                introduction: $('#introduction1').val(),
                picture: $('#picture1').val()
            })
        };
        $.ajax(requestConfig).then(function () {
            alert('success');
            // hide doesn't work for whatever reason
            $('#professor-edit').modal('hide');
        });
    });
});

function spawnForm(professorId) {
    $('#edit-form-submit').attr('pid', professorId);
}

function deleteProfessor(professorId) {
    var requestConfig = {
        method: 'DELETE',
        url: 'http://localhost:3000/professors/' + professorId,
        statusCode: {
            200: function(res) {
                Swal.fire(
                    'Deleted!',
                    'The course has been deleted.',
                    'success'
                ).then((result) => {
                    if (result.value) {
                        window.location.reload();
                    }
                });
            },
            401: function(res) {
                alert(res)
            }
        }
    };
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        $.ajax(requestConfig)
    })
}