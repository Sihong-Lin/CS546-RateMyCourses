(function ($) {
    var form = $('#review-form'),
    comments = $('#comments')

    form.submit(function (event) {
        // event.preventDefault();
        var comment = $('#comment').val(),
        rating = $('#rating').val();
        try {
            if (comment && rating) {
                var requestConfig = {
                    method: 'POST',
                    url: document.URL,
                    contentType: 'application/json',
                    data: JSON.stringify({
                        comment: comment,
                        rating: rating
                    })
                };
                $.ajax(requestConfig).then(function (res) {
                    var newElement = $(res);
                    if (!newElement) console.log(1);
                    comments.append(newElement);
                });
            } else {
                throw "comment or rating is missing"
            }
        } catch (e) {
            console.log(e);
        }
    })
})(window.jQuery);