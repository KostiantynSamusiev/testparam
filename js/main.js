document.addEventListener("DOMContentLoaded", (event) => {

    // Get the current URL
    var currentUrl = window.location.href
    var urlParams = new URLSearchParams(window.location.search);
    console.log(urlParams.size)
    var links = document.getElementsByTagName("a");
    var customLink = 'https://www.eu-tf-track.online/c/26474b1b6d8fb1f3'

    // Iterate over each <a> element and update its href attribute
    for (var i = 0; i < links.length; i++) {
        var href = links[i].getAttribute("href");
        // Check if href is not null and if it's not a hash link
        if (urlParams.size == 0) {
            links[i].setAttribute("href", customLink);

        } else {
            links[i].setAttribute("href", customLink + "?" + urlParams.toString());

        }

        if (urlParams.includes('color')) {
            console.log('has color')
        }
    }

});