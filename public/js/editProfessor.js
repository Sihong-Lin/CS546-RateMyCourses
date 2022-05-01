$(document).ready(function () {
    $("editProfessor").submit(function (event) {
        event.preventDefault();
        var requestConfig = {
            method: 'PUT',
            url: document.URL,
            contentType: 'application/json',
            data: JSON.stringify({
                professorName: $("#name").val(),
                department: $('#department').val(),
                introduction: $('#introduction').val()
            })
        };
        $.ajax(requestConfig).done(function (response) { //
            $("#server-results").html("ssssssssssssss");
        });
    });
});

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