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

$('div .user.hypebeast').spectragram('getUserFeed', {
    query: 'hypebeast',
    max: 5,
    size: 'big',
    wrapEachWith: '<p></p>',
    complete: toastr.success('Hypebeast loaded')
});


$('div .user.coffeenclothes').spectragram('getUserFeed', {
    query: 'coffeenclothes',
    max: 5,
    size: 'big',
    wrapEachWith: '<p></p>',
    complete: toastr.success('CoffeNClothes loaded')
});

$('div .user.outfitgrid').spectragram('getUserFeed', {
    query: 'outfitgrid',
    max: 5,
    size: 'big',
    wrapEachWith: '<p></p>',
    complete: toastr.success('outfitgrid loaded')
});

$('div .user.zanerobeaus').spectragram('getUserFeed', {
    query: 'zanerobeaus',
    max: 5,
    size: 'big',
    wrapEachWith: '<p></p>',
    complete: toastr.success('zanerobe loaded')
});


var $container = $('.main-container');
// initialize
$container.masonry({
    itemSelector: '.user'
});
// layout Masonry again after all images have loaded
$container.imagesLoaded(function () {
    $container.masonry({
        itemSelector: '.user'
    });
});



/*var $container = $('#container').masonry();
// layout Masonry again after all images have loaded
$container.imagesLoaded( function() {
  $container.masonry();
});*/

//toastr.clear()
