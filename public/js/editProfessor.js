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
            // hide here doesn't work
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