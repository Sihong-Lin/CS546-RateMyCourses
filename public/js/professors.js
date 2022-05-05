$(document).ready(function () {
    var introList = document.getElementsByName('intro');
    introList.forEach(intro => {
        console.log(intro.innerHTML);
        intro.innerHTML = substrHelper(intro.innerHTML, 250);
    })
});

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