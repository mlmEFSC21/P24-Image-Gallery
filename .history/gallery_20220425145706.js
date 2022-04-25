$(document).ready(function () {
    $("#gallery1 a").hover(function () {
        var galleryHref = $(this).attr("href");
        var galleryAlt = $(this).attr("title");
        $("#figure1 img").attr({ src: galleryHref, alt: galleryAlt });
        S("#figcaption1").html(galleryAlt);
    });
});
