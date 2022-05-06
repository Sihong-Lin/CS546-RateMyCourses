$(document).ready(function () {
    var form = $('#review-form'),
    comments = $('#comments'),
    _id = $("#review-form").attr("value");

    form.submit(function (event) {
        event.preventDefault();
        var comment = $('#comment').val(),
        rating = $('#rating').val();
        try {
            if (comment && rating) {
                var requestConfig = {
                    method: 'POST',
                    url: 'http://localhost:3000/professors/' + _id,
                    contentType: 'application/json',
                    data: JSON.stringify({
                        comment: comment,
                        rating: rating
                    }),
                    statusCode: {
                        200: function(res) {
                            Swal.fire({
                                title: "Comment Added",
                                text: "Please log in",
                                icon: 'success',
                                showCancelButton: false,
                                confirmButtonText: 'confirm'
                            }).then(() => {
                                // var newElement = $(res);
                                // comments.prepend(newElement);
                                window.location.reload();
                            })
                        },
                        401: function(res) {
                            Swal.fire({
                                title: "You are not authorized to add comment",
                                text: "Please log in",
                                icon: 'warning',
                                showCancelButton: true,
                                confirmButtonText: 'Log in',
                                // closeOnCancel: true
                            }).then((res) => {
                                if (res.isConfirmed) {
                                    window.location = "http://localhost:3000/login.html";
                                }
                            })
                        }
                    }
                };
                /*
                $.ajax(requestConfig).then(function (res) {
                    var newElement = $(res);
                    // if (!newElement) console.log(1);
                    comments.prepend(newElement);
                });
                */
                $.ajax(requestConfig)
            } else {
                throw "comment or rating is missing"
            }
        } catch (e) {
            console.log(e);
        }
    })
});