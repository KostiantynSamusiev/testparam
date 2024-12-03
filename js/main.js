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


    // function sayHi() {
    //     // Define the URL you want to open
    //     const url = "https://www.youtube.com";

    //     // Ask the user if they want to open the link
    //     const userConfirmed = confirm("Do you want to open this link in a new tab?");

    //     // If the user clicks "OK", open the link in a new tab
    //     if (userConfirmed) {
    //         window.open(url, "_blank"); // "_blank" opens the link in a new tab
    //     } else {
    //         alert("You chose not to open the link.");
    //     }

    // }

    // setTimeout(sayHi, 2000);


    // function showCustomConfirm(message, callback) {
    //     // Display the message
    //     document.querySelector('#custom-confirm p').textContent = message;

    //     // Show the custom confirm dialog
    //     const confirmOverlay = document.getElementById('custom-confirm');
    //     confirmOverlay.style.display = 'flex';

    //     // Handle the Yes button click
    //     document.getElementById('confirm-yes').onclick = function () {
    //         confirmOverlay.style.display = 'none';
    //         callback(true);
    //     };

    //     // Handle the No button click
    //     document.getElementById('confirm-no').onclick = function () {
    //         confirmOverlay.style.display = 'none';
    //         callback(false);
    //     };
    // }

    // // Example usage
    // const url = "http://bing.com";

    // showCustomConfirm("'Instagram' wants to open in browser", function (confirmed) {
    //     if (confirmed) {
    //         location.href = "https://www.bing.com";
    //     } else {
    //         alert("You chose not to open the link.");
    //     }
    // });



});