$(document).ready(function () {
    $(".fondDirection button").click(function () {
        $(".donateInfo").slideDown(400, "swing");
    });
    $(".closeForm").click(function () {
        $(".donateInfo").slideUp(400, "swing");
    });
    $(".mainDonationButton").click(function () {
        $(".dontationWays").slideToggle(400, "swing");
    });

});

function copyToClipboard(icon) {
    var someText = icon.previousSibling;
    var copyText = someText.innerHTML.split(' ');


    navigator.clipboard.writeText(copyText[1]).then(() => {
        /* Resolved - text copied to clipboard */
        icon.className = "bi bi-clipboard-check";
    }, () => {
        /* Rejected - clipboard failed */
        icon.className = "bi bi-clipboard-x";
    });
    setTimeout(function () { icon.className = "bi bi-clipboard"; }, 2000);
}
