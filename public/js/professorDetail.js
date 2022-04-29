(function ($) {
    var form = $('#review-form'),
    url = document.URL;

    form.submit(function (event) {
        event.preventDefault();
        var comment = $('#comment').val(),
        rating = $('#rating');
        try {
            console.log(url);
            if (comment && rating) {
                var requestConfig = {
                    method: 'POST',
                    url: url,
                    contentType: 'application/json',
                    data: JSON.stringify({
                        comment: comment,
                        rating: rating
                    })
                };
                $.ajax(requestConfig).then(function () {
                    console.log("request submitted")
                });
            } else {
                throw "comment or rating is not defined"
            }
        } catch (e) {
            console.log(e);
        }
    })
})(window.jQuery);