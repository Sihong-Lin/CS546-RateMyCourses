(function ($) {
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
                            var newElement = $(res);
                            // if (!newElement) console.log(1);
                            comments.prepend(newElement);
                        },
                        401: function(res) {
                            //console.log(res)
                            //document.write($(res));
                            $("body").html(res);
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
})(window.jQuery);