//http://instafeedjs.com
jQuery.fn.spectragram.accessData = {
    accessToken: '1988548.f59def8.49157f9d3c9f43ed8aaeaee60fdf208d',
    clientID: '8a607f8a109b4e04a831fe0309ceff0b' //8a607f8a109b4e04a831fe0309ceff0b
};

$('div .instagramfeed').spectragram('getUserFeed', {
    query: 'hypebeast',
    max: 10,
    size: 'big',
    wrapEachWith: '<p></p>'
});
