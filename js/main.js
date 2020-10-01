function open_nav() {
    document.getElementById('mobile-nav').style.width = '80%';
}
function close_nav() {
    document.getElementById('mobile-nav').style.width = '0px';
}

function open_ba_popup() {
    popup = document.getElementById('ba-popup');
    popup.style.display = 'flex';
    disableScroll()
}

function close_ba_popup() {
    document.getElementById('ba-popup').style.display = 'none';
    enableScroll();
}

function disableScroll() {
    // Get the current page scroll position 
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,

        // if any scroll is attempted, set this to the previous value 
        window.onscroll = function () {
            window.scrollTo(scrollLeft, scrollTop);
        };
}

function enableScroll() {
    window.onscroll = function () { };
}