document.addEventListener("DOMContentLoaded", (event) => {

    // // Get the current URL
    // var currentUrl = window.location.href
    // var urlParams = new URLSearchParams(window.location.search);
    // console.log(urlParams.size)
    // var links = document.getElementsByTagName("a");
    // var customLink = 'https://bing.com'

    // // Iterate over each <a> element and update its href attribute
    // for (var i = 0; i < links.length; i++) {
    //     var href = links[i].getAttribute("href");
    //     // Check if href is not null and if it's not a hash link
    //     if (urlParams.size == 0) {
    //         links[i].setAttribute("href", customLink);

    //     } else {
    //         links[i].setAttribute("href", customLink + "?" + urlParams.toString());

    //     }

    // }


    function sayHi() {
        // Define the URL you want to open
        const url = "https://www.youtube.com";

        // Ask the user if they want to open the link
        const userConfirmed = confirm("Do you want to open this link in a new tab?");

        // If the user clicks "OK", open the link in a new tab
        if (userConfirmed) {
            window.open(url, "_blank"); // "_blank" opens the link in a new tab
        } else {
            alert("You chose not to open the link.");
        }

    }

    setTimeout(sayHi, 2000);

});