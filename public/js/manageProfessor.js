$(document).ready(function () {

    var introList = document.getElementsByName('intro');
    introList.forEach(intro => {
        intro.innerHTML = substrHelper(intro.innerHTML, 250);
    })

    $("#editProfessor").submit(function (event) {
        event.preventDefault();
        let error = false;
        try { checkUserName($("#name").val()) } catch { error=true; $("#name-error").show(); };
        try { checkDepartment($('#department').val()) } catch { error=true; $("#dpt-error").show(); };
        try { checkIntroduction($('#introduction').val()) } catch { error=true; $("#intro-error").show(); };

        if (!error) {
            let professorId = $("#edit-form-submit").attr('pid');
            var requestConfig = {
                method: 'PUT',
                url: 'professors/' + professorId,
                contentType: 'application/json',
                data: JSON.stringify({
                    professorName: $("#name").val(),
                    department: $('#department').val(),
                    introduction: $('#introduction').val()
                }),
                statusCode: {
                    200: function(res) {
                        Swal.fire({
                            title: "Professor edited",
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
                            title: "Professor update failed",
                            text: "",
                            icon: 'warning',
                            showCancelButton: false,
                            confirmButtonText: 'Confirm'
                        }).then(() => {
                            window.location.reload();
                        })
                    },
                    401: function(res) {
                        Swal.fire({
                            title: "You are not authorized to edit professor",
                            text: "Please log in",
                            icon: 'warning',
                            showCancelButton: false,
                            confirmButtonText: 'Confirm'
                        }).then((res) => {
                            if (res.isConfirmed) {
                                window.location = "http://localhost:3000/login.html";
                            }
                        })
                    }
                }
            };
            $.ajax(requestConfig)
        }
    });

    $("#createProfessor").submit(function (event) {
        event.preventDefault();

        var error1 = false
        try { checkUserName($("#name1").val()) } catch { error1=true; $("#name-error1").show(); };
        try { checkDepartment($('#department1').val()) } catch { error1=true; $("#dpt-error1").show(); };
        try { checkIntroduction($('#introduction1').val()) } catch { error1=true; $("#intro-error1").show(); };
        try { checkProfessorPicture($('#picture1').val()) } catch { error1=true; $("#pic-error1").show(); };

        if (!error1) {
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
                            confirmButtonText: 'Log in'
                        }).then((res) => {
                            if (res.isConfirmed) {
                                window.location = "http://localhost:3000/login.html";
                            }
                        })
                    }
                }
            };
            $.ajax(requestConfig);
        }
    });
});

function spawnForm(professorId, professorName, department, introduction) {
    $('#edit-form-submit').attr('pid', professorId);
    $('#name').attr('value', professorName);
    $('#department').attr('value', department);
    // $('#introduction').attr('placeholder', substrHelper(introduction, 70));
    $('#introduction').attr('value', introduction);
    $("#name-error").hide();
    $("#dpt-error").hide();
    $("#intro-error").hide();
}

function spawnCreateForm() {
    $("#name-error1").hide();
    $("#dpt-error1").hide();
    $("#intro-error1").hide();
    $("#pic-error1").hide();
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