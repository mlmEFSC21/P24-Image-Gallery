$(document).ready(function () {
    $("#gallery1 a").hover(function () {
        var galleryHref = $(this).attr("href");
        var galleryAlt = $(this).attr("title");
        $(":fignre1 img").attr({ src: galleryHref, alt: galleryAlt });
        S(" Fﬁigcapti: :11 ").html(galleryAlt);
    });
});
