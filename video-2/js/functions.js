// leadpages_input_data variables come from the template.json "variables" section
var leadpages_input_data = {};
$(function () {
// a simple pop-up function for social sharings windows
function popup(h, n) {
var width = 575,
height = 400,
left = ($(window).width() - width) / 2,
top = ($(window).height() - height) / 2,
url = h,
opts = 'status=1' +
',width=' + width +
',height=' + height +
',top=' + top +
',left=' + left;
window.open(h, n, opts);
}
// set the HREF for the Facebook share button using the "facebookurl"
// passed from leadpages_input_data
$('.pop-facebook').attr(
'href',
"https://www.facebook.com/sharer/sharer.php?u=" + leadpages_input_data["facebookurl"]
);
// attach "click" event handler to the social buttons
$('.pop-facebook').click(function (event) {
popup(this.href, this.id);
return false;
});
});
$(function () { // document.ready
$(window).on('load', function () { // seemingly redundant window onload event, but required to ensure your code executes in the builder at the right time.
function getEnvironment() {
var env;
if (window.location.pathname.indexOf('preview') !== -1) {
env = 0; // preview
} else if ((!!window.LeadPage && !!window.LeadPage.editor) || window.location.hostname === 'localhost') {
env = 1;  // builder
} else if (window._phantom || window.callPhantom) {
env = 2; // screenshot service
} else {
env = 3; // production / published LeadPage
}
return env;
}
var getEnv = getEnvironment();
if(getEnv === 2 || getEnv === 0){
$("#hero-video-container").hide();
}
});
});