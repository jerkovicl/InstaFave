toastr.options = {
    "positionClass": "toast-top-right",
    "newestOnTop": true,
    "showDuration": "600",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
}


//http://instafeedjs.com
jQuery.fn.spectragram.accessData = {
    accessToken: '1988548.f59def8.49157f9d3c9f43ed8aaeaee60fdf208d',
    clientID: '8a607f8a109b4e04a831fe0309ceff0b' //8a607f8a109b4e04a831fe0309ceff0b
};

$('div .hypebeast').spectragram('getUserFeed', {
    query: 'hypebeast',
    max: 10,
    size: 'big',
    wrapEachWith: '<p></p>',
    complete: toastr.success('Hypebeast loaded')
});


$('div .coffeenclothes').spectragram('getUserFeed', {
    query: 'coffeenclothes',
    max: 10,
    size: 'big',
    wrapEachWith: '<p></p>',
    complete: toastr.success('CoffeNClothes loaded')
});


//toastr.clear()
