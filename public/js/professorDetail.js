$(document).ready(function () {
    var form = $('#review-form'),
    comments = $('#comments'),
    _id = $("#review-form").attr("value");
    $('#comment-error').hide();
    $('#rating-error').hide();

    form.submit(function (event) {
        event.preventDefault();
        var comment = $('#comment').val(),
        rating = $('#rating').val();
        if (comment.trim().length !== 0 && rating !== 'Rating') {
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
                            var newElement = $(res);
                            comments.prepend(newElement);
                            // window.location.reload();
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
                                window.location = "http://localhost:3000/login";
                            }
                        })
                    }
                },
            }
            /*
            $.ajax(requestConfig).then(function (res) {
                var newElement = $(res);
                // if (!newElement) console.log(1);
                comments.prepend(newElement);
            });
            */
            $.ajax(requestConfig).then(function(res) {
                $('#comment-error').hide();
                $('#rating-error').hide();
            })
        } else {
            if (comment.trim().length === 0) { $('#comment-error').show() } 
            if (rating === 'Rating') {$('#rating-error').show()}
        }
    })
});