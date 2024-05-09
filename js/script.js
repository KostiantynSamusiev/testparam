document.addEventListener("DOMContentLoaded", (event) => {

    // Get the current URL
    var currentUrl = window.location.href
    var urlParams = new URLSearchParams(window.location.search);
    var links = document.getElementsByTagName("a");

    // Iterate over each <a> element and update its href attribute
    for (var i = 0; i < links.length; i++) {
        var href = links[i].getAttribute("href");
        // Check if href is not null and if it's not a hash link
        if (href && href.charAt(0) !== "#") {
            // Add current URL parameters to the href
            if (href.indexOf('?') !== -1) {
                links[i].setAttribute("href", href);
            } else {
                links[i].setAttribute("href", urlParams.toString());
            }
        }

    }

});