window.addEventListener("scroll", function () {
    if (document.body.scrollTop >= $(window).height() || document.documentElement.scrollTop >= $('#section-home').height() - 100) {
        $('.menu').stop().show();
    } else {
        $('.menu').stop().hide();
    }
});

$.appear('#section-motto > .container > .row', {});
$.appear('#section-motto ul', {});
$.appear('#section-about', {});
$.appear('#section-about ul', {});
$.appear('#section-commitment', {});
$.appear('#section-service', {});

$(document).ready(function () {
    var flagMotto = false;
    var flagMottoContent = false;
    var flagAbout = false;
    var flagAboutContent = false;
    var flagCommitment = false;
    var flagService = false;
    // motto
    $('#section-motto > .container > .row').on('appear', function (event, $all_appeared_elements) {
        if (flagMotto == false) {
            flagMotto = true;
            $("#section-motto img,#section-motto .section-title").addClass('appear');
            $("#section-motto ul").addClass('appear');
        }
    });
    $('#section-motto > .container > .row').on('disappear', function (event, $all_appeared_elements) {
        if (flagMotto == true) {
            flagMotto = false;
            $("#section-motto img,#section-motto .section-title").removeClass('appear');
            $("#section-motto ul").removeClass('appear');
        }
    });
    $('#section-motto ul').on('appear', function (event, $all_appeared_elements) {
        if (flagMottoContent == false) {
            flagMottoContent = true;
            $("#section-motto ul").addClass('appear');
        }
    });
    $('#section-motto ul').on('disappear', function (event, $all_appeared_elements) {
        if (flagMottoContent == true) {
            flagMottoContent = false;
            $("#section-motto ul").removeClass('appear');
        }
    });
    // about
    $('#section-about').on('appear', function (event, $all_appeared_elements) {
        if (flagAbout == false) {
            flagAbout = true;
            $("#section-about img,#section-about span").addClass('appear');
        }
    });
    $('#section-about').on('disappear', function (event, $all_appeared_elements) {
        if (flagAbout == true) {
            flagAbout = false;
            $("#section-about img,#section-about span").removeClass('appear');
        }
    });
    $("#section-about ul").on('appear', function (event, $all_appeared_elements) {
        if (flagAboutContent == false) {
            flagAboutContent = true;
            $("#section-about ul").addClass('appear');
        }
    });
    $("#section-about ul").on('disappear', function (event, $all_appeared_elements) {
        if (flagAboutContent == true) {
            flagAboutContent = false;
            $("#section-about ul").removeClass('appear');
        }
    });

    // commitment
    $('#section-commitment').on('appear', function (event, $all_appeared_elements) {
        if (flagCommitment == false) {
            flagCommitment = true;
            $("#section-commitment .title-right-commitments,#section-commitment .content-commitments").removeClass('disappear').addClass('appear');
        }
    });
    $('#section-commitment').on('disappear', function (event, $all_appeared_elements) {
        if (flagCommitment == true) {
            flagCommitment = false;
            $("#section-commitment .title-right-commitments,#section-commitment .content-commitments").removeClass('appear').addClass('disappear');
        }
    });

    // service
    $('#section-service').on('appear', function (event, $all_appeared_elements) {
        if (flagService == false) {
            flagService = true;
            $("#section-service .section-title").addClass('appear');
        }
    });
    $('#section-service').on('disappear', function (event, $all_appeared_elements) {
        if (flagService == true) {
            flagService = false;
            $("#section-service .section-title").removeClass('appear');
        }
    });
    $('.menu,.overlay').click(function () {
        $('.overlay').hide();
        $('.menu-list').stop().slideUp(150);
    });
    $('.btn-menu').click(function (e) {
        e.stopPropagation();
        $('.overlay').show();
        $('.menu-list').stop().slideDown(200);
    });
    $('ul.menu-list').click(function (e) {
        e.stopPropagation();
    });

    var contactusHeight = $('.contact-form').height();
    var formLabelHeight = $('.form-label').height() + 12; // 10 la margin top
    $('#map').height(contactusHeight - formLabelHeight);
});