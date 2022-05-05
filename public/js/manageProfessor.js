$(document).ready(function () {

    var introList = document.getElementsByName('intro');
    introList.forEach(intro => {
        intro.innerHTML = substrHelper(intro.innerHTML, 250);
    })

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
            }),
            statusCode: {
                200: function(res) {
                    Swal.fire({
                        title: "Professor created",
                        text: "",
                        icon: 'success',
                        showCancelButton: false,
                        confirmButtonText: 'Confirm'
                    }).then(() => {
                        window.location.reload();
                    })
                },
                400: function(res) {
                    Swal.fire({
                        title: "Professor already exists",
                        text: "",
                        icon: 'warning',
                        showCancelButton: false,
                        confirmButtonText: 'Confirm'
                    })
                },
                401: function(res) {
                    Swal.fire({
                        title: "You are not authorized to create professor",
                        text: "Please log in",
                        icon: 'warning',
                        showCancelButton: false,
                        confirmButtonText: 'Confirm'
                    }).then(() => {
                        window.location.reload();
                    })
                }
            }
        };
        $.ajax(requestConfig);
    });
});

function spawnForm(professorId, professorName, department, introduction) {
    $('#edit-form-submit').attr('pid', professorId);
    $('#name').attr('value', professorName);
    $('#department').attr('value', department);
    $('#introduction').attr('placeholder', substrHelper(introduction, 70));
}

function substrHelper(str, len) {
    let currSpace = -1;
    if (str.length <= len) return str;
    for (let i = len - 1; i >= 0; i--) {
        if (str.charAt(i) === ' ') {
            return str.substring(0, i) + ' ...'
        }
    }
    return;
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
                Swal.fire({
                    title: "You are not authorized to delete professor",
                    text: "Please log in",
                    icon: 'warning',
                    showCancelButton: false,
                    confirmButtonText: 'confirm'
                })
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