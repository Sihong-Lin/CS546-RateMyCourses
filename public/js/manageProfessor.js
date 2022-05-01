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
    confirm_ = confirm('This action will delete current professor! Are you sure?');
    $.ajax({
        type: 'DELETE',
        url: 'http://localhost:3000/professor/' + professorId,
        success: function (result) {
            alert('The professor has been deleted.');
            location.reload(true);
        }
    });
}